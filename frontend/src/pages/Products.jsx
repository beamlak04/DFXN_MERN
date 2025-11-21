import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import { useProductStore } from "../stores/useProductStore";
import { useCategoryStore } from "../stores/useCategoryStore";
import FooterComponent from "../components/FooterComponent";
import { CartContext } from "./CartProvider";

const Products = () => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const { products, fetchAllProducts, fetchProductsByCategory, loading } =
    useProductStore();
  const { categories, getAllCategories } = useCategoryStore();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  useEffect(() => {
    fetchAllProducts();
    getAllCategories();
  }, [fetchAllProducts, getAllCategories]);

  const handleCategoryChange = async (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setCurrentPage(1);

    if (value === "all") {
      fetchAllProducts();
    } else {
      fetchProductsByCategory(value);
    }
  };

  // Filtering + searching
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar page="products" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full sm:w-auto border rounded-lg px-3 py-2 bg-white text-sm"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-8 border rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : currentProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {currentProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition duration-200"
                >
                  <div
                    onClick={() => navigate(`/products/${product._id}`)}
                    className="cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-full object-contain"
                    />
                    <div className="p-4">
                      <h2 className="font-semibold text-lg text-gray-800 truncate">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {product.description}
                      </p>
                      <p className="mt-2 font-bold text-gray-900">
                        ETB {product.price.toFixed(2)}
                      </p>

                      {/* Stock Status */}
                      <div
                        className={`mt-2 text-sm ${
                          product.stock > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {product.stock > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="p-4 pt-0 mt-auto">
                    <button
                      onClick={() => {
                        if (product.stock > 0) {
                          addItem(product);
                          console.log("Add to cart:", product._id);
                        } else {
                          alert("This product is out of stock.");
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
                      disabled={product.stock <= 0}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center mt-8 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === i + 1
                      ? "bg-gray-800 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default Products;
