/** @format */

import { configureStore } from "@reduxjs/toolkit";
import fileSlice from "./slices/fileSlice";

export const store = configureStore({
  reducer: {
    files: fileSlice,
  },
});
