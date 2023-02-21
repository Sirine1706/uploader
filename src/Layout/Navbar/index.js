/** @format */

import search from "../../assets/images/icons/Search.svg";
import setting from "../../assets/images/icons/Settings.svg";
import notificationBell from "../../assets/images/icons/NotificationBell.svg";
import "./_style.scss";
import { useDispatch, useSelector } from "react-redux";
import { changesearchInput } from "../../slices/searchSlice";

export const Navbar = () => {
  const { searchInput } = useSelector((store) => store.searchBar);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changesearchInput(e.target.value));
  };

  return (
    <div className="navbar">
      <div className="search">
        <img src={search} alt="search_icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
      <div className="user-space">
        <img
          className="notification"
          src={notificationBell}
          alt="notificationBell"
        />
        <div className="setting">
          <img src={setting} alt="setting" />
          <span>8</span>
        </div>
        <div className="profile">
          <span>Sirine</span>
          <div className="user">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
