import Included from "../WhatsIncludedDropdown";

import ArrowDownImage from "../../assets/images/chevron-down.svg";
import roundTickImage from "../../assets/images/round-tick.38e908ce.svg";

import "./styles.css";

type PlanCardProps = {
  plan: any;
  openAdditional: boolean;
  setOpenAdditional: (open: boolean) => void;
  openIncluded: boolean;
  setOpenIncluded: (open: boolean) => void;
};

const SoftwarePlanCard = ({
  plan,
  openAdditional,
  setOpenAdditional,
  openIncluded,
  setOpenIncluded,
}: PlanCardProps) => {
  return (
    <div className={`swiper-text-card ${plan.isPremium ? "best-value" : ""}`}>
      {plan.flag && <p className="best-value-text">{plan.flag}</p>}

      <div className="border-text">
        <div className="solid-primary">
          <p className="silver-text">{plan.name}</p>

          <p className="money-text">
            <span className="rm-text-silver">RM</span>
            <span className="money-text-set">{plan.price}</span>
          </p>

          <p className="year-plan">{plan.year}</p>
        </div>

        <div
          className={`silver-card-sub-card ${
            plan.isPremium ? "best-value-cards" : ""
          }`}
        >
          <div className="vertical-set">
            {plan.additionalFeatures.length > 0 && (
              <>
                <button
                  className="button-additional"
                  onClick={() => setOpenAdditional(!openAdditional)}
                >
                  <span
                    className={`additional-features ${
                      openAdditional ? "open" : ""
                    }`}
                  >
                    Additional features
                  </span>

                  <img
                    src={ArrowDownImage}
                    className={`ArrowDownImage ${
                      openAdditional ? "rotated" : ""
                    }`}
                    alt="arrow"
                  />
                </button>

                <div
                  className={`feature-card-main ${
                    openAdditional ? "open" : "close"
                  }`}
                >
                  {plan.additionalFeatures.map(
                    (feature: string, index: number) => (
                      <div className="feature-card" key={index}>
                        <img
                          src={roundTickImage}
                          className="roundTickImage"
                          alt="tick"
                        />
                        <p className="platform-text">{feature}</p>
                      </div>
                    )
                  )}
                </div>
              </>
            )}

            <button
              className="button-include"
              onClick={() => setOpenIncluded(!openIncluded)}
            >
              <span className="include-text">What’s included :</span>
              <img
                src={ArrowDownImage}
                className={`ArrowDownImage ${openIncluded ? "rotated" : ""}`}
                alt="arrow"
              />
            </button>

            <div className={`included-content ${openIncluded ? "open" : ""}`}>
              <Included />
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

export default SoftwarePlanCard;
