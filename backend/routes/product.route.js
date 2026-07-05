import express from "express";
import { getAllProducts, getFeaturedProducts , createProduct, toggleFeaturedProduct, deleteProduct, getProductsByCategory, editProduct, getProduct} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import { auditMasterActivity } from "../middleware/adminAudit.middleware.js";
import { requireCsrf } from "../middleware/csrf.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import { createProductSchema, editProductSchema } from "../validation/schemas.js";

const router = express.Router();

router.get("/featured", getFeaturedProducts)
router.get('/category/:category', getProductsByCategory)
router.get("/:id", getProduct)
router.get("/",  getAllProducts)
router.post("/", protectRoute, adminRoute, requireCsrf, validateBody(createProductSchema), auditMasterActivity, createProduct)
router.put("/:id", protectRoute, adminRoute, requireCsrf, validateBody(editProductSchema), auditMasterActivity, editProduct)
router.patch("/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, toggleFeaturedProduct)
router.delete("/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, deleteProduct)

export default router