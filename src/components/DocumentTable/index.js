/** @format */

import React from "react";
import "./_style.scss";
import file from "../../assets/images/icons/fileType.svg";
import image from "../../assets/images/icons/imageType.svg";
import video from "../../assets/images/icons/videoType.svg";
import archive from "../../assets/images/icons/aarchived.svg";
import star from "../../assets/images/icons/starred.svg";
import trash from "../../assets/images/icons/delete.svg";

export const DocumentTable = ({
  headerItems,
  fileList,
  starred,
  removed,
  archived,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {headerItems?.map((item, index) => {
            return <th key={`tHeader-${index}`}> {item} </th>;
          })}
        </tr>
      </thead>
      <tbody>
        {fileList.map((item, index) => {
          const { name, size, type, createdAt, starredAt, archivedAt } = item;
          const typeFile = type.substring(0, type.indexOf("/"));

          return (
            <tr className="file" key={`file-${index}`}>
              <td className="file_name">
                {(typeFile === "application" || typeFile === "text") && (
                  <img src={file} alt="file-icon" />
                )}
                {typeFile === "image" && <img src={image} alt="image-icon" />}
                {typeFile === "video" && <img src={video} alt="video-icon" />}
                {name}
              </td>
              {createdAt && <td>{createdAt}</td>}
              {starredAt && <td false>{starredAt}</td>}
              {archivedAt && <td false>{archivedAt}</td>}
              <td>{size}</td>
              <td>
                {removed && (
                  <div>
                    <img src={trash} alt="trash-icon" />
                  </div>
                )}
                {starred && (
                  <div>
                    <img src={star} alt="star-icon" />
                  </div>
                )}
                {archived && (
                  <div>
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
