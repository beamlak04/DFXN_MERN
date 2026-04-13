import express from "express";

import {
	chapaPaymentCallback,
	getPaymentResult,
	placeOrder,
	verifyOrderPayment,
} from "../controllers/order.controller.js";

const router = express.Router();


router.post("/place-order", placeOrder);
router.get("/verify-payment", verifyOrderPayment);
router.get("/payment-result", getPaymentResult);
router.post("/payment/callback", chapaPaymentCallback);


export default router;
