import React from "react";
import { Link } from "react-router-dom";

import { DropDownProps } from "../../types";
import "./styles.css";

export interface DropdownItem {
  id: number;
  name: string;
  image: string;
  link?: string;
}

interface UnifiedDropdownProps extends DropDownProps {
  items: DropdownItem[];
  containerClass?: string;
  itemClass?: string;
}

const Dropdown: React.FC<UnifiedDropdownProps> = ({
  isOpen,
  items,
  containerClass = "drop-down-container",
  itemClass = "dropdown-item",
}) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-main-container">
      <div className={containerClass}>
        {items.map((item) => {
          const Content = (
            <>
              <div className="image-card-toggle">
                <img
                  src={item.image}
                  alt={item.name}
                  className="dropdown-icon"
                />
              </div>
              <p className="item-name">{item.name}</p>
            </>
          );

          return item.link ? (
            <Link
              key={item.id}
              to={item.link}
              className={itemClass}
              onClick={(e) => e.stopPropagation()}
            >
              {Content}
            </Link>
          ) : (
            <div
              key={item.id}
              className={itemClass}
              onClick={(e) => e.stopPropagation()}
            >
              {Content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
