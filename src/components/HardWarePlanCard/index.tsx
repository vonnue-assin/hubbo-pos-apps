import IncludedHardware from "../IncludedHardware";

import ArrowDownImage from "../../assets/images/chevron-down.svg";
import roundTickImage from "../../assets/images/round-tick.38e908ce.svg";

import "./styles.css";

const HardWarePlanCard = ({
  plan,
  allIncludedOpen,
  setAllIncludedOpen,
  allAdditionalOpen,
  setAllAdditionalOpen,
}: any) => {
  return (
    <div
      className={`swiper-text-card ${plan.flag ? "best-value hardware" : ""}`}
    >
      {plan.flag && <p className="best-value-text">{plan.flag}</p>}

      <div className="border-text">
        <div className="w-full">
          <div className="solid-primary">
            <p className="silver-text">{plan.name}</p>
            <p className="money-text">
              <span className="rm-text-silvers">RM</span>
              <span className="money-text-set-hardware">{plan.price}</span>
            </p>

            <p className="year-plan">{plan.billing1}</p>
            <p className="year-plan">{plan.billing2}</p>
          </div>
        </div>

        <div className="silver-card-sub-card">
          <div className="vertical-set">
            <button
              className="button-additional"
              onClick={() => setAllAdditionalOpen(!allAdditionalOpen)}
            >
              <span
                className={`additional-features ${
                  allAdditionalOpen ? "open" : ""
                }`}
              >
                Additional features
              </span>
              <img
                src={ArrowDownImage}
                className={`ArrowDownImage ${
                  allAdditionalOpen ? "rotated" : ""
                }`}
                alt="arrow"
              />
            </button>

            <div
              className={`feature-card-main ${
                allAdditionalOpen ? "open" : "close"
              }`}
            >
              {plan.features.map((text: string, idx: number) => (
                <div className="feature-card" key={idx}>
                  <img
                    src={roundTickImage}
                    className="roundTickImage"
                    alt="tick"
                  />
                  <p className="platform-text">{text}</p>
                </div>
              ))}
            </div>

            <button
              className="button-include"
              onClick={() => setAllIncludedOpen(!allIncludedOpen)}
            >
              <span className="include-text">What’s included :</span>
              <img
                src={ArrowDownImage}
                className={`ArrowDownImage ${allIncludedOpen ? "rotated" : ""}`}
                alt="arrow"
              />
            </button>

            <div
              className={`included-content ${allIncludedOpen ? "open" : ""}`}
            >
              <IncludedHardware />
            </div>
          </div>
        </div>
        <div className="request-free-demo-button-sub">
          <span className="free-demo-button-set">Request Free Demo</span>
        </div>
      </div>
    </div>
  );
};

export default HardWarePlanCard;
