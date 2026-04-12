import React from 'react';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, SaveIcon, ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { useCategoryStore } from "../stores/useCategoryStore";
import { createImagePreview } from "../lib/imagePreview";


const EditCategory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {editCategory, fetchCategoryById,category, loading, } = useCategoryStore();
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
    useEffect(()=>{
        fetchCategoryById(id);
    },[fetchCategoryById, id])
    useEffect(()=>{
        if(category){
            setNewCategory({
                name: category.name,
                description: category.description,
                image: "",
                imageOptions: {
                  cropMode: "fill",
                  width: 700,
                  height: 700,
                  removeBackground: false,
                },
            })
        }
    },[category]);
    
    const isChanged = JSON.stringify({
        name: category?.name,
        description: category?.description,
    }) !== JSON.stringify({
        name: newCategory.name,
        description: newCategory.description,
    }) || newCategory.image;

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
    const updated = await editCategory(id, newCategory);
    if (updated) {
      navigate(-1);
    }
  }

  return (
    <motion.div
        className="rounded-md mx-auto w-11/12 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-xl p-5 font-semibold">
          Edit Category {category?.name}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-md rounded-xl p-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600">Category Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newCategory.name}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm text-gray-600">Category Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
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
                        imageOptions: { ...newCategory.imageOptions, cropMode: e.target.value },
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
                        imageOptions: { ...newCategory.imageOptions, width: Number(e.target.value || 700) },
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
                        imageOptions: { ...newCategory.imageOptions, height: Number(e.target.value || 700) },
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

            <div className="relative">
            <input
              type="file"
              id="image"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-gray-300 px-3 py-2 rounded-md shadow-sm text-sm hover:bg-gray-400 inline-flex items-center"
            >
              <Upload className="h-5 w-5 inline-block mr-2" />
              Upload New Image
            </label>
            {newCategory.image && (
              <span className="ml-3 text-sm absolute text-gray-700 top-2">
                <CheckCircle/>
              </span>
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
                <img src={imagePreview} alt="Processed preview" className="w-full h-full object-cover" />
              ) : newCategory.image ? (
                <img src={newCategory.image} alt="New preview" className="w-full h-full object-contain" />
              ) : category?.image ? (
                <img src={category.image} alt="Current" className="w-full h-full object-contain" />
              ) : (
                <span className="text-xs text-gray-400">No image available</span>
              )}
            </div>
            {imagePreviewNotice && (
              <p className="mt-2 text-xs text-gray-500">{imagePreviewNotice}</p>
            )}
          </div>
          </div>

          <div className="flex gap-2 lg:col-span-2">
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
  )
}

export default EditCategory