import ContactMessage from "../models/contactMessage.model.js";
import { sendContactNotificationEmail } from "../lib/mailer.js";
import SystemSettings from "../models/systemSettings.model.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (!name || name.length < 2 || name.length > 80) {
      return res.status(400).json({
        message: "Name must be between 2 and 80 characters",
      });
    }

    if (!email || !emailPattern.test(email) || email.length > 120) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }

    if (subject.length > 120) {
      return res.status(400).json({
        message: "Subject must be 120 characters or less",
      });
    }

    if (phone.length > 30) {
      return res.status(400).json({
        message: "Phone number is too long",
      });
    }

    if (!message || message.length < 10 || message.length > 2000) {
      return res.status(400).json({
        message: "Message must be between 10 and 2000 characters",
      });
    }

    const forwardedFor = req.headers["x-forwarded-for"];
    const ipFromForwardedHeader = Array.isArray(forwardedFor)
      ? forwardedFor[0]
      : typeof forwardedFor === "string"
      ? forwardedFor.split(",")[0]
      : "";

    const createdMessage = await ContactMessage.create({
      name,
      email,
      subject,
      phone,
      message,
      sourcePage,
      ipAddress: ipFromForwardedHeader || req.ip || "",
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
    console.log("error in submitContactMessage", error.message);
    return res.status(500).json({
      message: "Unable to submit your message right now. Please try again later.",
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
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
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
    console.log("error in getContactMessages", error.message);
    return res.status(500).json({ message: error.message });
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
    console.log("error in updateContactMessageStatus", error.message);
    return res.status(500).json({ message: error.message });
  }
};