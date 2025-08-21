import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";
import "./BookForm.css";

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState("Introduction");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      category: "Uncategorized",
      progress: parseInt(progress),
      currentChapter: chapter
    };

    dispatch(addBook(newBook));
    setTitle("");
    setAuthor("");
    setProgress(0);
    setChapter("Introduction");
  };

  return (
    <div className="book-form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="number"
            placeholder="Progress %"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            className="progress-input"
          />
          <input
            type="text"
            placeholder="Current Chapter"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          />
          <button type="submit" className="add-btn">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;