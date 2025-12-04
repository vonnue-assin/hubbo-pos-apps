import React from "react";
import hubboposImage from "../../assets/images/hubbopos-logo-sidenav.8550feba.svg";
import CloseImage from "../../assets/images/close.cf72762d.svg";

import "./styles.css";

type MenuHeaderProps = {
  onClose: () => void;
};

const MenuHeader: React.FC<MenuHeaderProps> = ({ onClose }) => (
  <div className="hubbopos-card-menu">
    <span>
      <img src={hubboposImage} alt="HubboPOS" className="hubboposImageI" />
    </span>
    <button onClick={onClose} className="closeButton">
      <img src={CloseImage} alt="Close" className="CloseImage" />
    </button>
  </div>
);

export default MenuHeader;
