import { createSlice } from '@reduxjs/toolkit';
import books from './mockData';
const initialState = {
  books: [
    books,
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, id: state.books.length + 1 };
      state.books.push(newBook);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
