/** @format */

import React from "react";
import file from "../../assets/images/icons/fileType.svg";
import image from "../../assets/images/icons/imageType.svg";
import video from "../../assets/images/icons/videoType.svg";
import archive from "../../assets/images/icons/aarchived.svg";
import star from "../../assets/images/icons/starred.svg";
import trash from "../../assets/images/icons/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  archivedFile,
  removeFromArchive,
  removeFromStarred,
  starredFile,
} from "../../slices/fileSlice";
import { useLocation } from "react-router-dom";
import { bytesToSize } from "../../utilities/conversion";
import { fileType } from "../../utilities/fileType";

export const DocumentTable = ({
  headerItems,
  fileList,
  starred,
  removed,
  archived,
  width,
}) => {
  const { searchBar, sort } = useSelector((store) => store);
  const { searchInput } = searchBar;
  const { value } = sort;

  const location = useLocation();
  const pathname = location.pathname.split("/").reverse()[0];
  const dispatch = useDispatch();
  const filteredFiles = fileList.filter((file) => {
    if (searchInput === "") {
      return file;
    } else if (file.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return file;
    }
  });

  if (value === "name") {
    filteredFiles.sort((a, b) => a.name.localeCompare(b.name));
  } else if (value === "size") {
    filteredFiles.sort(function (a, b) {
      return b.size - a.size;
    });
  } else {
    if (pathname === "starred") {
      filteredFiles.sort((a, b) => a.starredAt - b.starredAt);
    } else if (pathname === "archived") {
      filteredFiles.sort((a, b) => a.archivedAt - b.archivedAt);
    } else {
      filteredFiles.sort((a, b) => a.createdAt - b.createdAt);
    }
  }

  console.log(filteredFiles);

  return (
    <table style={{ width: `${width}` }}>
      <thead>
        <tr>
          {headerItems?.map((item, index) => {
            return <th key={`tHeader-${index}`}> {item} </th>;
          })}
        </tr>
      </thead>
      <tbody>
        {filteredFiles?.map((item, index) => {
          const { name, size, type, createdAt, starredAt, archivedAt, id } =
            item;
          const fileTp = fileType(type);
          return (
            <tr className="file" key={`file-${index}`}>
              <td className="file_name">
                {(fileTp === "application" || fileTp === "text") && (
                  <img
                    src={file}
                    style={{
                      filter:
                        " invert(13%) sepia(73%) saturate(6964%) hue-rotate(265deg) brightness(88%) contrast(116%)",
                    }}
                    alt="file-icon"
                  />
                )}
                {fileTp === "image" && (
                  <img
                    src={image}
                    style={{
                      filter:
                        "invert(25%) sepia(100%) saturate(5133%) hue-rotate(206deg) brightness(92%) contrast(104%)",
                    }}
                    alt="image-icon"
                  />
                )}
                {fileTp === "video" && (
                  <img
                    src={video}
                    style={{
                      filter:
                        "invert(31%) sepia(81%) saturate(1208%) hue-rotate(88deg) brightness(97%) contrast(106%)",
                    }}
                    alt="video-icon"
                  />
                )}
                {name}
              </td>
              {createdAt && <td>{createdAt}</td>}
              {starredAt && <td false>{starredAt}</td>}
              {archivedAt && <td false>{archivedAt}</td>}
              <td>{bytesToSize(size)}</td>
              <td className="actions">
                {removed && (
                  <div
                    onClick={() => {
                      console.log(id);
                      if (pathname === "starred") {
                        dispatch(removeFromStarred(id));
                      } else {
                        dispatch(removeFromArchive(id));
                      }
                    }}>
                    <img src={trash} width="26px" alt="trash-icon" />
                  </div>
                )}
                {starred && (
                  <div
                    onClick={() => {
                      dispatch(starredFile(id));
                    }}
                    style={{ background: "#eaac30" }}>
                    <img src={star} alt="star-icon" />
                  </div>
                )}
                {archived && (
                  <div
                    onClick={() => {
                      dispatch(archivedFile(id));
                    }}>
                    <img src={archive} alt="archive-icon" />
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
