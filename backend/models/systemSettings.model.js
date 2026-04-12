import mongoose from "mongoose";

const systemSettingsSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: "global",
    },
    emailNotificationsEnabled: {
      type: Boolean,
      default: true,
    },
    contactNotifyTo: {
      type: String,
      trim: true,
      lowercase: true,
      default: process.env.CONTACT_NOTIFY_TO || "",
    },
  },
  { timestamps: true }
);

const SystemSettings = mongoose.model("SystemSettings", systemSettingsSchema);

export default SystemSettings;