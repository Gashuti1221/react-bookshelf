import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => <Book key={book.id} {...book} />)
      ) : (
        <p className="no-books">No books available. Add a book to get started!</p>
      )}
    </div>
  );
};

export default BookList;