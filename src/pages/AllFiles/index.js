/** @format */

import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import "./_style.scss";
import icon from "../../assets/images/icons/allfiles.svg";
import SortSelect from "../../components/SortSlect";
import { DocumentTable } from "../../components/DocumentTable";
import { allFilesHeader } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { getAllFiles } from "../../slices/fileSlice";
import { resetSearchInput } from "../../slices/searchSlice";
import { resetSort } from "../../slices/sortSlice";

export const AllFiles = () => {
  const { fileList } = useSelector((store) => store.files);
  const dispatch = useDispatch();

  useEffect(() => {
    fileList.length === 0 && dispatch(getAllFiles());
  }, []);
  useEffect(() => {
    dispatch(resetSearchInput());
  }, []);
  useEffect(() => {
    dispatch(resetSort());
  }, []);

  const allFiles = fileList?.map((item) => {
    const { name, size, createdAt, type, id, isStarred, isArchived } = item;
    return { name, size, createdAt, type, id, isStarred, isArchived };
  });

  return (
    <div className="allfiles">
      <div className="page-header">
        <Header icon={icon} color={"#005bd4"} title={"All Files"} />
        <SortSelect files={allFiles} />
      </div>
      <div className="table-container">
        <DocumentTable
          starred={true}
          archived={true}
          headerItems={allFilesHeader}
          fileList={allFiles}
        />
      </div>
    </div>
  );
};
