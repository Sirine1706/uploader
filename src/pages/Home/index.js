/** @format */

import React from "react";
import { Documents } from "../../components/DocumentCard";
import { DocumentTable } from "../../components/DocumentTable";
import { Header } from "../../components/Header";
import "./_style.scss";
import { useSelector } from "react-redux";
import { fileHomeHeader } from "../../constant";
import { HowManyFile } from "../../components/HowManyFile";
import star from "../../assets/images/icons/starred.svg"
import archive from "../../assets/images/icons/aarchived.svg"

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

      <div className="home-bottom">
        <div className="right-side">
          <Header title={"Recent Files"} />
          <DocumentTable headerItems={fileHomeHeader} fileList={homeFiles} />
        </div>
        <div className="left-side">
          <HowManyFile color={"#EAAC30"} path={"/starred"} type={"starred"} fileNumber={0} icon={star} />
          <HowManyFile color={"#CA0E4F"} path={"/archived"} type={"archived"} fileNumber={3} icon={archive} />
        </div>
      </div>
    </div>
  );
};
