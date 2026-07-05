import logger from "../lib/logger.js";

export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: "Route not found" });
};

export const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || err.status || 500;
  if (statusCode >= 500) {
    logger.error({ err, method: req.method, path: req.originalUrl }, "server error");
  }

  const message =
    statusCode >= 500
      ? "Something went wrong. Please try again."
      : err.message || "Request failed";

  res.status(statusCode).json({ message });
};