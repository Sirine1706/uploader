/** @format */

import "./_style.scss";
import React from "react";
import { useState } from "react";
import Logo from "../../assets/images/icons/uploaderLogo.svg";
import Links from "../../constant";
import uploader from "../../assets/images/icons/uploadericon.svg";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
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
          <input id="inputTag" type="file" multiple />
        </label>
      )}

      {!isOpen && (
        <nav>
          {Links.map((item, index) => {
            const { path, icon, page } = item;
            return (
              <a className="link" key={`link-${index}`} href={path}>
                <img src={icon} alt="page_icon" />
                <p>{page}</p>
              </a>
            );
          })}
        </nav>
      )}
    </div>
  );
};
