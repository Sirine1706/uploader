/** @format */
import uploadedFiles from "../mocks/uploadedFiles";
import { createSlice } from "@reduxjs/toolkit";
import { dayToBeConverted } from "../utilities/date";
import { fileType } from "../utilities/fileType";

const spaceUsedDocument = uploadedFiles.reduce((accumulator, currentValue) => {
  let fType = fileType(currentValue.type);
  if (fType === "document" || fType === "text") {
    return accumulator + currentValue.size;
  }
  return accumulator;
}, 0);

const spaceUsedImage = uploadedFiles.reduce((accumulator, currentValue) => {
  let fType = fileType(currentValue.type);
  if (fType === "image") { 
    return accumulator + currentValue.size;
  }
  return accumulator;
}, 0);

const spaceUsedVideo = uploadedFiles.reduce((accumulator, currentValue) => {
  let fType = fileType(currentValue.type);
  if (fType === "video") {
    return accumulator + currentValue.size;
  }
  return accumulator;
}, 0);

const initialState = {
  fileList: [],
  spaceUsedDocument: spaceUsedDocument,
  spaceUsedImage: spaceUsedImage,
  spaceUsedVideo: spaceUsedVideo,
};


const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFile: (state, action) => {
      let newFile = action.payload;

      let fileTp = fileType(newFile.type);

      if (fileTp === "text" || fileTp === "application") {
        state.fileList.unshift(newFile);
        state.spaceUsedDocument += newFile.size;
      }
      if (fileTp === "image") {
        state.fileList.unshift(newFile);
        state.spaceUsedImage += newFile.size;
      }
      if (fileType === "video") {
        state.fileList.unshift(newFile);
        state.spaceUsedVideo += newFile.size;
      }
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
      console.log(id, "our store");
      const files = state.fileList.map((file) => {
        if (file.id === id) {
          file.isStarred = false;
        }
        return file;
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
    getAllFiles: (state) => {
      state.fileList = uploadedFiles.map((item) => {
        const { starredAt, archivedAt, createdAt } = item;
        return {
          ...item,
          starredAt: dayToBeConverted(starredAt),
          archivedAt: dayToBeConverted(archivedAt),
          createdAt: dayToBeConverted(createdAt),
        };
      });
    },
  },
});

export const {
  addFile,
  archivedFile,
  starredFile,
  removeFromArchive,
  getAllFiles,
  removeFromStarred,
} = fileSlice.actions;

export default fileSlice.reducer;
