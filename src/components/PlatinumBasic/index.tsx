import { useState } from "react";

import Included from "../Included";

import arrowdown from "../../assets/images/chevron-down.svg";
import tickimage from "../../assets/images/round-tick.38e908ce.svg";

import "./styles.css";

const PlatinumBasic = () => {
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [isIncludedOpen, setIsIncludedOpen] = useState(false);

  return (
    <div className="price-text-card">
      <div className="price-card-main-card">
        <p className="best-value">BEST VALUE</p>
        <div className="platinum-basic-card-main">
          <div className="width">
            <div className="silver-basic-container">
              <p className="Platinum-Basic-text">Platinum Basic</p>
              <p className="text-money">
                <span className="rm-text">RM </span>
                <span className="money-text">2,600</span>
              </p>
              <p className="year-plan">2 year plan</p>
            </div>
          </div>

          <div className="features-main-container">
            <div className="features-container">
              <div className="features-sub-container">
                <button
                  className="button-feature"
                  onClick={() => setIsAdditionalOpen((prev) => !prev)}
                  aria-expanded={isAdditionalOpen}
                >
                  <span className="add-features">Additional features</span>
                  <img
                    src={arrowdown}
                    alt="arrowdown"
                    className={`arrowdown ${isAdditionalOpen ? "rotated" : ""}`}
                  />
                </button>
                <div
                  className={`additional-content ${
                    isAdditionalOpen ? "open" : ""
                  }`}
                >
                  <div className="delievary-platform">
                    <div className="integration">
                      <img src={tickimage} alt="tick" className="tickimage" />
                      <p className="delievery-text">
                        Delivery Platform Integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="button-feature"
                  onClick={() => setIsIncludedOpen((prev) => !prev)}
                  aria-expanded={isIncludedOpen}
                >
                  <span className="add-features">What’s included:</span>
                  <img
                    src={arrowdown}
                    alt="arrowdown"
                    className={`arrowdownadd ${
                      isIncludedOpen ? "rotated" : ""
                    }`}
                  />
                </button>
                <div
                  className={`included-content ${isIncludedOpen ? "open" : ""}`}
                >
                  <Included />
                </div>
              </div>
            </div>
          </div>

          <div className="request-free-demo-button-main">
            <span className="free-demo-button">Request Free Demo </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatinumBasic;
