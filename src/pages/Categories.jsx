import React from "react";
import { useSelector } from "react-redux";
import "./Categories.css";

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  
  return (
    <div className="categories-page">
      <h2>Categories</h2>
      <p className="status-message">{status}</p>
    </div>
  );
};

export default Categories;