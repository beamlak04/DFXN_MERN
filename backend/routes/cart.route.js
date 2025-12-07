import express from "express";


import { addToCart, deleteProductFromCart, getCartProducts, updateProductQuantity } from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.get("/",protectRoute, getCartProducts)
router.post("/",protectRoute, addToCart)
router.put("/:id", protectRoute, updateProductQuantity)
router.delete("/", protectRoute, deleteProductFromCart)


export default router