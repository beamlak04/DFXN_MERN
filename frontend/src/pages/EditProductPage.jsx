import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, SaveIcon, ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { useCategoryStore } from "../stores/useCategoryStore";
import { createImagePreview } from "../lib/imagePreview";


const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchProductById, product, loading, editProduct } = useProductStore();
  const {categories,getAllCategories} = useCategoryStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    category: "",
    image: "",
    imageOptions: {
      cropMode: "fill",
      width: 900,
      height: 900,
      removeBackground: false,
    },
  });
  const [imagePreview, setImagePreview] = useState("");
  const [imagePreviewLoading, setImagePreviewLoading] = useState(false);
  const [imagePreviewNotice, setImagePreviewNotice] = useState("");

  useEffect(() => {
    getAllCategories();
    if (product) {
      setNewProduct({
        name: product.name || "",
        description: product.description || "",
        stock: product.stock || "",
        price: product.price || "",
        category: product.category || "",
        image: "",
        imageOptions: {
          cropMode: "fill",
          width: 900,
          height: 900,
          removeBackground: false,
        },
      });
    }
  }, [product,getAllCategories]);
  const isChanged =
    JSON.stringify({
      name: product?.name,
      description: product?.description,
      stock: product?.stock,
      price: product?.price,
      category: product?.category,
    }) !==
      JSON.stringify({
        name: newProduct.name,
        description: newProduct.description,
        stock: newProduct.stock,
        price: newProduct.price,
        category: newProduct.category,
      }) || newProduct.image;

  useEffect(() => {
    fetchProductById(id);
  }, [fetchProductById, id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }));
        setImagePreview("");
        setImagePreviewNotice("");
      };
      reader.readAsDataURL(file);
    }
  };

  const applyImagePreview = async () => {
    if (!newProduct.image) {
      return;
    }

    setImagePreviewLoading(true);
    setImagePreviewNotice("");

    try {
      const processedPreview = await createImagePreview(newProduct.image, newProduct.imageOptions);
      setImagePreview(processedPreview);
      if (newProduct.imageOptions.removeBackground) {
        setImagePreviewNotice("Background removal is applied on save; preview shows crop and sizing only.");
      }
    } catch (error) {
      setImagePreview("");
      setImagePreviewNotice(error.message || "Preview generation failed");
    } finally {
      setImagePreviewLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await editProduct(id, newProduct);
    if (updated) {
      navigate("/admin/products");
    }
  };

  return (
    <div>
      <motion.div
        className="rounded-md mx-auto w-11/12 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-xl p-5 font-semibold">
          Edit Product {product?.name}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-md rounded-xl p-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm text-gray-600">Product Description</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="stock" className="block text-sm text-gray-600">Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={newProduct.stock}
                  step={1}
                  className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm text-gray-600">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newProduct.price}
                  step={0.01}
                  className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm text-gray-600">Category</label>
              <select
                name="category"
                id="category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none"
              >
                <option value="None">None</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id} className="outline-none">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-slate-50">
              <h4 className="font-medium text-sm mb-3">Image Processing</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Crop Mode</label>
                  <select
                    value={newProduct.imageOptions.cropMode}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        imageOptions: { ...newProduct.imageOptions, cropMode: e.target.value },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  >
                    <option value="fill">Fill (best for cards)</option>
                    <option value="fit">Fit</option>
                    <option value="pad">Pad</option>
                    <option value="scale">Scale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Width</label>
                  <input
                    type="number"
                    min={200}
                    max={2000}
                    value={newProduct.imageOptions.width}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        imageOptions: { ...newProduct.imageOptions, width: Number(e.target.value || 900) },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Height</label>
                  <input
                    type="number"
                    min={200}
                    max={2000}
                    value={newProduct.imageOptions.height}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        imageOptions: { ...newProduct.imageOptions, height: Number(e.target.value || 900) },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  />
                </div>
              </div>

              <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={newProduct.imageOptions.removeBackground}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      imageOptions: {
                        ...newProduct.imageOptions,
                        removeBackground: e.target.checked,
                      },
                    })
                  }
                />
                Remove Background (if supported by provider)
              </label>
            </div>

            <div className="relative">
            <input
              type="file"
              id="image"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-gray-300 px-3 py-2 rounded-md shadow-sm text-sm hover:bg-gray-400 inline-flex items-center"
            >
              <Upload className="h-5 w-5 inline-block mr-2" />
              Upload New Image
            </label>
            {newProduct.image && (
              <span className="ml-3 text-sm absolute text-gray-700 top-2">
                <CheckCircle/>
              </span>
            )}
          </div>

            <button
              type="button"
              onClick={applyImagePreview}
              disabled={!newProduct.image || imagePreviewLoading}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-60"
            >
              {imagePreviewLoading ? "Applying..." : "Apply Image Settings"}
            </button>

            <div className="border rounded-lg p-4 bg-slate-50">
              <p className="text-xs text-gray-500 mb-2">Preview (square card)</p>
              <div className="w-44 h-44 rounded-md border overflow-hidden bg-white flex items-center justify-center">
                {imagePreview ? (
                  <img src={imagePreview} alt="Processed preview" className="w-full h-full object-cover" />
                ) : newProduct.image ? (
                  <img src={newProduct.image} alt="New preview" className="w-full h-full object-contain" />
                ) : product?.image ? (
                  <img src={product.image} alt="Current" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-gray-400">No image available</span>
                )}
              </div>
              {imagePreviewNotice && (
                <p className="mt-2 text-xs text-gray-500">{imagePreviewNotice}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2 lg:col-span-2">
            <button
              onClick={() => navigate(-1)}
              className="w-2/5 flex justify-center py-2 rounded-md shadow-sm text-sm text-gray-800 bg-gray-300 hover:bg-gray-200  transition-colors"
            >
              <ArrowLeft className="mr-1 h-5 w-5" />
              Back
            </button>
            <button
              type="submit"
              className="w-full flex justify-center py-2 rounded-md shadow-sm text-sm text-white bg-gray-800 hover:bg-gray-700 "
              disabled = {loading || !isChanged}
            >
              {loading ? (
                <>
                  <Loader
                    className="mr-2 h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />
                  Loading
                </>
              ) : (
                <>
                  <SaveIcon className="mr-2 h-5 w-5" />
                  Save
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditProductPage;
