import ArrowDown from "../../assets/images/expand-more.7764b847.svg";
import HubboposImage from "../../assets/images/hubbopos-logo-yellow.db2085f8.svg";
import MalasiaImage from "../../assets/images/malaysia-flag.ab941296.svg";

import "./styles.css";

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
                  <img src={ArrowDown} className="" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
