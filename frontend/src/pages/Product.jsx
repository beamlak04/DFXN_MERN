import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import { useProductStore } from "../stores/useProductStore";
import FooterComponent from "../components/FooterComponent";
import { CartContext } from "./CartProvider";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {addItem} = useContext(CartContext);

  const { product, fetchProductById, products, fetchAllProducts, loading } = useProductStore();

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
    if (products.length === 0) {
      fetchAllProducts();
    }
  }, [id, fetchProductById, fetchAllProducts, products.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  // Related products (same category, exclude current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md h-[350px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">
                ETB {product.price.toFixed(2)}
              </p>
              {product.stock > 0 ? (
                <p className="text-green-600 font-medium mb-4">
                  In stock ({product.stock} left)
                </p>
              ) : (
                <p className="text-red-500 font-medium mb-4">Out of stock</p>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => {addItem(product);console.log("Add to cart:", product._id)}}
              disabled={product.stock === 0}
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium px-5 py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <div
                  key={rp._id}
                  onClick={() => navigate(`/products/${rp._id}`)}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer flex flex-col"
                >
                  <div className="w-full h-[200px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 truncate mb-2">
                    {rp.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {rp.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-gray-900 font-semibold">
                      ETB {rp.price.toFixed(2)}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(rp)
                        console.log("Add to cart:", rp._id);
                      }}
                      className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg text-sm"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <FooterComponent/>
    </div>
  );
};

export default Product;
