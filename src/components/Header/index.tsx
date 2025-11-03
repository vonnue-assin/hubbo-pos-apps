import { useEffect, useState } from "react";

import DropDownSolutions from "../DropDownSolutions";

import ChevronDown from "../../assets/images/chevron-down.svg";
import { ReactComponent as GlobeBrownIcon } from "../../assets/svg/globe-brown.svg";
import { ReactComponent as HubboposIconWhite } from "../../assets/svg/hubboposWhite.svg";
import { ReactComponent as HubboposIconYellow } from "../../assets/svg/hubboposlogo.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menuBrown.svg";

import "./styles.css";
import DropDownHubbo from "../DropDownHubbo";
import EnglishLangaugesDropdown from "../EnglishLanguagesDropdown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenHubbo, setIsDropdownOpenHubbo] = useState(false);
  const [isDropdownOpenLanguage, setIsDropdownOpenLanguage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleDropdownHubbo = () => {
    setIsDropdownOpenHubbo((prev) => !prev);
  };

  const toggleDropdownHubboLanguage = () => {
    setIsDropdownOpenLanguage((prev) => !prev);
  };

  return (
    <div className={`header-main-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-sub-container">
          <button className="header-menuIcon">
            <MenuIcon />
          </button>
          <a className="hubbopos-card">
            <HubboposIconWhite className="hubboposWhite" />
            <HubboposIconYellow className="huboposYellow" />
          </a>
          <div className="solutions-card">
            <button className="solutions-price-card" onClick={toggleDropdown}>
              <p className="solutions">Solutions</p>
              <span>
                <img
                  src={ChevronDown}
                  alt="Chevron Down Icon"
                  className={`chevron-down-arrow ${
                    isDropdownOpen ? "rotated" : ""
                  }`}
                />
              </span>
            </button>
            <DropDownSolutions isOpen={isDropdownOpen} />
            <p className="price-and-plans">Plans ＆ Pricing</p>
            <div className="why-hubbo-container">
              <button
                className="button-con-hubbo"
                onClick={toggleDropdownHubbo}
              >
                <p className="why-hubbo">Why HUBBO</p>
                <span>
                  <img
                    src={ChevronDown}
                    alt="Chevron Down Icon"
                    className={`chevron-down-arrow ${
                      isDropdownOpenHubbo ? "rotated" : ""
                    }`}
                  />
                </span>
              </button>
              <DropDownHubbo isOpen={isDropdownOpenHubbo} />
            </div>
            <p className="contact-us">Contact Us</p>
          </div>
        </div>

        <div className="Header-sub-components">
          <div className="header-sub">
            <div style={{ display: "block" }}>
              <button
                className="header-sub-english-button"
                onClick={toggleDropdownHubboLanguage}
              >
                <div className="header-english">
                  <GlobeBrownIcon className="globe-icon" />
                  <p className="english">EN</p>
                </div>
                <span className="arrow-button">
                  <img
                    src={ChevronDown}
                    alt="Chevron Down Icon"
                    className={`chevron-down-arrow ${
                      isDropdownOpenLanguage ? "rotated" : ""
                    }`}
                  />
                </span>
              </button>
              <EnglishLangaugesDropdown isOpen={isDropdownOpenLanguage} />
            </div>
            <p className="loginIn">Log In</p>
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
