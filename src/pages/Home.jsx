import React from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <BookList />
      <BookForm />
    </div>
  );
};

export default Home;