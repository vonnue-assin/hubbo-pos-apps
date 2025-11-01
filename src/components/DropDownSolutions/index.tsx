import React from "react";

import { solutionsData } from "../../data/solutionsData";
import { DropDownProps } from "../../types";

import "./styles.css";

const DropDownSolutions: React.FC<DropDownProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-main-container">
      <div className="drop-down-container">
        {solutionsData.map((item) => (
          <div key={item.id} className="dropdown-item">
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

export default DropDownSolutions;
