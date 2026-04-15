import { recordAuditEvent } from "../lib/auditLogger.js";

const buildRoutePath = (req) => {
  const routePath = req?.route?.path || req?.path || req?.originalUrl || "";
  return `${req?.baseUrl || ""}${routePath}`.replace(/\/+/g, "/");
};

export const auditMasterActivity = (req, res, next) => {
  if (!req.user || !["admin", "master"].includes(req.user.role)) {
    return next();
  }

  const startedAt = Date.now();
  res.on("finish", () => {
    recordAuditEvent({
      user: req.user,
      req,
      action: `${req.method} ${buildRoutePath(req)}`,
      resource: buildRoutePath(req),
      status: res.statusCode >= 400 ? "failure" : "success",
      statusCode: res.statusCode,
      metadata: {
        durationMs: Date.now() - startedAt,
      },
    });
  });

  next();
};