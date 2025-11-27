import { useState } from "react";

import { ROTATE } from "../../constants/constants";
import { footerData } from "../../data/footer";
import DropDownFooter from "../DropDownFooter";
import FooterTab from "../FooterTab";

import AppStoreMd from "../../assets/images/app-store-md.png";
import AppStore from "../../assets/images/app-store-sm (1).png";
import ArrowDown from "../../assets/images/expand-more.7764b847.svg";
import faceBookIcon from "../../assets/images/facebook-icon (1).png";
import GooglePlayMd from "../../assets/images/google-play-md.png";
import GooglePlay from "../../assets/images/google-play-sm.png";
import HubboposImage from "../../assets/images/hubbopos-logo-yellow.db2085f8.svg";
import instagramIcon from "../../assets/images/instagram-icon (1).png";
import MalasiaImage from "../../assets/images/malaysia-flag.ab941296.svg";

import "./styles.css";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="footer-main-section">
      <div className="section-wrapper-footer">
        <div className="section-wrapper-box">
          <div className="footer-card">
            <div className="footer-card-sub">
              {footerData.map((item, index) => (
                <div className="footer-sub" key={item.id}>
                  <div
                    className="solutions-bar"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="solutions-bar-footer">
                      <h1 className="solution-text">{item.Heading}</h1>
                      <img
                        src={ArrowDown}
                        className={`arrowdown ${
                          openIndex.includes(index) ? ROTATE : ""
                        }`}
                        alt="toggle"
                      />
                    </div>
                  </div>

                  {openIndex.includes(index) && (
                    <ul className="accordion-content">
                      {item.features.map((feature, i) => (
                        <li key={i} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="hubbopos-icon">
              <div className="footer-hubbo">
                <div className="footers">
                  <div className="hubbo">
                    <img
                      src={HubboposImage}
                      alt="arrow"
                      className="HubboposImage"
                    />
                  </div>

                  <div className="language-dropdown-wrapper">
                    <button className="english" onClick={toggleDropdown}>
                      <div className="english-card">
                        <img
                          src={MalasiaImage}
                          alt="arrow"
                          className="MalasiaImage"
                        />
                      </div>
                      <h2 className="my-name">MY</h2>
                      <span className="arrow">
                        <img
                          src={ArrowDown}
                          alt="arrow"
                          className={`arrow-down ${
                            isDropdownOpen ? ROTATE : ""
                          }`}
                        />
                      </span>
                    </button>

                    <DropDownFooter isOpen={isDropdownOpen} />
                  </div>
                </div>
                <div className="social-media-sub">
                  <span className="facebook">
                    <img
                      src={faceBookIcon}
                      alt="arrow"
                      className="faceBookIcon"
                    />
                  </span>
                  <span className="facebook">
                    <img
                      src={instagramIcon}
                      alt="arrow"
                      className="InstagramIcon"
                    />
                  </span>
                </div>
              </div>

              <div className="app-store-card">
                <div className="app-store">
                  <span className="app-card">
                    <img src={AppStore} className="AppStore" alt="arrow" />
                  </span>
                  <span className="app-card">
                    <img src={GooglePlay} className="AppStore" alt="arrow" />
                  </span>
                </div>
              </div>
              <div className="section-2">
                <div className="app-store-card-two">
                  <div className="app-store">
                    <span className="app-card">
                      <img src={AppStoreMd} className="AppStore" alt="arrow" />
                    </span>
                    <span className="app-card">
                      <img
                        src={GooglePlayMd}
                        className="AppStore"
                        alt="arrow"
                      />
                    </span>
                  </div>
                </div>
                <div className="text-footer-enquiry">
                  <p className="text-content">Need help? Reach us at</p>
                  <span className="text-link">
                    <p className="hello-link">hello.my@hubbopos.com</p>
                  </span>
                </div>
              </div>

              <div className="block">
                <div className="social-media-apps">
                  <span className="facebook">
                    <img
                      src={faceBookIcon}
                      className="faceBookIcon"
                      alt="arrow"
                    />
                  </span>
                  <span className="facebook">
                    <img
                      src={instagramIcon}
                      alt="arrow"
                      className="InstagramIcon"
                    />
                  </span>
                </div>
              </div>

              <div className="privacy-note">
                <span className="inline-block">&nbsp;</span>
                <span className="note">Privacy Notice</span>
              </div>
            </div>
          </div>
        </div>

        <FooterTab />
      </div>
    </div>
  );
};

export default Footer;
