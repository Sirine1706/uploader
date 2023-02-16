/** @format */

import React from "react";
import search from "../../assets/images/icons/Search.svg";
import setting from "../../assets/images/icons/Settings.svg";
import notificationBell from "../../assets/images/icons/NotificationBell.svg";
import "./_style.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <img src={search} alt="search_icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-space">
        <img className="notification" src={notificationBell} alt="notificationBell" />
        <div className="setting">
          <img src={setting} alt="setting" />
          <span>8</span>
        </div>
        <div className="profile">
          <span>Sirine</span>
          <div className="user"><div></div></div>
        </div>
      </div>
    </div>
  );
};
