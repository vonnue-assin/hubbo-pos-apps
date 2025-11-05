import { useEffect, useState } from "react";

import DropDownHubbo from "../DropDownHubbo";
import DropDownSolutions from "../DropDownSolutions";
import EnglishLangaugesDropdown from "../EnglishLanguagesDropdown";
import MenuClick from "../MenuClick";
import Solutions from "../Solutions";

import ChevronDown from "../../assets/images/chevron-down.svg";
import { ReactComponent as GlobeBrownIcon } from "../../assets/svg/globe-brown.svg";
import { ReactComponent as HubboposIconWhite } from "../../assets/svg/hubboposWhite.svg";
import { ReactComponent as HubboposIconYellow } from "../../assets/svg/hubboposlogo.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menuBrown.svg";

import "./styles.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "solutions" | "hubbo" | "language" | null
  >(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  useEffect(() => {
    const checkIsMobileView = () => setIsMobile(window.innerWidth <= 768);

    checkIsMobileView();
    window.addEventListener("resize", checkIsMobileView);

    return () => window.removeEventListener("resize", checkIsMobileView);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleDropdown = (dropdown: "solutions" | "hubbo" | "language") => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <div className={`header-main-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-sub-container">
          {isMobile && (
            <button
              className="header-menuIcon"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          )}

          <a className="hubbopos-card">
            <HubboposIconWhite className="hubboposWhite" />
            <HubboposIconYellow className="huboposYellow" />
          </a>

          {!isMobile && (
            <div className="solutions-card">
              <button
                className="solutions-price-card"
                onClick={() => toggleDropdown("solutions")}
              >
                <p className="solutions">Solutions</p>
                <span>
                  <img
                    src={ChevronDown}
                    alt="Chevron Down Icon"
                    className={`chevron-down-arrow ${
                      openDropdown === "solutions" ? "rotated" : ""
                    }`}
                  />
                </span>
              </button>
              
              <DropDownSolutions isOpen={openDropdown === "solutions"} />

              <p className="price-and-plans">Plans ＆ Pricing</p>
              <div className="why-hubbo-container">
                <button
                  className="button-con-hubbo"
                  onClick={() => toggleDropdown("hubbo")}
                >
                  <p className="why-hubbo">Why HUBBO</p>
                  <span>
                    <img
                      src={ChevronDown}
                      alt="Chevron Down Icon"
                      className={`chevron-down-arrow-hubbo ${
                        openDropdown === "hubbo" ? "rotated" : ""
                      }`}
                    />
                  </span>
                </button>
                <DropDownHubbo isOpen={openDropdown === "hubbo"} />
              </div>
              <p className="contact-us">Contact Us</p>
            </div>
          )}
        </div>

        <div className="Header-sub-components">
          <div className="header-sub">
            <div style={{ display: "block" }}>
              <button
                className="header-sub-english-button"
                onClick={() => toggleDropdown("language")}
              >
                <div className="header-english">

                  <GlobeBrownIcon className="globe-icon" />
                  <p className="english">EN</p>
                </div>
                <span className="arrow-button">
                  <img
                    src={ChevronDown}
                    alt="Chevron Down Icon"
                    className={`chevron-down-arrow-english ${
                      openDropdown === "language" ? "rotated" : ""
                    }`}
                  />
                </span>
              </button>

              <EnglishLangaugesDropdown isOpen={openDropdown === "language"} />
            </div>
            <p className="loginIn">Log In</p>
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className="menuLay">
          {showSolutions ? (
            <Solutions onClose={() => setShowSolutions(false)} />
          ) : (
            <MenuClick
              onClose={() => setIsMenuOpen(false)}
              onOpenSolutions={() => setShowSolutions(true)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
