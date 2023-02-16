/** @format */
import uploadedFiles from "../mocks/uploadedFiles";
import { createSlice } from "@reduxjs/toolkit";
import { dayToBeConverted } from "../utilities/date";

const initialState = {
  fileList: uploadedFiles.map((item) => {
    const { starredAt, archivedAt, createdAt } = item;
    return {
      ...item,
      starredAt: dayToBeConverted(starredAt),
      archivedAt: dayToBeConverted(archivedAt),
      createdAt: dayToBeConverted(createdAt),
    };
  }),
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
console.log(fileSlice, "slice");

export const { addFile } = fileSlice.actions;

export default fileSlice.reducer;
