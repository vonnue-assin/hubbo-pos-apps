import { useNavigate } from "react-router-dom";

import leftArrowIcon from "../../assets/images/chevron-left.813f13ce.svg";
import CloseIcon from "../../assets/images/close.cf72762d.svg";
import CloudImage from "../../assets/images/cloud-pos (1).png";
import ContactlessOrderImage from "../../assets/images/header-contactless-ordering.png";
import IntegrationsImage from "../../assets/images/header-integrations.png";
import loyaltyImage from "../../assets/images/header-loyalty.png";
import NumberCallingSystem from "../../assets/images/header-number-calling-system.png";
import ReportingImage from "../../assets/images/header-reporting.png";

import "./styles.css";

const Solutions = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="solutions-header-main-container">
      <div className="solutions-main-container">
        <div className="solutions-sub-container">
          <div className="solutions-header-card">
            <div className="solutions-item">
              <div className="flex">
                <button className="button-classes" onClick={onClose}>
                  <img
                    src={leftArrowIcon}
                    alt="leftArrowIcon"
                    className="leftArrowIcon"
                  />
                  <p className="solu">Solutions</p>
                </button>
              </div>
              <button onClick={onClose} className="closeButton">
                <img src={CloseIcon} alt="CloseIcon" className="CloseIcon" />
              </button>
            </div>
            <div className="solutions-list-card">
              <div className="solutions-flex">
                <div className="columns-items">
                  <div className="image-cloud">
                    <img
                      src={CloudImage}
                      alt="CloudImage"
                      className="CloudImage"
                    />
                  </div>
                  <p className="sol-text">Cloud POS</p>
                </div>
                <div className="columns-items">
                  <div className="image-cloud">
                    <img
                      src={NumberCallingSystem}
                      alt="CloudImage"
                      className="numberCallingSystem"
                    />
                  </div>
                  <p className="sol-text">Number calling system</p>
                </div>
                <div className="columns-items">
                  <div className="image-cloud">
                    <img
                      src={ContactlessOrderImage}
                      alt="ContactlessOrderImage"
                      className="ContactlessOrderImage"
                    />
                  </div>
                  <p className="sol-text">Contactless ordering</p>
                </div>
                <div className="columns-items">
                  <div className="image-cloud">
                    <img
                      src={loyaltyImage}
                      alt="loyaltyImage"
                      className="loyaltyImage"
                    />
                  </div>
                  <p className="sol-text">Loyalty</p>
                </div>
                <div className="columns-items">
                  <div className="image-cloud">
                    <img
                      src={IntegrationsImage}
                      alt="IntegrationsImage"
                      className="IntegrationsImage"
                    />
                  </div>
                  <p className="sol-text">Integrations</p>
                </div>
                <div className="columns-items">
                  <div className="image-cloud">
                    <img
                      src={ReportingImage}
                      alt="ReportingImage"
                      className="ReportingImage"
                    />
                  </div>
                  <p className="sol-text">Reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Solutions;
