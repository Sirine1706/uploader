/** @format */

import React from "react";
import { documentTypes } from "../../constant";

export const Documents = ({ totalSpace, usedSpace }) => {
  return (
    <div className="document_container">
      {documentTypes.map((item, index) => {
        const { icon, type, color } = item;
        const percentage = 45;
        return (
          <div className="document" key={`document-${index}`}>
            <div
              style={{ backgroundColor: `${color}` }}
              className="img-container">
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
                <span>{percentage}%</span> {usedSpace} of {totalSpace} Used
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
