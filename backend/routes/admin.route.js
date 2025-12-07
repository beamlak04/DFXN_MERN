import express from "express";

import { protectRoute,adminRoute } from "../middleware/auth.middleware.js";
import { getAllCategories, createCategory,editCategory,getCategoryById, deleteCategory } from "../controllers/admin.controller.js";
import { deleteOrder, editOrder, getAllOrders, getOrderById } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/orders/:id", protectRoute, adminRoute, getOrderById);
router.post("/orders/:id", protectRoute, adminRoute, editOrder)
router.delete("/orders/:id", protectRoute, adminRoute, deleteOrder);
router.post("/categories/create-category",protectRoute,adminRoute, createCategory);
router.get("/orders", protectRoute, adminRoute, getAllOrders);
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories/edit/:id", protectRoute,adminRoute, editCategory);
router.delete("/categories/:id", protectRoute, adminRoute, deleteCategory);
export default router