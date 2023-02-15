/** @format */

import React from "react";
import { Documents } from "../../components/DocumentCard";
import { DocumentTable } from "../../components/DocumentTable";
import { Header } from "../../components/Header";
import "./_style.scss";
import { useSelector } from "react-redux";
import { fileHomeHeader } from "../../constant";

export const Home = () => {
  const { fileList } = useSelector((store) => store.files);
  const homeFiles = fileList
    .map((item) => {
      const { name, createdAt, size, type } = item;
      return { name, createdAt, size, type };
    })
    .slice(0, 5);

  return (
    <div className="home">
      <Documents />
      <Header title={"Recent Files"} />
      <DocumentTable headerItems={fileHomeHeader} fileList={homeFiles}  />
    </div>
  );
};
