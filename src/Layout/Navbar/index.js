/** @format */

import React from "react";
import search from "../../assets/images/icons/Search.svg";
import setting from "../../assets/images/icons/Settings.svg";
import notificationBell from "../../assets/images/icons/NotificationBell.svg";
import "./_style.scss"
import userImg from "../../assets/images/mazen.jpeg";

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
          <span>Mazen</span>
          <img className="userImg" src={userImg} alt="user_img" />
        </div>
      </div>
    </div>
  );
};
