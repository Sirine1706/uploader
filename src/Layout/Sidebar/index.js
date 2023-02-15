/** @format */

import "./_style.scss";
import React from "react";
import { useState } from "react";
import Logo from "../../assets/images/icons/uploaderLogo.svg";
import Links from "../../constant";
import uploader from "../../assets/images/icons/uploadericon.svg";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  let handleChange = (e) => {
    const filesArray = Object.values(e.target.files);
    const fileList = filesArray.map((item) => {
      const { name, type, size, lastModifiedDate } = item;
      console.log(type);
      return {
        name,
        type,
        size,
        createdAt: lastModifiedDate,
        isStarred: false,
        isArchived: false,
        starredAt: null,
        archivedAt: null,
      };
    });
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
