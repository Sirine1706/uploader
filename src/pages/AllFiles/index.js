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

export const AllFiles = () => {
  const { fileList } = useSelector((store) => store.files);
  const { searchInput } = useSelector((store) => store.searchBar);
  const dispatch = useDispatch();

  useEffect(() => {
    fileList.length === 0 && dispatch(getAllFiles());
  }, []);
  useEffect(() => {
    dispatch(resetSearchInput);
  }, [searchInput]);

  const allFiles = fileList?.map((item) => {
    const { name, size, createdAt, type, id } = item;
    return { name, size, createdAt, type, id };
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
