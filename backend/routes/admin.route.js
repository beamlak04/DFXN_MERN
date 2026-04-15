import express from "express";

import { protectRoute, adminRoute, masterRoute } from "../middleware/auth.middleware.js";
import { auditMasterActivity } from "../middleware/adminAudit.middleware.js";
import {
	getAllCategories,
	createCategory,
	editCategory,
	getCategoryById,
	deleteCategory,
	adminInfo,
	getAnalytics,
	getAdminSettings,
	getAdminMonitoring,
	updateAdminProfile,
	updateAdminPassword,
	updateContactNotificationSettings,
	getAdminUsers,
	createAdminUser,
} from "../controllers/admin.controller.js";
import { deleteOrder, editOrder, getAllOrders, getOrderById } from "../controllers/order.controller.js";
import { getContactMessages, updateContactMessageStatus } from "../controllers/contact.controller.js";

const router = express.Router();
router.get("/dashboard", protectRoute, adminRoute, auditMasterActivity, adminInfo)
router.get("/analytics", protectRoute, adminRoute, auditMasterActivity, getAnalytics)
router.get("/settings", protectRoute, adminRoute, auditMasterActivity, getAdminSettings)
router.get("/monitoring", protectRoute, masterRoute, getAdminMonitoring)
router.put("/settings/profile", protectRoute, adminRoute, auditMasterActivity, updateAdminProfile)
router.put("/settings/password", protectRoute, adminRoute, auditMasterActivity, updateAdminPassword)
router.put("/settings/contact-notifications", protectRoute, adminRoute, auditMasterActivity, updateContactNotificationSettings)
router.get("/settings/admin-users", protectRoute, masterRoute, auditMasterActivity, getAdminUsers)
router.post("/settings/admin-users", protectRoute, masterRoute, auditMasterActivity, createAdminUser)
router.get("/orders/:id", protectRoute, adminRoute, auditMasterActivity, getOrderById);
router.put("/orders/:id", protectRoute, adminRoute, auditMasterActivity, editOrder)
router.post("/orders/:id", protectRoute, adminRoute, auditMasterActivity, editOrder)
router.delete("/orders/:id", protectRoute, adminRoute, auditMasterActivity, deleteOrder);
router.post("/categories/create-category",protectRoute,adminRoute, auditMasterActivity, createCategory);
router.get("/orders", protectRoute, adminRoute, auditMasterActivity, getAllOrders);
router.get("/contact-messages", protectRoute, adminRoute, auditMasterActivity, getContactMessages);
router.patch("/contact-messages/:id/status", protectRoute, adminRoute, auditMasterActivity, updateContactMessageStatus);
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.put("/categories/:id", protectRoute,adminRoute, auditMasterActivity, editCategory);
router.post("/categories/edit/:id", protectRoute,adminRoute, auditMasterActivity, editCategory);
router.delete("/categories/:id", protectRoute, adminRoute, auditMasterActivity, deleteCategory);
export default router