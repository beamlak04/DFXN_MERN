import { redis } from "../lib/redis.js";

const getClientIp = (req) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.ip || "unknown";
};

export const createRateLimiter = ({ windowMs, maxRequests }) => {
  return async (req, res, next) => {
    try {
      const clientIp = getClientIp(req);
      const windowSeconds = Math.max(Math.ceil(windowMs / 1000), 1);
      const key = `rate_limit:${req.path}:${clientIp}`;

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