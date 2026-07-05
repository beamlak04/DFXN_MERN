import crypto from "crypto";

// Double-submit cookie CSRF protection.
// Clients must send the CSRF token in the `x-csrf-token` header which must match
// the `csrfToken` cookie set at login/refresh. Cookie is readable by JS.

export const requireCsrf = (req, res, next) => {
  try {
    const tokenFromCookie = req.cookies?.csrfToken;
    const tokenFromHeader = req.get("x-csrf-token") || req.get("X-CSRF-Token");
    if (!tokenFromCookie || !tokenFromHeader) {
      return res.status(403).json({ message: "Missing CSRF token" });
    }

    // Use constant-time comparison
    const a = Buffer.from(String(tokenFromCookie));
    const b = Buffer.from(String(tokenFromHeader));
    if (a.length !== b.length) {
      return res.status(403).json({ message: "Invalid CSRF token" });
    }
    if (!crypto.timingSafeEqual(a, b)) {
      return res.status(403).json({ message: "Invalid CSRF token" });
    }
    return next();
  } catch (err) {
    return res.status(403).json({ message: "CSRF validation failed" });
  }
};

export const generateCsrfToken = () => crypto.randomBytes(32).toString("hex");

export default requireCsrf;
