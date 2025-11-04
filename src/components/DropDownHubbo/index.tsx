import React from "react";

import { hubboData } from "../../data/hubboData";
import { DropDownProps } from "../../types";

import "./styles.css";

const DropDownHubbo: React.FC<DropDownProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-main-container">
      <div className="drop-down-hubbo">
        {hubboData.map((item) => (
          <div key={item.id} className="dropdown-item-hubbo">
            <div className="image-card-toggle">
              <img
                src={item.image}
                alt={item.image}
                className="dropdown-icon"
              />
            </div>
            <p className="item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDownHubbo;
