import React from "react";
import { Navigate, useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <Navigate
      to={`/products?category=${encodeURIComponent(category || "")}`}
      replace
    />
  );
};

export default CategoryPage;