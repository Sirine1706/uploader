/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

export const HowManyFile = ({ icon, path, fileNumber, type, color}) => {
  return (
    <div className="box">
      <div className="icon_container" style={{background: `${color}`}}>
        <img src={icon} alt="icon" />
      </div>
      <div>
        {fileNumber > 0 ? (
          <p>
            {fileNumber} {type} files
          </p>
        ) : (
          <p>No {type} file</p>
        )}
        <NavLink className="path" to={path}>Go to view</NavLink>
      </div>
    </div>
  );
};
