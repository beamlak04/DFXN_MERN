import React, { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav";
import { useCategoryStore } from "../stores/useCategoryStore";
import { HashLink } from "react-router-hash-link";
import {
  Upload,
  PlusCircle,
  CheckCircle,
  Loader,
  Edit,
  Trash,
} from "lucide-react";

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
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCategory({ ...newCategory, image: reader.result });
      };
      reader.readAsDataURL(file);
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
      });
    } catch (error) {
      console.log("error admincategory.jsx", error.message);
    }
  };

  return (
    <div>
      <AdminNav activePage={"categories"}>
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
                      <a
                        href={`/admin/categories/edit/${category._id}`}
                        className="hover:text-gray-500"
                      >
                        <Edit className="h-5 w-5" />
                      </a>
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
                  <a
                    href={`/admin/categories/edit/${category._id}`}
                    className="hover:text-gray-500"
                  >
                    <Edit className="h-4 w-4" />
                  </a>
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
        <div className="rounded shadow-sm border mt-6" id="createCategory">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-medium">Create a Category</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-6 grid grid-cols-1 sm:grid-cols-2 items-end gap-6"
          >
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

            <div className="sm:col-span-2">
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
                rows={3}
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

            <div>
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
                <CheckCircle className="inline mb-2 ml-2 text-green-500 h-5 w-5" />
              )}
            </div>

            <div className="sm:col-span-2">
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
