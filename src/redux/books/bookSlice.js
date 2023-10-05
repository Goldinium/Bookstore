import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [
        ...state.books,
        {
          id: crypto.randomUUID(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
