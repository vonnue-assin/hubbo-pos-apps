import { useState } from "react";
import { Link } from "react-router-dom";

import { footerData } from "../../data/footer";
import DropDownFooter from "../CountrySelectorDropDown";

import AppStoreExcel from "../../assets/images/app-store-xl.png";
import ArrowDown from "../../assets/images/expand-more.7764b847.svg";
import faceBookIcon from "../../assets/images/facebook-icon (1).png";
import GooglePlayExcel from "../../assets/images/google-play-xl.png";
import hubboposImage from "../../assets/images/hubbopos-logo-yellow.db2085f8.svg";
import instagramIcon from "../../assets/images/instagram-icon (1).png";
import malasiaImage from "../../assets/images/malaysia-flag.ab941296.svg";

import "./styles.css";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="footer-last-section-main">
      <div className="footer-last-section">
        <div className="footer-container">
          <div className="footer-main-container">
            <div className="main-card">
              <div className="need-help">
                <div className="need-help-card">
                  <p className="text-content">Need help? Reach us at</p>
                  <span className="text-link">
                    <p className="hello-link">hello.my@hubbopos.com</p>
                  </span>
                </div>
                <div className="app-store-container">
                  <div className="store-card">
                    <span className="card">
                      <img
                        src={AppStoreExcel}
                        alt="App Store"
                        className="appStoreExcel"
                      />
                    </span>
                    <span className="card">
                      <img
                        src={GooglePlayExcel}
                        alt="Google Play"
                        className="appStoreExcel"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="footer-sub-contents">
                {footerData.map((item) => (
                  <div key={item.id} className="solution-card">
                    <div className="solution">{item.Heading}</div>
                    <div className="solution-lists">
                      {item.features.map((feature, index) => (
                        <Link key={index} to={item.link} className="list">
                          {feature}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hubboPos-icon">
              <div className="posImage">
                <div className="hubbopos-card-image">
                  <img
                    src={hubboposImage}
                    alt="HubboPOS"
                    className="hubboposImage"
                  />

                  <div className="america">
                    <button className="america-button" onClick={toggleDropdown}>
                      <div className="my-content">
                        <img
                          src={malasiaImage}
                          alt="Malaysia Flag"
                          className="malasiaImage"
                        />
                        <p className="mine">MY</p>
                        <span className="arrow">
                          <img
                            src={ArrowDown}
                            alt="arrow"
                            className={`arrow-down ${
                              isDropdownOpen ? "rotate" : ""
                            }`}
                          />
                        </span>
                      </div>
                    </button>

                    <DropDownFooter isOpen={isDropdownOpen} />
                  </div>
                </div>

                <div className="social-media-sub-tab">
                  <span className="facebook">
                    <img
                      src={faceBookIcon}
                      alt="Facebook"
                      className="faceBookIcon"
                    />
                  </span>
                  <span className="facebook">
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="InstagramIcon"
                    />
                  </span>
                </div>
              </div>
              <div className="privacy-notes-sum">
                <span className="inline-block">&nbsp;</span>
                <span className="notes">Privacy Notice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
