/** @format */
import uploadedFiles from "../mocks/uploadedFiles";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileList: uploadedFiles,
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    // addFile: (state) => {
    //   state.fileList;
    // },
    // archivedFile: () => {},
    // starredFile: () => {},
    // removeFromArchive: () => {},
    // removeFromStarred: () => {},
  },
});
console.log(fileSlice);

export const { addFile } = fileSlice.actions;

export default fileSlice.reducer;
