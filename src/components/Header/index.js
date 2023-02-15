/** @format */

import React from "react";
import "./_style.scss";

export const Header = ({ icon, title, color }) => {
  return (
    <div className="header">
      {icon && (
        <div style={{backgroundColor: `${color}`}} className="icon-bg">
          <img src={icon} alt="title-icon" />
        </div>
      )}
      {title && <p className="docs-title">{title}</p>}
    </div>
  );
};
