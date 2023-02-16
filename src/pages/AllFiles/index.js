/** @format */

import React from "react";
import { Header } from "../../components/Header";
import "./_style.scss";
import icon from "../../assets/images/icons/allfiles.svg"
import SortSelect from "../../components/SortSlect";
import { DocumentTable } from "../../components/DocumentTable";
import { allFilesHeader } from "../../constant";
import { useSelector } from "react-redux";


export const AllFiles = () => {

  const {fileList} = useSelector((store) => store.files)
  console.log(fileList, "file page")
  const files = fileList.map((item) => {
    const {name, size, createdAt, type} = item
    return ({name, size, createdAt, type})
  })
  console.log(files, "after filter")
  return <div className="allfiles">
  <div className="page-header">
    <Header icon={icon} color={"#005bd4"} title={"All Files"}  />
    <SortSelect files={files} />
  </div>
  <DocumentTable starred={true} archived={true} headerItems={allFilesHeader} fileList={files} />
  </div>;
};
