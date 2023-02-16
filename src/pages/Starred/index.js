/** @format */

import React from "react";
import { Header } from "../../components/Header";
import "./_style.scss";
import icon from "../../assets/images/icons/starred.svg";
import SortSelect from "../../components/SortSlect";
import { DocumentTable } from "../../components/DocumentTable";
import { starredFileHeader } from "../../constant";
import { useSelector } from "react-redux";

export const Starred = () => {
  const { fileList } = useSelector((store) => store.files);
  console.log(fileList, "file page");
  const files = fileList.filter((item) => item.isStarred === true).map((item) => {
    const { name, size, createdAt, type } = item;
    return { name, size, createdAt, type };
  });
  console.log(files, "after filter");
  return (
    <div className="allfiles">
      <div className="page-header">
        <Header icon={icon} color={"#EAAC30"} title={"Starred Files"} />
        <SortSelect files={files} />
      </div>
      <DocumentTable
        removed={true}
        headerItems={starredFileHeader}
        fileList={files}
      />
    </div>
  );
};
