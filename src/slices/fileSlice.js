/** @format */
import uploadedFiles from "../mocks/uploadedFiles";
import { createSlice, current } from "@reduxjs/toolkit";
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
    addFile: (state, action) => {
      let old = [...current(state.fileList), ...action.payload];
      state.fileList = old;
    },
    archivedFile: (state, action) => {
      const id = action.payload;
      const file = state.fileList.map((file) => {
        if (file.id === id) {
          file.isArchived = true;
        }
        return file;
      });
      state.fileList = file;
    },
    starredFile: (state, action) => {
      const id = action.payload;
      const file = state.fileList.map((file) => {
        if (file.id === id) {
          file.isStarred = true;
        }
        return file;
      });
      state.fileList = file;
    },
    removeFromStarred: (state, action) => {
      const id = action.payload;
      console.log(id, "our store")
      const files = state.fileList.map((file) => {
        if (file.id === id) {
          file.isStarred = false;
        }
        return file
      });
      state.fileList = files;
    },
    removeFromArchive: (state, action) => {
      const id = action.payload;
      const file = state.fileList.map((file) => {
        if (file.id === id) {
          file.isArchived = false;
        }
        return file;
      });
      state.fileList = file;
    },
   
  },
});
console.log(fileSlice, "slice");

export const {
  addFile,
  archivedFile,
  starredFile,
  removeFromArchive,
  removeFromStarred,
} = fileSlice.actions;

export default fileSlice.reducer;
