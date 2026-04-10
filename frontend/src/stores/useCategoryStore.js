import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  setCategories: (categories) => set({ categories }),
  createCategory: async (categoryData) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        "/admin/categories/create-category",
        categoryData
      );
      set((prevState) => ({
        categories: [...prevState.categories, response.data.category],
        loading: false,
      }));
      toast.success("Category created successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create category");
      set({ loading: false });
    }
  },
  getAllCategories: async () => {
    set({ loading: true });
    try {
        const response = await axios.get("/admin/categories");
        set({ categories: response.data.categories, loading: false });
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load categories");
        set({ loading: false });
    }
  },
  editCategory: async (categoryId, categoryData) => {
    set({ loading: true });
    try {
      const response = await axios.put(`/admin/categories/${categoryId}`, categoryData);

      const update = response.data.category;
      set(() => ({
        category: update,
        loading: false,
      }));
      toast.success("Category updated successfully");
      return update;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to update category");
    }
  },
  fetchCategoryById: async (categoryId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/admin/categories/${categoryId}`);
      set({ category: response.data.category, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to load category");
    }
  },
  deleteCategory: async (categoryId) => {
    set({ loading: true });
    try {
      await axios.delete(`/admin/categories/${categoryId}`);
      set((prevCategories) => ({
        categories: prevCategories.categories.filter(
          (category) => category._id !== categoryId
        ),
        loading: false,
      }));
      toast.success("Category deleted successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to delete category");
    }
  },
}));
