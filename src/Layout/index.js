/** @format */

import React, { Children } from "react";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import "./_style.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar className="layout_left_side" />
      <div className="layout_right_side">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
