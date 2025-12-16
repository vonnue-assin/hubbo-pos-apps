import {
  SILVER_BASIC,
  GOLD_BASIC,
  PLATINUM_BASIC,
} from "../../constants/constants";

type PriceKey = "Silver" | "Gold" | "Platinum";

const getTitle = (plan: PriceKey) =>
  plan === "Silver"
    ? SILVER_BASIC
    : plan === "Gold"
    ? GOLD_BASIC
    : PLATINUM_BASIC;

const PlanHeaderCard = ({ plan }: { plan: PriceKey }) => {
  return (
    <div
      className={`plan-filtering-main-card ${
        plan === "Platinum" ? "plan-platinum" : ""
      }`}
    >
      {plan === "Platinum" && (
        <span className="best-value-text-plan best-value-card">BEST VALUE</span>
      )}

      <span className="height"></span>

      <div className="goldBasics">
        <div className="title-row">
          <h2 className="basic-text">{getTitle(plan)}</h2>
          <p className="only-text">Software only</p>
        </div>

        <div className="new-wrapper">
          <span className="micro-text">
            {plan === "Silver" ? "Microbusinesses" : "Small businesses"}
          </span>

          <span
            className={`started-button ${
              plan === "Platinum" ? "get-started-platinum" : ""
            }`}
          >
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanHeaderCard;
