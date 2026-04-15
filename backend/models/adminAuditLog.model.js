import mongoose from "mongoose";

const adminAuditLogSchema = new mongoose.Schema(
  {
    actor: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
      name: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      role: {
        type: String,
        default: "",
      },
    },
    action: {
      type: String,
      required: true,
      trim: true,
    },
    resource: {
      type: String,
      default: "",
      trim: true,
    },
    method: {
      type: String,
      default: "",
      trim: true,
      uppercase: true,
    },
    route: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: ["success", "failure"],
      default: "success",
    },
    statusCode: {
      type: Number,
      default: 200,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    ipAddress: {
      type: String,
      default: "",
      trim: true,
    },
    userAgent: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

adminAuditLogSchema.index({ createdAt: -1 });
adminAuditLogSchema.index({ "actor.userId": 1, createdAt: -1 });

const AdminAuditLog = mongoose.model("AdminAuditLog", adminAuditLogSchema);

export default AdminAuditLog;