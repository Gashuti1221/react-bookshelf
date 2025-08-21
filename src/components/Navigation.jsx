import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <h1 className="logo">Bookstore CMS (Content Management System)</h1>
      <ul>
        <li>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active" : ""}
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link 
            to="/categories" 
            className={location.pathname === "/categories" ? "active" : ""}
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;