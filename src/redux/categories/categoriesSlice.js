import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSLice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategories: (state) => state.categories === 'under construction',
  },
});

export const { checkCategories } = categoriesSLice.actions;

export default categoriesSLice.reducer;
