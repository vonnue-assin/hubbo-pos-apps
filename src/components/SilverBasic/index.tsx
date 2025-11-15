import { useState } from "react";

import Included from "../Included";

import arrowdown from "../../assets/images/chevron-down.svg";

import "./styles.css";

const SilverBasic = () => {
  const [isIncludedOpen, setIsIncludedOpen] = useState(false);

  return (
    <div className="silver-main-container">
      <div className="silver-sub-container">
        <div className="width">
          <div className="silver-basic-container">
            <p className="Platinum-Basic-text">Silver Basic</p>
            <p className="text-money">
              <span className="rm-text">RM </span>
              <span className="money-text">990</span>
            </p>
            <p className="year-plan">1 year plan</p>
          </div>
        </div>

        <div className="silver-button-card">
          <button
            className="button-feature"
            onClick={() => setIsIncludedOpen((prev) => !prev)}
            aria-expanded={isIncludedOpen}
          >
            <span className="add-features">What’s included :</span>
            <img
              src={arrowdown}
              alt="arrowdown"
              className={`arrowdownadd ${isIncludedOpen ? "rotated" : ""}`}
            />
          </button>
          <div className={`included-content ${isIncludedOpen ? "open" : ""}`}>
            <Included />
          </div>
        </div>

        <div className="request-free-demo-button">
          <span className="free-demo-button">Request Free Demo</span>
        </div>
      </div>
    </div>
  );
};

export default SilverBasic;
