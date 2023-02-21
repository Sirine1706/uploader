/** @format */

import React, { useEffect } from "react";
import { DocumentCard } from "../../components/DocumentCard";
import { DocumentTable } from "../../components/DocumentTable";
import { Header } from "../../components/Header";
import "./_style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fileHomeHeader } from "../../constant";
import { HowManyFile } from "../../components/HowManyFile";
import star from "../../assets/images/icons/starred.svg";
import archive from "../../assets/images/icons/aarchived.svg";

import Document from "../../assets/images/icons/fileType.svg";
import Image from "../../assets/images/icons/imageType.svg";
import Video from "../../assets/images/icons/videoType.svg";
import { getAllFiles } from "../../slices/fileSlice";

export const Home = () => {
  const { fileList, spaceUsedDocument, spaceUsedImage, spaceUsedVideo } =
    useSelector((store) => store.files);
  const dispatch = useDispatch();
  useEffect(() => {
    fileList.length === 0 && dispatch(getAllFiles());
  }, []);
  const homeFiles = fileList
    .map((item) => {
      const { name, createdAt, size, type } = item;
      return { name, createdAt, size, type };
    })
    .slice(0, 5);
  const starredFiles = fileList.filter(
    (item) => item.isStarred === true
  ).length;
  const archivedFiles = fileList.filter(
    (item) => item.isArchived === true
  ).length;

  return (
    <div className="home">
      <div className="document_container">
        <DocumentCard
          icon={Document}
          type={"Document"}
          color={"#610CEF"}
          totalSpace={5 * 1024 * 1024}
          usedSpace={spaceUsedDocument}
        />
        <DocumentCard
          icon={Image}
          type={"Image"}
          color={"#325BD4"}
          totalSpace={50 * 1024 ** 2}
          usedSpace={spaceUsedImage}
        />
        <DocumentCard
          icon={Video}
          type={"Video"}
          color={"#158A00"}
          totalSpace={5 * 1024 ** 3}
          usedSpace={spaceUsedVideo}
        />
      </div>
      <div className="home-bottom">
        <div className="right-side">
          <Header title={"Recent Files"} />
          <DocumentTable headerItems={fileHomeHeader} fileList={homeFiles} />
        </div>
        <div className="left-side">
          <HowManyFile
            color={"#EAAC30"}
            path={"/starred"}
            type={"starred"}
            fileNumber={starredFiles}
            icon={star}
          />
          <HowManyFile
            color={"#CA0E4F"}
            path={"/archived"}
            type={"archived"}
            fileNumber={archivedFiles}
            icon={archive}
          />
        </div>
      </div>
    </div>
  );
};
