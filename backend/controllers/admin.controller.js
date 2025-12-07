import Category from "../models/category.model.js";
import cloudinary from "../lib/cloudinary.js";


export const createCategory = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "categories",
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
    const { name, description, image } = req.body;
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
        cloudinaryResponse = await cloudinary.uploader.upload(image, {
          folder: "categories",
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
    const category = Category.findById(req.params.id);
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
    res.status(200).json({message: "Category deleted Successfully"});
  } catch (error) {
    console.log("error delete category: ", error.message);
    return res.status(500).json({message: error.message});
  }
};


