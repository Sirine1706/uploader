/** @format */

import React from "react";
import { documentTypes } from "../../constant";

export const DocumentCard = ({ totalSpace, usedSpace, fileList, color, type, icon }) => {

        const percentage = 45;
        return (
          <div className="document" >
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
};
