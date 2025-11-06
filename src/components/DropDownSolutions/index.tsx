import React from "react";
import { Link } from "react-router-dom";

import { solutionsData } from "../../data/solutionsData";
import { DropDownProps } from "../../types";

import "./styles.css";

const DropDownSolutions: React.FC<DropDownProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-main-container">
      <div className="drop-down-container">
        {solutionsData.map((item) => (
          <Link
            key={item.id}
            to={item.link ?? "#"}
            className="dropdown-item"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-card-toggle">
              <img src={item.image} alt={item.name} className="dropdown-icon" />
            </div>
            <p className="item-name">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDownSolutions;
