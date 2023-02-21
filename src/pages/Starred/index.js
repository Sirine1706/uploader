/** @format */

import React from "react";
import { Header } from "../../components/Header";
import "./_style.scss";
import icon from "../../assets/images/icons/starred.svg";
import SortSelect from "../../components/SortSlect";
import { DocumentTable } from "../../components/DocumentTable";
import { starredFileHeader } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetSearchInput } from "../../slices/searchSlice";
import { resetSort } from "../../slices/sortSlice";

export const Starred = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetSearchInput());
  }, []);
  useEffect(() => {
    dispatch(resetSort());
  }, []);
  const { fileList } = useSelector((store) => store.files);
  const files = fileList
    .filter((item) => item.isStarred === true)
    .map((item) => {
      const { name, size, createdAt, type, id } = item;
      return { name, size, createdAt, type, id };
    });
  console.log(files)
  return (
    <div className="allfiles">
      <div className="page-header">
        <Header icon={icon} color={"#EAAC30"} title={"Starred Files"} />
        <SortSelect files={files} />
      </div>
      <DocumentTable
        width={"59.5%"}
        removed={true}
        headerItems={starredFileHeader}
        fileList={files}
      />
    </div>
  );
};
