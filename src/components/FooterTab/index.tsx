import AppStoreExcel from "../../assets/images/app-store-xl.png";
import GooglePlayExcel from "../../assets/images/google-play-xl.png";
import hubboposImage from "../../assets/images/hubbopos-logo-yellow.db2085f8.svg";
import malasiaImage from "../../assets/images/malaysia-flag.ab941296.svg";
import ArrowDown from "../../assets/images/expand-more.7764b847.svg";
import faceBookIcon from "../../assets/images/facebook-icon (1).png";
import instagramIcon from "../../assets/images/instagram-icon (1).png";

import "./styles.css";

const FooterTab = () => {
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
                      <img src={AppStoreExcel} className="appStoreExcel" />
                    </span>
                    <span className="card">
                      <img src={GooglePlayExcel} className="appStoreExcel" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="footer-sub-contents">
                <div className="solution-card">
                  <div className="solution">Solution</div>
                  <div className="solution-lists">
                    <span className="list">Cloud POS</span>
                    <span className="list">Loyalty</span>
                    <span className="list">Contactless Ordering</span>
                    <span className="list">Integrations</span>
                    <span className="list">Reporting</span>
                    <span className="list">Number calling system</span>
                  </div>
                </div>
                <div className="solution-card">
                  <div className="solution">Plans ＆ Pricing</div>
                  <div className="solution-lists">
                    <span className="list">Software Only</span>
                    <span className="list">Software ＆ Hardware</span>
                  </div>
                </div>
                <div className="solution-card">
                  <div className="solution">Company</div>
                  <div className="solution-lists">
                    <span className="list">About Us</span>
                  </div>
                </div>
                <div className="solution-card">
                  <div className="solution">Support</div>
                  <div className="solution-lists">
                    <span className="list">Help Center</span>
                    <span className="list">Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hubboPos-icon">
              <div className="posImage">
                <div className="hubbopos-card-image">
                  <img src={hubboposImage} className="hubboposImage" />

                  <div className="america">
                    <button className="america-button">
                      <div className="my-content">
                        <img src={malasiaImage} className="malasiaImage" />
                        <p className="mine">MY</p>
                        <span className="arrow">
                          <img src={ArrowDown} className="arrow-down" />
                        </span>
                      </div>
                    </button>
                  </div>
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
              <div className="privacy-note">
                <span className="inline-block">&nbsp;</span>
                <span className="note">Privacy Notice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTab;
