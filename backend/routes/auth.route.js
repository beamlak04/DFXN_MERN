import express from "express";
import { login, logout, refreshAccessToken, getProfile} from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js"
import { createRateLimiter } from "../middleware/rateLimit.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import { loginSchema } from "../validation/schemas.js";


const router = express.Router();

const loginLimiter = createRateLimiter({
	windowMs: 15 * 60 * 1000,
	maxRequests: 8,
	keyFn: (req) => `login:${String(req.body?.email || "").trim().toLowerCase() || "unknown"}`,
	keyByIp: false,
});

// Per-IP limiter to mitigate password-spraying across many accounts
const loginIpLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 30,
  keyFn: () => "login:ip",
});

const refreshLimiter = createRateLimiter({
	windowMs: 15 * 60 * 1000,
	maxRequests: 30,
	keyFn: () => "auth-refresh",
});

// Apply both IP-based and email-based limiters: IP limiter first to catch
// password-spraying, then the per-account limiter to limit targeted brute-force.
router.post(
	"/login",
	loginIpLimiter,
	loginLimiter,
	validateBody(loginSchema),
	login
);

router.post("/logout", logout)

router.post("/refreshAccessToken", refreshLimiter, refreshAccessToken)

router.get("/profile", protectRoute, getProfile)

export default router
