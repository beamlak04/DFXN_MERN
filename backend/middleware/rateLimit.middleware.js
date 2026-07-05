import { redis } from "../lib/redis.js";

const getClientIp = (req) => req.ip || req.socket?.remoteAddress || "unknown";

export const createRateLimiter = ({ windowMs, maxRequests, keyFn, keyByIp = true }) => {
  return async (req, res, next) => {
    try {
      const clientIp = getClientIp(req);
      const windowSeconds = Math.max(Math.ceil(windowMs / 1000), 1);
      const extraKey = typeof keyFn === "function" ? keyFn(req) : req.path;
      const key = keyByIp
        ? `rate_limit:${extraKey}:${clientIp}`
        : `rate_limit:${extraKey}`;

      const currentCount = await redis.incr(key);
      if (currentCount === 1) {
        await redis.expire(key, windowSeconds);
      }

      if (currentCount > maxRequests) {
        return res.status(429).json({
          message: "Too many requests. Please try again later.",
        });
      }

      return next();
    } catch (error) {
      // Fail open if limiter backend is unavailable.
      console.log("rate limiter fallback", error.message);
      return next();
    }
  };
};

export const normalizeEmail = (email) => String(email || "").trim().toLowerCase();

export const getEmailRateLimitKey = (email) => {
  const normalized = normalizeEmail(email);
  return normalized ? `email:${normalized}` : "email:unknown";
};

export const getLoginLockKey = (email) => `login_lock:${normalizeEmail(email)}`;

export const getLoginFailureKey = (email) => `login_failures:${normalizeEmail(email)}`;
