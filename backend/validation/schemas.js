import { z } from "zod";

const objectIdSchema = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const optionalImageSchema = z
  .string()
  .trim()
  .refine((value) => value === "" || value.startsWith("data:image/"), {
    message: "Image must be a base64 data URL",
  })
  .optional();
const requiredImageSchema = z
  .string()
  .trim()
  .min(1, "Image is required")
  .refine((value) => value.startsWith("data:image/"), {
    message: "Image must be a base64 data URL",
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const placeOrderSchema = z.object({
  cart: z.array(
    z.object({
      _id: objectIdSchema,
      quantity: z.coerce.number().int().min(1),
    })
  ).min(1),
  customer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
  }).optional(),
  paymentMethod: z.enum(["COD", "Chapa", "Telebirr"]).optional(),
});

export const updateAdminProfileSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
});

export const updateAdminPasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(10),
});

export const updateContactNotificationSettingsSchema = z.object({
  emailNotificationsEnabled: z.boolean(),
  contactNotifyTo: z.string().trim().email(),
});

export const createAdminUserSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  password: z.string().min(10),
  role: z.literal("admin").optional(),
});

export const submitContactMessageSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(10).max(2000),
  sourcePage: z.string().trim().optional().default("home"),
  website: z.string().trim().optional().default(""),
});

export const createCategorySchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().optional(),
  image: requiredImageSchema,
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const editCategorySchema = z.object({
  name: z.string().trim().min(1).optional(),
  description: z.string().optional(),
  image: optionalImageSchema,
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const createProductSchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().trim().min(1),
  price: z.coerce.number().nonnegative(),
  image: requiredImageSchema,
  category: z.string().optional(),
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const editProductSchema = z.object({
  name: z.string().trim().min(1).optional(),
  description: z.string().optional(),
  price: z.coerce.number().nonnegative().optional(),
  stock: z.coerce.number().int().nonnegative().optional(),
  category: z.string().optional(),
  image: optionalImageSchema,
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const updateContactMessageStatusSchema = z.object({
  status: z.enum(["new", "reviewed", "closed"]),
});

export const editOrderSchema = z.object({
  customer: z
    .object({
      name: z.string().optional(),
      phoneNumber: z.string().optional(),
      email: z.string().email().optional().or(z.literal("")),
      address: z.string().optional(),
    })
    .optional(),
  products: z.array(
    z.object({
      product: z.union([objectIdSchema, z.object({ _id: objectIdSchema }).passthrough()]),
      quantity: z.coerce.number().int().min(1),
      price: z.coerce.number().nonnegative(),
    })
  ),
  orderStatus: z.enum(["processing", "shipped", "delivered", "canceled", "pending", "failed", "on hold", "returned"]).optional(),
  paymentMethod: z.enum(["Telebirr", "Chapa", "COD"]).optional(),
  paymentStatus: z.enum(["pending", "paid", "failed"]).optional(),
});

export default {
  loginSchema,
  placeOrderSchema,
  updateAdminProfileSchema,
  updateAdminPasswordSchema,
  updateContactNotificationSettingsSchema,
  createAdminUserSchema,
  submitContactMessageSchema,
  createCategorySchema,
  editCategorySchema,
  createProductSchema,
  editProductSchema,
  updateContactMessageStatusSchema,
  editOrderSchema,
};
