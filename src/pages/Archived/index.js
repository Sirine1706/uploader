/** @format */

import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import "./_style.scss";
import icon from "../../assets/images/icons/aarchived.svg";
import SortSelect from "../../components/SortSlect";
import { DocumentTable } from "../../components/DocumentTable";
import { archivedFileHeader } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { resetSearchInput } from "../../slices/searchSlice";
import { resetSort } from "../../slices/sortSlice";

export const Archived = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetSearchInput());
  }, []);
  useEffect(() => {
    dispatch(resetSort());
  }, []);
  const { fileList } = useSelector((store) => store.files);
  const files = fileList
    .filter((item) => item.isArchived === true)
    .map((item) => {
      const { name, size, createdAt, type, id } = item;
      return { name, size, createdAt, type, id };
    });
  return (
    <div className="allfiles">
      <div className="page-header">
        <Header icon={icon} color={"#CA0E4F"} title={"Archived Files"} />
        <SortSelect files={files} />
      </div>
      <DocumentTable
        width={"59.5%"}
        removed={true}
        headerItems={archivedFileHeader}
        fileList={files}
      />
    </div>
  );
};
