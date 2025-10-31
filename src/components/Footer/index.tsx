import ArrowDown from "../../assets/images/expand-more.7764b847.svg";
import HubboposImage from "../../assets/images/hubbopos-logo-yellow.db2085f8.svg";
import MalasiaImage from "../../assets/images/malaysia-flag.ab941296.svg";
import AppStore from "../../assets/images/app-store-sm (1).png";
import GooglePlay from "../../assets/images/google-play-sm.png";
import GooglePlayMd from "../../assets/images/google-play-md.png";
import AppStoreMd from "../../assets/images/app-store-md.png";
import faceBookIcon from "../../assets/images/facebook-icon (1).png";
import instagramIcon from "../../assets/images/instagram-icon (1).png";

import "./styles.css";
import FooterTab from "../FooterTab";

const Footer = () => {
  return (
    <div className="footer-main-section">
      <div className="section-wrapper-footer">
        <div className="section-wrapper-box">
          <div className="footer-card">
            <div className="footer-card-sub">
              <div className="footer-sub">
                <div className="solutions-bar">
                  <h1 className="solution-text">Solution</h1>
                  <img src={ArrowDown} className="" />
                </div>
              </div>
              <div className="footer-sub">
                <div className="solutions-bar">
                  <h1 className="solution-text">Plans ＆ Pricing</h1>
                  <img src={ArrowDown} className="" />
                </div>
              </div>
              <div className="footer-sub">
                <div className="solutions-bar">
                  <h1 className="solution-text">Company</h1>
                  <img src={ArrowDown} className="" />
                </div>
              </div>
              <div className="footer-sub">
                <div className="solutions-bar">
                  <h1 className="solution-text">Support</h1>
                  <img src={ArrowDown} className="arrowdown" />
                </div>
              </div>
            </div>
            <div className="hubbopos-icon">
              <div className="footer-hubbo">
                <div className="footers">
                  <div className="hubbo">
                    <img src={HubboposImage} className="HubboposImage" />
                  </div>
                  <button className="english">
                    <div className="english-card">
                      <img src={MalasiaImage} className="MalasiaImage" />
                    </div>
                    <h2 className="my-name">MY</h2>
                    <span className="arrow">
                      <img src={ArrowDown} className="arrow-down" />
                    </span>
                  </button>
                </div>
                <div className="social-media-sub">
                  <span className="facebook">
                    <img src={faceBookIcon} className="faceBookIcon" />
                  </span>
                  <span className="facebook">
                    <img src={instagramIcon} className="InstagramIcon" />
                  </span>
                </div>
              </div>
              <div className="app-store-card">
                <div className="app-store">
                  <span className="app-card">
                    <img src={AppStore} className="AppStore" />
                  </span>
                  <span className="app-card">
                    <img src={GooglePlay} className="AppStore" />
                  </span>
                </div>
              </div>
              <div className="section-2">
                <div className="app-store-card-two">
                  <div className="app-store">
                    <span className="app-card">
                      <img src={AppStoreMd} className="AppStore" />
                    </span>
                    <span className="app-card">
                      <img src={GooglePlayMd} className="AppStore" />
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
                    <img src={faceBookIcon} className="faceBookIcon" />
                  </span>
                  <span className="facebook">
                    <img src={instagramIcon} className="InstagramIcon" />
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
