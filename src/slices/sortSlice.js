/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "date",
};
const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortTable: (state, action) => {
      state.value = action.payload;
    },
    resetSort:(state) => {
      state.value = "date"
    }
  },
});
export const { sortTable, resetSort } = sortSlice.actions;
export default sortSlice.reducer;
