import ContactMessage from "../models/contactMessage.model.js";
import { sendContactNotificationEmail } from "../lib/mailer.js";
import SystemSettings from "../models/systemSettings.model.js";
import logger from "../lib/logger.js";

const normalizeString = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
};

export const submitContactMessage = async (req, res) => {
  try {
    const name = normalizeString(req.body?.name);
    const email = normalizeString(req.body?.email).toLowerCase();
    const subject = normalizeString(req.body?.subject);
    const phone = normalizeString(req.body?.phone);
    const message = normalizeString(req.body?.message);
    const sourcePage = normalizeString(req.body?.sourcePage) || "home";
    const website = normalizeString(req.body?.website);

    // Honeypot field: silently accept to avoid signaling bots.
    if (website) {
      return res.status(200).json({
        message: "Message received successfully",
      });
    }

    const createdMessage = await ContactMessage.create({
      name,
      email,
      subject,
      phone,
      message,
      sourcePage,
      ipAddress: req.ip || "",
      userAgent: req.get("user-agent") || "",
    });

    try {
      const settings = await SystemSettings.findOne({ key: "global" })
        .select("emailNotificationsEnabled contactNotifyTo")
        .lean();

      const shouldNotify = settings?.emailNotificationsEnabled ?? true;
      const recipientAddress = settings?.contactNotifyTo || process.env.CONTACT_NOTIFY_TO || "";

      if (shouldNotify && recipientAddress) {
        await sendContactNotificationEmail(createdMessage, recipientAddress);
      }
    } catch (error) {
      // Notification should not fail the contact submission.
      console.log("contact notification email failed", error.message);
    }

    return res.status(201).json({
      message: "Message received successfully",
    });
  } catch (error) {
    logger.error({ err: error }, "error in submitContactMessage");
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
    const skip = (page - 1) * limit;
    const status = normalizeString(req.query.status);
    const search = normalizeString(req.query.search);

    const query = {};
    if (["new", "reviewed", "closed"].includes(status)) {
      query.status = status;
    }

    if (search) {
      const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const escapedSearch = escapeRegex(search);
      query.$or = [
        { name: { $regex: escapedSearch, $options: "i" } },
        { email: { $regex: escapedSearch, $options: "i" } },
        { subject: { $regex: escapedSearch, $options: "i" } },
        { message: { $regex: escapedSearch, $options: "i" } },
      ];
    }

    const [messages, total] = await Promise.all([
      ContactMessage.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      ContactMessage.countDocuments(query),
    ]);

    return res.status(200).json({
      messages,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(Math.ceil(total / limit), 1),
      },
    });
  } catch (error) {
    logger.error({ err: error }, "error in getContactMessages");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const updateContactMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = normalizeString(req.body?.status);

    if (!["new", "reviewed", "closed"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status value",
      });
    }

    const updated = await ContactMessage.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Contact message not found" });
    }

    return res.status(200).json({
      message: "Contact message status updated",
      contactMessage: updated,
    });
  } catch (error) {
    logger.error({ err: error }, "error in updateContactMessageStatus");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};
