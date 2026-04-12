import React, { useEffect, useState } from "react";
import {
  Trash,
  Star,
  Edit,
  Upload,
  PlusCircle,
  Loader,
  CheckCircle,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import AdminNav from "../components/AdminNav";
import { useCategoryStore } from "../stores/useCategoryStore";
import { createImagePreview } from "../lib/imagePreview";

const AdminProducts = () => {
  const {
    products,
    fetchAllProducts,
    toggleFeaturedProduct,
    deleteProduct,
    createProduct,
    loading,
  } = useProductStore();
  const { categories, getAllCategories } = useCategoryStore();

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
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
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCategories();
    fetchAllProducts();
  }, [getAllCategories, fetchAllProducts]);

  // Filter products by search
  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      String(product.price).includes(query)
    );
  });

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
    try {
      await createProduct(newProduct);
      setNewProduct({
        name: "",
        description: "",
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
    } catch (error) {
      // Errors are surfaced via store toasts.
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage="products">
        <div className="rounded border shadow-sm">
          {/* Header with Add & Search */}
          <div className="px-4 py-3 border-b flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-medium text-lg">Products</h3>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <HashLink
                smooth
                to="#createProduct"
                className="text-sm px-3 py-2 rounded-lg bg-gray-900 text-white text-center"
              >
                Add
              </HashLink>
            </div>
          </div>

          {/* Table wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium text-left">Product</th>
                  <th className="px-4 py-3 font-medium text-left">Price</th>
                  <th className="px-4 py-3 font-medium text-left">Stock</th>
                  <th className="px-4 py-3 font-medium text-center">Featured</th>
                  <th className="px-4 py-3 font-medium text-center">Edit</th>
                  <th className="px-4 py-3 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-slate-50 divide-y">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product._id} className="hover:bg-slate-100">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 object-cover rounded-full"
                          />
                          <span className="ml-3">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">{product.price}</td>
                      <td className="px-4 py-3">{product.stock}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => toggleFeaturedProduct(product._id)}
                          className={`p-1 rounded-full ${
                            product.isFeatured
                              ? "bg-gray-800 text-white"
                              : "hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          <Star className="h-5 w-5" />
                        </button>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link
                          to={`/admin/products/${product._id}/edit`}
                          className="hover:text-gray-500"
                        >
                          <Edit className="h-5 w-5" />
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          className="text-red-400 hover:text-red-300"
                          onClick={() => deleteProduct(product._id)}
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No matching products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Product Form */}
        <div className="rounded shadow-sm border mt-6 bg-white" id="createProduct">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-semibold text-lg">Create a Product</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Product Name
                </label>
                <input
                  type="text"
                  value={newProduct.name}
                  placeholder="Enter product name"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Price
                </label>
                <input
                  type="number"
                  value={newProduct.price}
                  required
                  step={0.01}
                  placeholder="0.00"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Description
                </label>
                <textarea
                  value={newProduct.description}
                  required
                  rows={3}
                  placeholder="Enter product description"
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Category
                </label>
                <select
                  value={newProduct.category}
                  required
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  className="mt-1 w-full rounded-md px-3 py-2 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-800 focus:outline-none"
                >
                  <option value="" disabled>Select Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                  <option value="None">None</option>
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
                          imageOptions: {
                            ...newProduct.imageOptions,
                            cropMode: e.target.value,
                          },
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
                          imageOptions: {
                            ...newProduct.imageOptions,
                            width: Number(e.target.value || 900),
                          },
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
                          imageOptions: {
                            ...newProduct.imageOptions,
                            height: Number(e.target.value || 900),
                          },
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

              <div className="flex items-center gap-3">
                <label
                  htmlFor="image"
                  className="cursor-pointer inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
                >
                  <Upload className="h-4 w-4" />
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {newProduct.image && (
                  <CheckCircle className="text-green-500 h-5 w-5" />
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
                    <img
                      src={imagePreview}
                      alt="Processed preview"
                      className="w-full h-full object-cover"
                    />
                  ) : newProduct.image ? (
                    <img
                      src={newProduct.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No image selected</span>
                  )}
                </div>
                {imagePreviewNotice && (
                  <p className="mt-2 text-xs text-gray-500">{imagePreviewNotice}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 shadow"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-4 w-4" />
                    Create Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminProducts;
