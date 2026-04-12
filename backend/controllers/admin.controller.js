import Category from "../models/category.model.js";
import cloudinary from "../lib/cloudinary.js";
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import SystemSettings from "../models/systemSettings.model.js";
import { uploadImageWithProcessing } from "../lib/imageUpload.js";

const DASHBOARD_TOP_LIMIT = 5;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getSystemSettings = async () => {
  let settings = await SystemSettings.findOne({ key: "global" });
  if (!settings) {
    settings = await SystemSettings.create({
      key: "global",
      emailNotificationsEnabled: true,
      contactNotifyTo: process.env.CONTACT_NOTIFY_TO || "",
    });
  }
  return settings;
};

const getTodayRange = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { start, end };
};

const getWindowStart = (days) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));
  return start;
};

const buildTopSellingPipeline = (matchStage = null, limit = DASHBOARD_TOP_LIMIT) => {
  const pipeline = [];
  if (matchStage) {
    pipeline.push({ $match: matchStage });
  }

  pipeline.push(
    { $unwind: "$products" },
    {
      $group: {
        _id: "$products.product",
        totalSold: { $sum: "$products.quantity" },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "productInfo",
      },
    },
    { $unwind: "$productInfo" },
    { $sort: { totalSold: -1 } },
    { $limit: limit }
  );

  return pipeline;
};

