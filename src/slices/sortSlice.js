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
      console.log(action.payload, "our payload")
      state.value = action.payload;
    },
  },
});
export const { sortTable } = sortSlice.actions;
export default sortSlice.reducer;
