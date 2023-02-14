/** @format */
import files from "../mocks/uploadedFiles"
import { createSlice } from "@reduxjs/toolkit";
console.log(files)
const initialState = {
  fileList: [],
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFile: () => {},
    archivedFile: () => {},
    starredFile: () => {},
    removeFromArchive: () => {},
    removeFromStarred: () => {},
  },
});
