import express from "express";
import { submitContactMessage } from "../controllers/contact.controller.js";
import { createRateLimiter } from "../middleware/rateLimit.middleware.js";

const router = express.Router();

const contactSubmitRateLimit = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 5,
});

router.post("/submit", contactSubmitRateLimit, submitContactMessage);

export default router;