import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, SaveIcon, ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { useCategoryStore } from "../stores/useCategoryStore";


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
  });

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
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProduct(id, newProduct);
    
  };

  return (
    <div>
      <motion.div
        className="rounded-md mx-auto w-11/12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        <div className="flex items-center mb-4"></div>

        <h3 className="text-center text-xl p-5">
          Edit Product {product?.name}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 sm:w-3/4 md:w-3/5 mx-auto space-y-5 shadow-md px-5 pb-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              className="mt-1 block w-full bg-slate-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm text-gray-600"
            >
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className="mt-1 block w-full bg-slate-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
            />
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm text-gray-600">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={newProduct.stock}
              step={1}
              className="mt-1 block w-full bg-slate-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              step={0.01}
              className="mt-1 block w-full bg-slate-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm text-gray-600">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="mt-1 block w-full bg-slate-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none "
            >   
              <option value={null} key={null}>None</option>
              {categories.map((category) => (
                <option
                  key={category._id}
                  value={category._id}
                  className="outline-none"
                >
                  {category.name}
                </option>
              ))}
              
            </select>
          </div>
          <div className="realtive">
            <input
              type="file"
              id="image"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-gray-300 px-3 py-2 rounded-md shadow-sm text-sm hover:bg-gray-400"
            >
              <Upload className="h-5 w-5 inline-block mr-2" />
              Upload New Image
            </label>
            {newProduct.image && (
              <span className="ml-3 text-sm absolute text-gray-700">
                <CheckCircle/>
              </span>
            )}
          </div>
          <div className="flex gap-2">
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
