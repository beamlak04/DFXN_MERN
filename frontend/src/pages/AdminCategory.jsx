import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useCategoryStore } from "../stores/useCategoryStore";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  Upload,
  PlusCircle,
  CheckCircle,
  Loader,
  Edit,
  Trash,
} from "lucide-react";
import { createImagePreview } from "../lib/imagePreview";

const AdminCategory = () => {
  const {
    categories,
    getAllCategories,
    createCategory,
    loading,
    deleteCategory,
  } = useCategoryStore();

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    image: "",
    imageOptions: {
      cropMode: "fill",
      width: 700,
      height: 700,
      removeBackground: false,
    },
  });
  const [imagePreview, setImagePreview] = useState("");
  const [imagePreviewLoading, setImagePreviewLoading] = useState(false);
  const [imagePreviewNotice, setImagePreviewNotice] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCategory((prev) => ({ ...prev, image: reader.result }));
        setImagePreview("");
        setImagePreviewNotice("");
      };
      reader.readAsDataURL(file);
    }
  };

  const applyImagePreview = async () => {
    if (!newCategory.image) {
      return;
    }

    setImagePreviewLoading(true);
    setImagePreviewNotice("");

    try {
      const processedPreview = await createImagePreview(newCategory.image, newCategory.imageOptions);
      setImagePreview(processedPreview);
      if (newCategory.imageOptions.removeBackground) {
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
      await createCategory(newCategory);
      setNewCategory({
        name: "",
        description: "",
        image: "",
        imageOptions: {
          cropMode: "fill",
          width: 700,
          height: 700,
          removeBackground: false,
        },
      });
    } catch (error) {
      // Errors are surfaced via store toasts.
    }
  };

  return (
    <div>
      <AdminNav activePage="categories">
        {/* Categories Section */}
        <div className="rounded border shadow-sm">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-medium">Categories</h3>
            <HashLink
              smooth
              to="#createCategory"
              className="text-sm px-3 py-1.5 rounded-xl bg-gray-900 text-white"
            >
              Add
            </HashLink>
          </div>

          {/* Table for desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-6 py-3 font-medium tracking-wider text-left">
                    Category
                  </th>
                  <th className="px-6 py-3 font-medium tracking-wider text-left">
                    Description
                  </th>
                  <th className="px-6 py-3 font-medium tracking-wider text-center">
                    Edit
                  </th>
                  <th className="px-6 py-3 font-medium tracking-wider text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-50 divide-y">
                {categories?.map((category) => (
                  <tr key={category._id} className="hover:bg-slate-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="h-10 w-10 object-cover rounded-full"
                        />
                        <div className="ml-4 text-sm font-normal">
                          {category.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {category.description}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/admin/categories/${category._id}/edit`}
                        className="hover:text-gray-500"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="text-red-400 hover:text-red-300"
                        onClick={() => deleteCategory(category._id)}
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for mobile */}
          <div className="sm:hidden divide-y">
            {categories?.map((category) => (
              <div
                key={category._id}
                className="p-4 flex items-start justify-between hover:bg-slate-100"
              >
                <div className="flex gap-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-12 w-12 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {category.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Link
                    to={`/admin/categories/${category._id}/edit`}
                    className="hover:text-gray-500"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button
                    className="text-red-400 hover:text-red-300"
                    onClick={() => deleteCategory(category._id)}
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create Category Form */}
        <div className="rounded shadow-sm border mt-6 bg-white" id="createCategory">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-semibold text-lg">Create a Category</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-500"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCategory.name}
                  placeholder="Enter category name"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-medium text-gray-500"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newCategory.description}
                  required
                  rows={4}
                  placeholder="Enter category description"
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-slate-50">
                <h4 className="font-medium text-sm mb-3">Image Processing</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Crop Mode</label>
                    <select
                      value={newCategory.imageOptions.cropMode}
                      onChange={(e) =>
                        setNewCategory({
                          ...newCategory,
                          imageOptions: {
                            ...newCategory.imageOptions,
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
                      value={newCategory.imageOptions.width}
                      onChange={(e) =>
                        setNewCategory({
                          ...newCategory,
                          imageOptions: {
                            ...newCategory.imageOptions,
                            width: Number(e.target.value || 700),
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
                      value={newCategory.imageOptions.height}
                      onChange={(e) =>
                        setNewCategory({
                          ...newCategory,
                          imageOptions: {
                            ...newCategory.imageOptions,
                            height: Number(e.target.value || 700),
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
                    checked={newCategory.imageOptions.removeBackground}
                    onChange={(e) =>
                      setNewCategory({
                        ...newCategory,
                        imageOptions: {
                          ...newCategory.imageOptions,
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
                {newCategory.image && (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                )}
              </div>

              <button
                type="button"
                onClick={applyImagePreview}
                disabled={!newCategory.image || imagePreviewLoading}
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
                  ) : newCategory.image ? (
                    <img
                      src={newCategory.image}
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
                    Create Category
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

export default AdminCategory;
