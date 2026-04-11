import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import { useCategoryStore } from "../stores/useCategoryStore";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  const { featuredProducts, fetchFeaturedProducts, loading } = useProductStore();
  const {
    categories,
    getAllCategories,
    loading: categoriesLoading,
  } = useCategoryStore();

  useEffect(() => {
    fetchFeaturedProducts();
    getAllCategories();
  }, [fetchFeaturedProducts, getAllCategories]);
  
  return (
    <div>
      <Navbar page= "home" />
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row-reverse items-center">
        <div className="w-full sm:w-3/5 ">
          <img src="/1.jpg" alt="" className="w-full" />
        </div>

        <div className="w-full sm:w-2/5 h-full sm:px-10 flex flex-col items-center gap-5 md:gap-10 font-primary">
          <h1 className="text-3xl md:text-5xl text-center">
            Find Your Perfect <br /> Pair Today
          </h1>
          <Link
            to="/products"
            className=" p-3 rounded-full bg-gray-800 text-xl text-white hover:bg-gray-700 active:scale-95"
          >
            Shop now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      {(loading || featuredProducts.length > 0) && (
        <div className="mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
          <h2 className="text-center text-3xl font-semibold mb-10">
            Featured Products
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading featured products...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 8).map((product) => (
                <Link
                  key={product._id}
                  to={`/products/${product._id}`}
                  className="rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden bg-white"
                >
                  <div className="w-full h-56 bg-gray-50 overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">
                      {product.description}
                    </p>
                    <p className="mt-3 font-bold text-gray-900">
                      ETB {Number(product.price || 0).toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Categories */}
      {(categoriesLoading || categories.length > 0) && (
        <div className="mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">
          <h2 className="text-center text-3xl font-semibold my-10">
            Shop Trainers by Category
          </h2>
          {categoriesLoading ? (
            <p className="text-center text-gray-500">Loading categories...</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {categories.map((category) => (
                <Link
                  key={category._id}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="w-full h-32 sm:h-40 lg:h-48 flex items-center justify-center overflow-hidden bg-gray-50 p-3">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <span className="text-sm text-gray-500">{category.name}</span>
                    )}
                  </div>
                  <h3 className="text-lg text-center font-semibold text-gray-800 py-4">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* About Us */}
      <div className="bg-gray-50 " id="About">
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/about-us.png"
              alt="About Us"
              className="w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="px-10">
            <h2 className="py-10 sm:py-0 text-center text-3xl font-semibold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="md:text-lg text-gray-600 ">
              DFXN is your trusted source for premium trainers, carefully
              sourced from leading brands across Europe and delivered to
              customers across Africa. We bring global quality and style
              directly to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Why us */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
          Why Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {/* High-quality materials */}
          <div className="flex flex-col items-center">
            <img
              src="/quality.png" // replace with your local image path
              alt="High-quality materials"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              High-quality materials
            </h3>
          </div>

          {/* Comfort and performance */}
          <div className="flex flex-col items-center">
            <img
              src="comfort.png" // replace with your local image path
              alt="Comfort and performance"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Comfort and performance
            </h3>
          </div>

          {/* Fast and free shipping */}
          <div className="flex flex-col items-center">
            <img
              src="delivery.png" // replace with your local image path
              alt="Fast and free shipping"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Fast and free shipping
            </h3>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className=" px-10 md:w-10/12 mx-auto  bg-white mb-5" id="Contact">
        <h1 className="text-center text-3xl font-semibold mb-10">Contact Us</h1>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-10">
          {/* Left - Contact Info */}
          <div className="flex-1 text-center sm:text-left">
            <p className="md:text-lg mb-6">
              Get in touch with DFXN — your trusted source for premium trainers
              sourced from Europe and sold in Africa.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <Mail className="w-6 h-6 text-gray-700" />
              <span>contact@dfxn.com</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <Phone className="w-6 h-6 text-gray-700" />
              <span>+251 900 000 000</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-gray-700" />
              <span>Addis Ababa, Ethiopia</span>
            </div>

            <div className="flex justify-center sm:justify-start gap-5 mt-6">
              <Facebook className="w-7 h-7 text-gray-600 hover:text-blue-500 cursor-pointer transition" />
              <Instagram className="w-7 h-7 text-gray-600 hover:text-pink-500 cursor-pointer transition" />
              <Twitter className="w-7 h-7 text-gray-600 hover:text-sky-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1">
            <form className="bg-slate-100 p-6 rounded-2xl shadow-md">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black h-28"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default HomePage;
