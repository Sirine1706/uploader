/** @format */

import React from "react";
import { bytesToSize } from "../../utilities/conversion";

export const DocumentCard = ({ totalSpace, usedSpace, color, type, icon }) => {
  const percentage = ((usedSpace * 100) / totalSpace).toFixed(0);
  return (
    <div className="document">
      <div style={{ backgroundColor: `${color}` }} className="img-container">
        <img src={icon} alt="document-icon" />
      </div>
      <p className="type"> {type} </p>
      <div>
        <div className="recipient">
          <div
            className="level"
            style={{
              backgroundColor: `${color}`,
              width: `${percentage}%`,
            }}></div>
        </div>
        <p>
          {percentage}%
          <span>
            {" "}
            {bytesToSize(usedSpace)} of {bytesToSize(totalSpace)} Used
          </span>
        </p>
      </div>
    </div>
  );
};