export const adminInfo = async (req, res) => {
  try {
    const { start, end } = getTodayRange();
    const [totalProducts, totalOrders, todayOrders, revenueAgg, topSelling, recentOrders] =
      await Promise.all([
        Product.countDocuments(),
        Order.countDocuments(),
        Order.countDocuments({ createdAt: { $gte: start, $lt: end } }),
        Order.aggregate([
          { $match: { paymentStatus: "paid" } },
          { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
        ]),
        Order.aggregate(buildTopSellingPipeline()),
        Order.find({})
          .sort({ createdAt: -1 })
          .limit(8)
          .select("customer totalAmount orderStatus paymentStatus createdAt")
          .lean(),
      ]);

    const distinctCustomers = await Order.distinct("customer.phoneNumber", {
      "customer.phoneNumber": { $exists: true, $ne: "" },
    });

    res.status(200).json({
      summary: {
        totalProducts,
        totalOrders,
        ordersToday: todayOrders,
        totalRevenue: revenueAgg[0]?.totalRevenue || 0,
        totalCustomers: distinctCustomers.length,
      },
      topSelling,
      recentOrders,
    });
  } catch (error) {
    console.log("error in adminInfo", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const days = Math.min(Math.max(Number(req.query.days) || 30, 7), 365);
    const startDate = getWindowStart(days);

    const baseMatch = { createdAt: { $gte: startDate } };

    const [salesTrend, orderStatus, paymentMethods, categoryPerformance] = await Promise.all([
      Order.aggregate([
        { $match: baseMatch },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$createdAt",
              },
            },
            orders: { $sum: 1 },
            revenue: {
              $sum: {
                $cond: [{ $eq: ["$paymentStatus", "paid"] }, "$totalAmount", 0],
              },
            },
          },
        },
        { $project: { _id: 0, date: "$_id", orders: 1, revenue: 1 } },
        { $sort: { date: 1 } },
      ]),
      Order.aggregate([
        { $match: baseMatch },
        { $group: { _id: "$orderStatus", count: { $sum: 1 } } },
        { $project: { _id: 0, status: "$_id", count: 1 } },
        { $sort: { count: -1 } },
      ]),
      Order.aggregate([
        { $match: baseMatch },
        { $group: { _id: "$paymentMethod", count: { $sum: 1 } } },
        { $project: { _id: 0, method: "$_id", count: 1 } },
        { $sort: { count: -1 } },
      ]),
      Order.aggregate([
        { $match: baseMatch },
        { $unwind: "$products" },
        {
          $lookup: {
            from: "products",
            localField: "products.product",
            foreignField: "_id",
            as: "productInfo",
          },
        },
        {
          $unwind: {
            path: "$productInfo",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "productInfo.category",
            foreignField: "_id",
            as: "categoryInfo",
          },
        },
        {
          $unwind: {
            path: "$categoryInfo",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $group: {
            _id: { $ifNull: ["$categoryInfo.name", "Uncategorized"] },
            totalSold: { $sum: "$products.quantity" },
            revenue: { $sum: { $multiply: ["$products.quantity", "$products.price"] } },
            orderIds: { $addToSet: "$_id" },
          },
        },
        {
          $project: {
            _id: 0,
            category: "$_id",
            totalSold: 1,
            revenue: 1,
            orders: { $size: "$orderIds" },
          },
        },
        { $sort: { revenue: -1 } },
        { $limit: 10 },
      ]),
    ]);

    res.status(200).json({
      rangeDays: days,
      salesTrend,
      orderStatus,
      paymentMethods,
      categoryPerformance,
    });
  } catch (error) {
    console.log("error in getAnalytics", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAdminSettings = async (req, res) => {
  try {
    const settings = await getSystemSettings();
    res.status(200).json({
      profile: {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
      contactNotifications: {
        emailNotificationsEnabled: settings.emailNotificationsEnabled,
        contactNotifyTo: settings.contactNotifyTo || "",
      },
    });
  } catch (error) {
    console.log("error in getAdminSettings", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateContactNotificationSettings = async (req, res) => {
  try {
    const { emailNotificationsEnabled, contactNotifyTo } = req.body;

    const normalizedAddress = String(contactNotifyTo || "")
      .trim()
      .toLowerCase();

    if (!normalizedAddress || !emailPattern.test(normalizedAddress)) {
      return res.status(400).json({
        message: "Please provide a valid contact notification email",
      });
    }

    const settings = await getSystemSettings();
    settings.emailNotificationsEnabled = Boolean(emailNotificationsEnabled);
    settings.contactNotifyTo = normalizedAddress;
    await settings.save();

    return res.status(200).json({
      message: "Contact notification settings updated",
      contactNotifications: {
        emailNotificationsEnabled: settings.emailNotificationsEnabled,
        contactNotifyTo: settings.contactNotifyTo,
      },
    });
  } catch (error) {
    console.log("error in updateContactNotificationSettings", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const updateAdminProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const existing = await User.findOne({
      email,
      _id: { $ne: req.user._id },
    }).select("_id");
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name: name.trim(), email: email.trim().toLowerCase() },
      { new: true, runValidators: true }
    ).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      profile: {
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      },
      user: updatedUser,
    });
  } catch (error) {
    console.log("error in updateAdminProfile", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateAdminPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Current and new password are required" });
    }
    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "New password must be at least 6 characters" });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.log("error in updateAdminPassword", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description, image, imageOptions } = req.body;
    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await uploadImageWithProcessing({
        image,
        folder: "categories",
        imageType: "category",
        imageOptions,
      });
    }
    const category = await Category.create({
      name,
      description,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
    });
    res.status(201).json({ category });
  } catch (error) {
    console.log("error in admin categories", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json({ categories });
  } catch (error) {
    console.log("error in get categories", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const editCategory = async (req, res) => {
  try {
    const { name, description, image, imageOptions } = req.body;
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (name) category.name = name;
    if (description) category.description = description;
    if (image) {
      try {
        const publicId = category.image?.split("/").pop().split(".")[0];
        if (publicId) {
          await cloudinary.uploader.destroy(`categories/${publicId}`);
          console.log("Old image deleted from Cloudinary");
        }
      } catch (error) {
        console.log("Error deleting old image from Cloudinary:", error.message);
      }

      let cloudinaryResponse;
      try {
        cloudinaryResponse = await uploadImageWithProcessing({
          image,
          folder: "categories",
          imageType: "category",
          imageOptions,
        });
        category.image = cloudinaryResponse?.secure_url || "";
      } catch (error) {
        console.log("Error uploading new image:", error.message);
        return res.status(500).json({ message: "Image upload failed" });
      }
    }
    await category.save();
    return res.status(200).json({
      category,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.error("Error editing category:", error.message);
    return res.status(500).json({ message: "Server error: " + error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      return res.status(200).json({ category });
    } else {
      return res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    console.log("error getting product: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    try {
      const publicId = category.image?.split("/").pop().split(".")[0];
      if (publicId) {
        await cloudinary.uploader.destroy(`categories/${publicId}`);
        console.log("Old image deleted from Cloudinary");
      }
    } catch (error) {
      console.log("Error deleting old image from Cloudinary:", error.message);
    }
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category deleted Successfully" });
  } catch (error) {
    console.log("error delete category: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};
