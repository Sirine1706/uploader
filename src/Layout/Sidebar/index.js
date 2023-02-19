/** @format */

import "./_style.scss";
import React from "react";
import { useState } from "react";
import Logo from "../../assets/images/icons/uploaderLogo.svg";
import Links from "../../constant";
import uploader from "../../assets/images/icons/uploadericon.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFile } from "../../slices/fileSlice";
import { day } from "../../utilities/date";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  let handleChange = (e) => {
    const filesArray = Object.values(e.target.files);
    const newFileList = filesArray.map((item) => {
      const { name, type, size } = item;
      return {
        name,
        type,
        size,
        id: name + "sdsdvd5665",
        createdAt: day(),
        isStarred: false,
        isArchived: false,
        starredAt: null,
        archivedAt: null,
      };
    });
    dispatch(addFile(newFileList));
  };

  return (
    <div className="sidebar">
      <img
        className="logo-rotation"
        onClick={handleClick}
        width="50px"
        src={Logo}
        alt="logo"
      />

      {!isOpen && (
        <label htmlFor="inputTag">
          <img src={uploader} alt="" />
          Upload
          <input onChange={handleChange} id="inputTag" type="file" multiple />
        </label>
      )}

      {!isOpen && (
        <nav>
          {Links.map((item, index) => {
            const { path, icon, page } = item;
            return (
              <NavLink to={path} className="link" key={`link-${index}`}>
                <img src={icon} alt="page_icon" />
                <p>{page}</p>
              </NavLink>
            );
          })}
        </nav>
      )}
    </div>
  );
};
