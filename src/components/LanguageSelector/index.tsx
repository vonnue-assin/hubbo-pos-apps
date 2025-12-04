import React, { useState } from "react";

import EnglishLangaugesDropdown from "../LanguagesDropdown";

import ChevronDown from "../../assets/images/chevron-down.svg";
import { ReactComponent as GlobeBrownIcon } from "../../assets/svg/globeBrown.svg";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button className="button-class" onClick={toggleDropdown}>
        <div className="list-card-language">
          <p className="text-heading-plans">Language</p>
          <div className="english-button-menu">
            <div className="english-menu-click">
              <GlobeBrownIcon className="globe-icon" />
              <p className="english-menu">EN</p>
            </div>
            <span className="arrow-button">
              <img
                className={`chevron-down-arrow-english-event ${
                  isOpen ? "rotated" : ""
                }`}
                src={ChevronDown}
                alt="Chevron Down Icon"
              />
            </span>
          </div>
        </div>
      </button>

      <EnglishLangaugesDropdown isOpen={isOpen} />
    </>
  );
};

export default LanguageSelector;
