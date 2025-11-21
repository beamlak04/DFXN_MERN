import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  setProducts: (products) => set({ products }),
  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data.product],
        loading: false,
      }));
      toast.success("Product Created");
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },
  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({
        error: "failed to fetch products: " + error.message,
        loading: false,
      });
      toast.error(error.response.data.error || "Failed to fetch Products");
    }
  },
  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/products/category/${category}`);
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ loading: false });
      console.log(error.message);
      toast.error(error.response.data.error || "Failed to load Category");
    }
  },
  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      await axios.delete(`/products/${productId}`);
      set((prevProducts) => ({
        products: prevProducts.products.filter(
          (product) => product._id !== productId
        ),
        loading: false,
      }));
      toast.success("Product deleted successfully")
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to delete Product");
    }
  },
  toggleFeaturedProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.patch(`/products/${productId}`);
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId
            ? { ...product, isFeatured: response.data.isFeatured }
            : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      console.log("error: " + error.message);
      toast.error(error.response?.data?.error || "Failed to Feature Product");
    }
  },
  fetchProductById: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/products/${productId}`);
      set({ product: response.data.product, loading: false });
    } catch (error) {
      set({ loading: false });
      console.log("error in fetchProduct: ", error.message);
      toast.error(error.response?.data?.error || "Failed to load product");
    }
  },
  editProduct: async (productId, productData) => {
    set({ loading: true});

    try {
      const response = await axios.post(
        `/products/editProduct/${productId}`,
        productData
      );

      const updatedProduct = response.data.product;

      set((state) => ({
        product: updatedProduct,
        loading: false,
      }));
      toast.success(response.data.message || "Product updated successfully!");
      return updatedProduct;
    } catch (error) {
      set({ loading: false });
      console.error(
        "Error editing product:",
        error.response?.data || error.message
      );
      const errorMessage =
        error.response?.data?.message || "Something went wrong";      
      toast.error(errorMessage);
    }
  },
}));
