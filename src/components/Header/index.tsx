import "./styles.css";

import ChevronDown from "../../assets/images/chevron-down.svg";
import { ReactComponent as GlobeBrownIcon } from "../../assets/svg/globe-brown.svg";
import { ReactComponent as HubboposIconWhite } from "../../assets/svg/hubboposWhite.svg";
import { ReactComponent as HubboposIconYellow } from "../../assets/svg/hubboposlogo.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menuBrown.svg";

const Header = () => {
  return (
    <div className="header-main-container">
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
            <button className="solutions-price-card">
              <p className="solutions">Solutions</p>
              <span>
                <img
                  src={ChevronDown}
                  alt="Chevron Down Icon"
                  className="chevron-down-arrow"
                />
              </span>
            </button>
            <p className="price-and-plans">Plans ＆ Pricing</p>
            <div className="why-hubbo-container">
              <button className="button-con-hubbo">
                <p className="why-hubbo">Why HUBBO</p>
                <span>
                  <img
                    src={ChevronDown}
                    alt="Chevron Down Icon"
                    className="chevron-down-arrow"
                  />
                </span>
              </button>
            </div>
            <p className="contact-us">Contact Us</p>
          </div>
        </div>

        <div className="Header-sub-components">
          <div className="header-sub">
            <div style={{ display: "block" }}>
              <button className="header-sub-english-button">
                <div className="header-english">
                  <GlobeBrownIcon className="globe-icon" />
                  <p className="english">EN</p>
                </div>
                <span className="arrow-button">
                  <img
                    src={ChevronDown}
                    alt="Chevron Down Icon"
                    className="chevron-down-arrow"
                  />
                </span>
              </button>
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
