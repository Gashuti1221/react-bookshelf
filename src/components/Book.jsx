import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBook, updateProgress } from "../redux/books/booksSlice";
import "./Book.css";

const Book = ({ id, title, author, category, progress, currentChapter }) => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newProgress, setNewProgress] = useState(progress);
  const [newChapter, setNewChapter] = useState(currentChapter);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      dispatch(removeBook(id));
    }
  };

  const handleProgressUpdate = () => {
    dispatch(updateProgress({
      id,
      progress: newProgress,
      chapter: newChapter
    }));
    setIsEditing(false);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // Reset values when canceling edit
    if (isEditing) {
      setNewProgress(progress);
      setNewChapter(currentChapter);
    }
  };

  return (
    <div className="book">
      <div className="book-info">
        <p className="book-category">{category}</p>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="book-actions">
          <button className="book-btn" onClick={toggleComments}>
            {showComments ? "Hide Comments" : "Comments"}
          </button>
          <button className="book-btn" onClick={handleDelete}>Remove</button>
          <button className="book-btn" onClick={toggleEdit}>
            {isEditing ? "Cancel Edit" : "Edit"}
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="comments-section">
            <h4>Comments</h4>
            <p className="no-comments">No comments yet. Be the first to comment!</p>
            <div className="add-comment">
              <textarea placeholder="Add your comment..." className="comment-textarea"></textarea>
              <button className="comment-btn">Post Comment</button>
            </div>
          </div>
        )}
      </div>
      
      <div className="book-progress">
        <div className="circular-progress-container">
          <div 
            className="circular-progress"
            style={{ 
              background: `conic-gradient(#307bbe ${progress * 3.6}deg, #e8e8e8 0deg)` 
            }}
          ></div>
          <div className="progress-stats">
            <p className="percentage">{progress}%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>
      
      <div className="book-chapter">
        <p className="current-chapter">CURRENT CHAPTER</p>
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="number"
              min="0"
              max="100"
              value={newProgress}
              onChange={(e) => setNewProgress(parseInt(e.target.value) || 0)}
              className="progress-input"
            />
            <span>%</span>
            <input
              type="text"
              value={newChapter}
              onChange={(e) => setNewChapter(e.target.value)}
              className="chapter-input"
              placeholder="Chapter title"
            />
            <button className="update-btn" onClick={handleProgressUpdate}>
              SAVE CHANGES
            </button>
          </div>
        ) : (
          <>
            <p className="chapter">{currentChapter}</p>
            <button className="update-btn" onClick={toggleEdit}>
              UPDATE PROGRESS
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Book;