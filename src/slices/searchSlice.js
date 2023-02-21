/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};
const searchSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    changesearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    resetSearchInput: (state) => {
      state.searchInput = "";
    },
  },
});

export const { changesearchInput, resetSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
