import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AUTO,
  CLICK,
  HIDDEN,
  HUBBO,
  LANGUAGE,
  RESIZE,
  ROTATE,
  SCROLL,
  SCROLLED,
  SOLUTIONS,
} from "../../constants/constants";

import headerMenu from "../../data/header.json";
import { hubboData } from "../../data/hubboData";
import { solutionsData } from "../../data/solutionsData";
import Dropdown from "../DropDownSolutionsHubbo";
import EnglishLangaugesDropdown from "../LanguagesDropdown";
import MenuClick from "../MenuClickSection";
import SolutionsDropDown from "../SolutionsDropDown";
import WhyHubbo from "../WhyHubboMenuClickSection";

import ChevronDown from "../../assets/images/chevron-down.svg";
import { ReactComponent as GlobeBrownIcon } from "../../assets/svg/globeBrown.svg";
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
  const [showHubbo, setShowHubbo] = useState(false);

  useEffect(() => {
    const checkIsMobileView = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobileView();
    window.addEventListener(RESIZE, checkIsMobileView);
    return () => window.removeEventListener(RESIZE, checkIsMobileView);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener(SCROLL, handleScroll);
    return () => window.removeEventListener(SCROLL, handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? HIDDEN : AUTO;
    return () => {
      document.body.style.overflow = AUTO;
    };
  }, [isMenuOpen]);

  const toggleDropdown = (dropdown: "solutions" | "hubbo" | "language") => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropDownElements = document.querySelectorAll(
        ".solutions-card, .header-sub-english-button, .why-hubbo-container"
      );

      let clickedInside = false;
      dropDownElements.forEach((element) => {
        if (element.contains(event.target as Node)) {
          clickedInside = true;
        }
      });

      if (!clickedInside) setOpenDropdown(null);
    };

    document.addEventListener(CLICK, handleClickOutside);
    return () => document.removeEventListener(CLICK, handleClickOutside);
  }, []);

  return (
    <div className={`header-main-container ${isScrolled ? SCROLLED : ""}`}>
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

          <span className="hubbopos-card">
            <HubboposIconWhite className="hubboposWhite" />
            <HubboposIconYellow className="huboposYellow" />
          </span>

          {!isMobile && (
            <div className="solutions-card">
              <button
                className="solutions-price-card"
                onClick={() => toggleDropdown("solutions")}
              >
                <p className="solutions">{headerMenu.mainMenu.solutions}</p>
                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className={`chevron-down-arrow ${
                    openDropdown === "solutions" ? ROTATE : ""
                  }`}
                />
              </button>

              <Dropdown
                isOpen={openDropdown === SOLUTIONS}
                items={solutionsData}
                containerClass="drop-down-container"
                itemClass="dropdown-item"
              />

              <p
                className="price-and-plans"
                onClick={() => navigate("/mypricing")}
              >
                {headerMenu.mainMenu.plansPricing}
              </p>

              <div className="why-hubbo-container">
                <button
                  className="button-con-hubbo"
                  onClick={() => toggleDropdown("hubbo")}
                >
                  <p className="why-hubbo">{headerMenu.mainMenu.hubbo}</p>
                  <img
                    src={ChevronDown}
                    alt="Chevron Down"
                    className={`chevron-down-arrow-hubbo ${
                      openDropdown === "hubbo" ? ROTATE : ""
                    }`}
                  />
                </button>

                <Dropdown
                  isOpen={openDropdown === HUBBO}
                  items={hubboData}
                  containerClass="drop-down-hubbo"
                  itemClass="dropdown-item-hubbo"
                />
              </div>

              <p className="contact-us" onClick={() => navigate("/contact")}>
                {headerMenu.mainMenu.contact}
              </p>
            </div>
          )}
        </div>

        <div className="Header-sub-components">
          <div className="header-sub">
            <div>
              <button
                className="header-sub-english-button"
                onClick={() => toggleDropdown("language")}
              >
                <div className="header-english">
                  <GlobeBrownIcon className="globe-icon" />
                  <p className="english">EN</p>
                </div>

                <img
                  src={ChevronDown}
                  alt="Chevron Down"
                  className={`chevron-down-arrow-english ${
                    openDropdown === "language" ? ROTATE : ""
                  }`}
                />
              </button>

              <EnglishLangaugesDropdown isOpen={openDropdown === LANGUAGE} />
            </div>

            <p className="loginIn">Log In</p>
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </div>

      {isMobile && (
        <>
          {isMenuOpen && (
            <div
              className="menuLay"
              onClick={() => {
                setIsMenuOpen(false);
                setShowSolutions(false);
                setShowHubbo(false);
              }}
            ></div>
          )}

          <div onClick={(e) => e.stopPropagation()}>
            <MenuClick
              isOpen={isMenuOpen && !showSolutions && !showHubbo}
              onClose={() => setIsMenuOpen(false)}
              onOpenSolutions={() => {
                setShowHubbo(false);
                setShowSolutions(true);
              }}
              onOpenHubbo={() => {
                setShowSolutions(false);
                setShowHubbo(true);
              }}
            />
          </div>

          {showSolutions && (
            <SolutionsDropDown onClose={() => setShowSolutions(false)} />
          )}

          {showHubbo && <WhyHubbo onClose={() => setShowHubbo(false)} />}
        </>
      )}
    </div>
  );
};

export default Header;
