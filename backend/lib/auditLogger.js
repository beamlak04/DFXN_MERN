import mongoose from "mongoose";

import AdminAuditLog from "../models/adminAuditLog.model.js";
import User from "../models/user.model.js";
import { redis } from "./redis.js";

const getRequestIp = (req) => {
  const forwardedFor = req?.headers?.["x-forwarded-for"];
  if (Array.isArray(forwardedFor)) {
    return forwardedFor[0] || "";
  }

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0].trim();
  }

  return req?.ip || "";
};

const mapMongoStatus = (readyState) => {
  if (readyState === 1) return "connected";
  if (readyState === 2) return "connecting";
  if (readyState === 3) return "disconnecting";
  return "disconnected";
};

const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildMonitorQuery = ({ status, action, route, actorRole, search }) => {
  const query = {};

  if (["success", "failure"].includes(status)) {
    query.status = status;
  }

  if (action) {
    query.action = { $regex: escapeRegex(action), $options: "i" };
  }

  if (route) {
    query.route = { $regex: escapeRegex(route), $options: "i" };
  }

  if (["admin", "master"].includes(actorRole)) {
    query["actor.role"] = actorRole;
  }

  if (search) {
    const escaped = escapeRegex(search);
    query.$or = [
      { action: { $regex: escaped, $options: "i" } },
      { resource: { $regex: escaped, $options: "i" } },
      { route: { $regex: escaped, $options: "i" } },
      { "actor.name": { $regex: escaped, $options: "i" } },
      { "actor.email": { $regex: escaped, $options: "i" } },
    ];
  }

  return query;
};

export const recordAuditEvent = async ({
  user,
  req,
  action,
  resource = "",
  status = "success",
  statusCode = 200,
  metadata = {},
}) => {
  if (!user) {
    return null;
  }

  try {
    return await AdminAuditLog.create({
      actor: {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      action,
      resource,
      method: req?.method || "",
      route: req?.originalUrl || req?.url || "",
      status,
      statusCode,
      metadata,
      ipAddress: getRequestIp(req),
      userAgent: req?.get?.("user-agent") || "",
    });
  } catch (error) {
    console.log("audit log write failed", error.message);
    return null;
  }
};

export const buildMonitoringOverview = async (params = {}) => {
  const page = Math.max(Number(params.page) || 1, 1);
  const limit = Math.min(Math.max(Number(params.limit) || 10, 1), 50);
  const query = buildMonitorQuery(params);
  const skip = (page - 1) * limit;

  const [masterUsers, totalEvents, successEvents, failureEvents, filteredTotal, recentEvents, routeBreakdown, actorBreakdown] =
    await Promise.all([
      User.countDocuments({ role: "master" }),
      AdminAuditLog.countDocuments(),
      AdminAuditLog.countDocuments({ status: "success" }),
      AdminAuditLog.countDocuments({ status: "failure" }),
      AdminAuditLog.countDocuments(query),
      AdminAuditLog.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      AdminAuditLog.aggregate([
        { $match: query },
        {
          $group: {
            _id: "$route",
            count: { $sum: 1 },
            failures: {
              $sum: {
                $cond: [{ $eq: ["$status", "failure"] }, 1, 0],
              },
            },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ]),
      AdminAuditLog.aggregate([
        { $match: query },
        {
          $group: {
            _id: {
              userId: "$actor.userId",
              name: "$actor.name",
              email: "$actor.email",
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ]),
    ]);

  let redisStatus = "unavailable";
  try {
    redisStatus = redis.status || "unknown";
  } catch (error) {
    redisStatus = "unavailable";
  }

  const memoryUsage = process.memoryUsage();

  return {
    summary: {
      masterUsers,
      totalEvents,
      successEvents,
      failureEvents,
      uptimeSeconds: Math.floor(process.uptime()),
      databaseStatus: mapMongoStatus(mongoose.connection.readyState),
      cacheStatus: redisStatus,
      heapUsedMb: Number((memoryUsage.heapUsed / 1024 / 1024).toFixed(1)),
      rssMb: Number((memoryUsage.rss / 1024 / 1024).toFixed(1)),
    },
    filteredSummary: {
      totalEvents: filteredTotal,
      page,
      limit,
    },
    pagination: {
      page,
      limit,
      total: filteredTotal,
      totalPages: Math.max(Math.ceil(filteredTotal / limit), 1),
    },
    routeBreakdown: routeBreakdown.map((entry) => ({
      route: entry._id || "unknown",
      count: entry.count,
      failures: entry.failures,
    })),
    actorBreakdown: actorBreakdown.map((entry) => ({
      userId: entry._id?.userId,
      name: entry._id?.name || "Unknown",
      email: entry._id?.email || "",
      count: entry.count,
    })),
    recentEvents: recentEvents.map((event) => ({
      _id: event._id,
      action: event.action,
      resource: event.resource || "",
      method: event.method || "",
      route: event.route || "",
      status: event.status,
      statusCode: event.statusCode,
      metadata: event.metadata || {},
      actor: {
        name: event.actor?.name || "Unknown",
        email: event.actor?.email || "",
        role: event.actor?.role || "",
      },
      createdAt: event.createdAt,
    })),
  };
};