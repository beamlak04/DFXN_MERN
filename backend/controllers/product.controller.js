import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import cloudinary from "../lib/cloudinary.js";
import { redis } from "../lib/redis.js";

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
    if (!featuredProducts) {
      return res.status(404).json({ message: "No featured products found" });
    }

    await redis.set("featured_products", JSON.stringify(featuredProducts));
    res.json(featuredProducts);
  } catch (error) {
    console.log("error in getFeaturedProducts", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    let { name, description, price, image, category } = req.body;
    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "products",
      });
    }
    if (category === "None") {
      category = null;
    }
    const product = Product.create({
      name,
      description,
      price,
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
    const category = await Category.findOne({name:req.params.category});
    if(!category){
      return res.status(404).json("cateogry not found")
    }
    const products = await Product.find({ category: category._id });
    if(!products){
      return res.status(404).json("products not found")
    }
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
// export const editProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     const { name, description, price, category, image } = req.body;

//     if (product) {
//       product.name = name;
//       product.description = description;
//       product.price = price;
//       product.category = category;
//       if (image) {
//         const publicId = product.image.split("/").pop().split(".")[0];
//         try {
//           await cloudinary.uploader.destroy(`products/${publicId}`);
//           console.log("Image deleted from cloudinary");
//         } catch (error) {
//           console.log("Error deleting image from cloudinary", error.message);
//         }
//         let cloudinaryResponse = await cloudinary.uploader.upload(image, {
//           folder: "products",
//         });
//         product.image = cloudinaryResponse?.secure_url
//           ? cloudinaryResponse.secure_url
//           : "";
//       }
//       await product.save();
//       res
//         .status(201)
//         .json({ product, message: "Product updated Successfully" });
//     }
//     return res.status(404).json({ message: "Product not found" });
//   } catch (error) {
//     console.log("error editing product: ", error.message);
//     return res.status(500).json({ message: "Server error: " + error.message });
//   }
// };

export const editProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category, image } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update only if provided
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) {
      if (category === "None") {
        product.category = null;
      } else {
        product.category = category;
      }
    }
    if (stock) product.stock = stock;

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
        cloudinaryResponse = await cloudinary.uploader.upload(image, {
          folder: "products",
        });
        product.image = cloudinaryResponse?.secure_url || "";
      } catch (error) {
        console.log("Error uploading new image:", error.message);
        return res.status(500).json({ message: "Image upload failed" });
      }
    }

    await product.save();

    return res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error editing product:", error.message);
    return res.status(500).json({ message: "Server error: " + error.message });
  }
};
