import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  setCategories: (categories) => ({ categories }),
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
      toast.success("Category created");
    } catch (error) {
      toast.error(error.respose.data.error);
      set({ loading: false });
    }
  },
  getAllCategories: async() => {
    set({loading: true});
    try {
        const response = await axios.get("/admin/categories");
        set({categories: response.data.categories, loading: false})
    } catch (error) {
        toast.error(error.response.data.error);
        set({loading: false});
    }
  },
  editCategory: async(categoryId, categoryData) => {
    set({loading: true});
    try {
      const response = await axios.post(`/admin/categories/edit/${categoryId}`,categoryData);

      const update = response.data.category;
      set((state)=>({
        category: update,
        loading: false,
      }));
      toast.success("Category Updated Successfully");
      return update
    } catch (error) {
      set({loading: false});
      console.log("error in update category", error.message);
      toast.error(error.response?.data?.error)
    }
  },
  fetchCategoryById: async(categoryId) => {
    set({loading: true});
    try {
      const response = await axios.get(`/admin/categories/${categoryId}`);
      set({category: response.data.category, loading: false})
    } catch (error) {
      set({loading: false});
      console.log(error.message);
      toast.error(error.response?.data?.error);
    }
  },
  deleteCategory: async(categoryId) => {
    set({loading: true});
    try {
      await axios.delete(`/admin/categories/${categoryId}`);
      set((prevCategories) => ({
        categories: prevCategories.categories.filter((category)=>category._id !== categoryId),
        loading: false,
      }));
      toast.success("Category deleted Successfully");
    } catch (error) {
      set({loading: false});
      toast.error(error.response.data.error || "Failed to delete category")
    }
  }
}));
