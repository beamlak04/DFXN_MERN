import express from "express";

import { protectRoute, adminRoute, masterRoute } from "../middleware/auth.middleware.js";
import { requireCsrf } from "../middleware/csrf.middleware.js";
import { auditMasterActivity } from "../middleware/adminAudit.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import {
	createAdminUserSchema,
	createCategorySchema,
	editOrderSchema,
	editCategorySchema,
	updateContactMessageStatusSchema,
	updateContactNotificationSettingsSchema,
	updateAdminPasswordSchema,
	updateAdminProfileSchema,
} from "../validation/schemas.js";
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
router.put("/settings/profile", protectRoute, adminRoute, requireCsrf, validateBody(updateAdminProfileSchema), auditMasterActivity, updateAdminProfile)
router.put("/settings/password", protectRoute, adminRoute, requireCsrf, validateBody(updateAdminPasswordSchema), auditMasterActivity, updateAdminPassword)
router.put("/settings/contact-notifications", protectRoute, adminRoute, requireCsrf, validateBody(updateContactNotificationSettingsSchema), auditMasterActivity, updateContactNotificationSettings)
router.get("/settings/admin-users", protectRoute, masterRoute, auditMasterActivity, getAdminUsers)
router.post("/settings/admin-users", protectRoute, masterRoute, requireCsrf, validateBody(createAdminUserSchema), auditMasterActivity, createAdminUser)
router.get("/orders/:id", protectRoute, adminRoute, auditMasterActivity, getOrderById);
router.put("/orders/:id", protectRoute, adminRoute, requireCsrf, validateBody(editOrderSchema), auditMasterActivity, editOrder)
router.post("/orders/:id", protectRoute, adminRoute, requireCsrf, validateBody(editOrderSchema), auditMasterActivity, editOrder)
router.delete("/orders/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, deleteOrder);
router.post("/categories/create-category",protectRoute,adminRoute, requireCsrf, validateBody(createCategorySchema), auditMasterActivity, createCategory);
router.get("/orders", protectRoute, adminRoute, auditMasterActivity, getAllOrders);
router.get("/contact-messages", protectRoute, adminRoute, auditMasterActivity, getContactMessages);
router.patch("/contact-messages/:id/status", protectRoute, adminRoute, requireCsrf, validateBody(updateContactMessageStatusSchema), auditMasterActivity, updateContactMessageStatus);
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.put("/categories/:id", protectRoute,adminRoute, requireCsrf, validateBody(editCategorySchema), auditMasterActivity, editCategory);
router.post("/categories/edit/:id", protectRoute,adminRoute, requireCsrf, validateBody(editCategorySchema), auditMasterActivity, editCategory);
router.delete("/categories/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, deleteCategory);
export default router
