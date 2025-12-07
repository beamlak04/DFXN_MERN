import express from "express";
import { getAllProducts, getFeaturedProducts , createProduct, toggleFeaturedProduct, deleteProduct, getProductsByCategory, editProduct, getProduct} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/:id", getProduct)
router.get("/",  getAllProducts)
router.get("/featured", getFeaturedProducts)
router.get('/category/:category', getProductsByCategory)
router.post("/", protectRoute, adminRoute, createProduct)
router.post("/editProduct/:id", protectRoute, adminRoute, editProduct)
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct)
router.delete("/:id", protectRoute, adminRoute, deleteProduct)

export default router