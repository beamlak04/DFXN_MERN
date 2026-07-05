import express from "express";

import {
	chapaPaymentCallback,
	getPaymentResult,
	placeOrder,
	verifyOrderPayment,
} from "../controllers/order.controller.js";
import { createRateLimiter } from "../middleware/rateLimit.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import { placeOrderSchema } from "../validation/schemas.js";

const router = express.Router();


// Throttle order submissions per IP to reduce spam and external API abuse.
const placeOrderLimiter = createRateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	maxRequests: 20, // allow burst of orders per IP
	keyFn: () => "place-order",
});

router.post("/place-order", placeOrderLimiter, validateBody(placeOrderSchema), placeOrder);
router.get("/verify-payment", verifyOrderPayment);
router.get("/payment-result", getPaymentResult);
router.post("/payment/callback", chapaPaymentCallback);


export default router;
