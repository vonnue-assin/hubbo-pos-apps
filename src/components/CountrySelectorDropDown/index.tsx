import React, { useEffect, useRef } from "react";

import { MOUSEDOWN } from "../../constants/constants";
import { countrySelectorDropDown } from "../../data/countrySelectorDropDown";
import { DropDownProps } from "../../types";

import "./styles.css";

type DropDownFooterProps = DropDownProps & {
  onClose: () => void;
};

const DropDownFooter: React.FC<DropDownFooterProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener(MOUSEDOWN, handleClickOutside);
    }

    return () => {
      document.removeEventListener(MOUSEDOWN, handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="dropdown-main-footer" ref={dropdownRef}>
      <div className="drop-down-footer">
        {countrySelectorDropDown.map((item) => (
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
