import { useState } from "react";
import { Link } from "react-router-dom";

import EnglishLangaugesDropdown from "../LanguagesDropdown";

import ChevronDown from "../../assets/images/chevron-down.svg";
import CloseImage from "../../assets/images/close.cf72762d.svg";
import hubboposImage from "../../assets/images/hubbopos-logo-sidenav.8550feba.svg";
import vectorImage from "../../assets/images/vector-right.bc13d4ee.svg";
import { ReactComponent as GlobeBrownIcon } from "../../assets/svg/globe-brown.svg";

import "./styles.css";

type MenuClickProps = {
  onClose: () => void;
  onOpenSolutions: () => void;
  onOpenHubbo: () => void;
};

const MenuClick: React.FC<MenuClickProps> = ({
  onClose,
  onOpenSolutions,
  onOpenHubbo,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropdown = () => setShowDropDown((prev) => !prev);

  return (
    <div className="menuClick-main-container">
      <div className="menuclick-sub-container">
        <div className="menuclick-relative">
          <div className="menuclick-width">
            <div className="menuclick-height">
              <div className="hubbopos-card-menu">
                <span style={{ marginTop: "1px" }}>
                  <img
                    src={hubboposImage}
                    alt="HubboPOS"
                    className="hubboposImageI"
                  />
                </span>
                <button onClick={onClose} className="closeButton">
                  <img src={CloseImage} alt="Close" className="CloseImage" />
                </button>
              </div>

              <div className="solutions-menuclick">
                <div className="solutions-card-container">
                  <button className="button-class" onClick={onOpenSolutions}>
                    <div className="list-cards">
                      <p className="text-heading">Solutions</p>
                      <img
                        src={vectorImage}
                        alt="vectorImage"
                        className="vectorImage"
                      />
                    </div>
                  </button>

                  <button className="button-class" onClick={onOpenHubbo}>
                    <div className="list-card">
                      <p className="text-heading">Why HUBBO</p>
                      <img
                        src={vectorImage}
                        alt="vectorImage"
                        className="vectorImage"
                      />
                    </div>
                  </button>

                  <button className="button-class">
                    <div className="list-card-plans">
                      <p className="text-heading-plans">
                        {" "}
                        <Link to="/mypricing">Plans ＆ Pricing</Link>
                      </p>
                    </div>
                  </button>

                  <button className="button-class">
                    <div className="list-card-plans">
                      <p className="text-heading-plans">
                        <Link to="/contact">Contact Us</Link>
                      </p>
                    </div>
                  </button>

                  <button className="button-class" onClick={toggleDropdown}>
                    <div className="list-card-language">
                      <p className="text-heading-plans">Language</p>
                      <button className="english-button-menu">
                        <div className="english-menu-click">
                          <GlobeBrownIcon className="globe-icon" />
                          <p className="english-menu">EN</p>
                        </div>
                        <span className="arrow-button">
                          <img
                            className={`chevron-down-arrow-english-event ${
                              showDropDown ? "rotated" : ""
                            }`}
                            src={ChevronDown}
                            alt="Chevron Down Icon"
                          />
                        </span>
                      </button>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="click-event">
              <EnglishLangaugesDropdown isOpen={showDropDown} />
            </div>
          </div>

          <div className="buttons-containers">
            <button className="get-started-buttons">Get Started</button>
            <button className="free-demo-button-menu">Request Free Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuClick;
