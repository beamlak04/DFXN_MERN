import express from "express";
import { getAllProducts, getFeaturedProducts , createProduct, toggleFeaturedProduct, deleteProduct, getProductsByCategory, editProduct, getProduct} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import { auditMasterActivity } from "../middleware/adminAudit.middleware.js";

const router = express.Router();

router.get("/featured", getFeaturedProducts)
router.get('/category/:category', getProductsByCategory)
router.get("/:id", getProduct)
router.get("/",  getAllProducts)
router.post("/", protectRoute, adminRoute, auditMasterActivity, createProduct)
router.put("/:id", protectRoute, adminRoute, auditMasterActivity, editProduct)
router.patch("/:id", protectRoute, adminRoute, auditMasterActivity, toggleFeaturedProduct)
router.delete("/:id", protectRoute, adminRoute, auditMasterActivity, deleteProduct)

export default router