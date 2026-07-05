import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  base: null,
  redact: ["req.headers.authorization", "req.cookies.accessToken", "req.cookies.refreshToken"],
});

export default logger;