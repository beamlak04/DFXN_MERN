import { ZodError } from "zod";

export const validateBody = (schema) => {
  return (req, res, next) => {
    try {
      const parsed = schema.parse(req.body || {});
      req.body = parsed;
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.errors.map((e) => ({ path: e.path.join("."), message: e.message }));
        return res.status(400).json({ message: "Validation failed", errors });
      }
      return next(err);
    }
  };
};

export default validateBody;
