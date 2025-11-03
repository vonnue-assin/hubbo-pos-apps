import React from "react";

import { footerMyData } from "../../data/FooterMydata";
import { DropDownProps } from "../../types";

import "./styles.css";

const DropDownFooter: React.FC<DropDownProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-main-footer">
      <div className="drop-down-footer">
        {footerMyData.map((item) => (
          <div key={item.id} className="dropdown-item">
            <div className="image-card-toggle-footer">
              <img
                src={item.image}
                alt={item.image}
                className="dropdown-icon-footer"
              />
            </div>
            <p className="item-name-footer">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownFooter;
