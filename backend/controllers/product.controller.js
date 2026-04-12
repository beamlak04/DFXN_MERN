import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import cloudinary from "../lib/cloudinary.js";
import { redis } from "../lib/redis.js";
import { uploadImageWithProcessing } from "../lib/imageUpload.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (error) {
    console.log("erron in getallProducts", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    let featuredProducts = await redis.get("featured_products");
    if (featuredProducts) {
      return res.json(JSON.parse(featuredProducts));
    }
    featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redis.set("featured_products", JSON.stringify(featuredProducts));
    res.json(featuredProducts);
  } catch (error) {
    console.log("error in getFeaturedProducts", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    let { name, description, price, image, category, imageOptions } = req.body;
    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await uploadImageWithProcessing({
        image,
        folder: "products",
        imageType: "product",
        imageOptions,
      });
    }
    if (category === "None") {
      category = null;
    }
    let stock = 5;
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
      category,
    });

    res.status(201).json({ product });
  } catch (error) {
    console.log("error in createProduct", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product.isFeatured) {
      product.isFeatured = false;
      await product.save();
      await updateFeaturedProductsCache();
    }
    const publicId = product.image.split("/").pop().split(".")[0];
    try {
      await cloudinary.uploader.destroy(`products/${publicId}`);
      console.log("Image deleted from cloudinary");
    } catch (error) {
      console.log("Error deleting image from cloudinary", error.message);
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("error in deleteProduct", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    // const { category } = req.params.category;
    const category = await Category.findOne({ name: req.params.category });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const products = await Product.find({ category: category._id });
    res.json({ products });
  } catch (error) {
    console.log("error in getProductsByCategory", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const toggleFeaturedProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.isFeatured = !product.isFeatured;
      const updatedProduct = await product.save();
      await updateFeaturedProductsCache();
      res.json(updatedProduct);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("error in toggleFeaturedProduct", error.message);
    res.status(500).json({ message: error.message });
  }
};

async function updateFeaturedProductsCache() {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redis.set("featured_products", JSON.stringify(featuredProducts));
  } catch (error) {
    console.log("error in update cache featured products");
  }
}
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.status(200).json({ product });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("error in getProduct:", error.message);
    return res.status(500).json({ message: "Server error: " + error.message });
  }
};

export const editProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category, image, imageOptions } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update only if provided
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (category !== undefined) {
      if (category === "None") {
        product.category = null;
      } else {
        product.category = category;
      }
    }
    if (stock !== undefined) product.stock = stock;

    // Handle image replacement
    if (image) {
      try {
        const publicId = product.image?.split("/").pop().split(".")[0];
        if (publicId) {
          await cloudinary.uploader.destroy(`products/${publicId}`);
          console.log("Old image deleted from Cloudinary");
        }
      } catch (error) {
        console.log("Error deleting old image from Cloudinary:", error.message);
      }

      let cloudinaryResponse;
      try {
        cloudinaryResponse = await uploadImageWithProcessing({
          image,
          folder: "products",
          imageType: "product",
          imageOptions,
        });
        product.image = cloudinaryResponse?.secure_url || "";
      } catch (error) {
        console.log("Error uploading new image:", error.message);
        return res.status(500).json({ message: "Image upload failed" });
      }
    }

    await product.save();
    if (product.isFeatured) {
      await updateFeaturedProductsCache();
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error editing product:", error.message);
    return res.status(500).json({ message: "Server error: " + error.message });
  }
};
