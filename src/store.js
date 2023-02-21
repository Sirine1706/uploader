/** @format */

import { configureStore } from "@reduxjs/toolkit";
import fileSlice from "./slices/fileSlice";
import searchSlice from "./slices/searchSlice";
import sortSlice from "./slices/sortSlice";

export const store = configureStore({
  reducer: {
    files: fileSlice,
    searchBar: searchSlice,
    sort: sortSlice,
  },
});
