import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Fiction',
      progress: 64,
      currentChapter: 'Chapter 17'
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      progress: 32,
      currentChapter: 'Chapter 8'
    },
    {
      id: '3',
      title: 'Capital in the Twenty-First Century',
      author: 'Thomas Piketty',
      category: 'Economy',
      progress: 12,
      currentChapter: 'Chapter 3'
    }
  ]
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Add default progress and chapter for new books
      const newBook = {
        ...action.payload,
        progress: action.payload.progress || 0,
        currentChapter: action.payload.currentChapter || 'Introduction'
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateProgress: (state, action) => {
      const { id, progress, chapter } = action.payload;
      const book = state.books.find(book => book.id === id);
      if (book) {
        if (progress !== undefined) book.progress = progress;
        if (chapter) book.currentChapter = chapter;
      }
    },
  },
});

export const { addBook, removeBook, updateProgress } = booksSlice.actions;
export default booksSlice.reducer;