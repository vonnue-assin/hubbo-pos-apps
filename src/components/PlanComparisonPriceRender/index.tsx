import { PLATINUM } from "../../constants/constants";

import "./styles.css";

type PlanPriceCardProps = {
  plan: string;
  data: {
    firstYear: {
      price: number;
      perDay: string;
    };
    secondYear: {
      price: number;
      perDay: string;
    };
  };
  type: "first" | "second";
};

const PlanComparisonPriceCard = ({ plan, data, type }: PlanPriceCardProps) => {
  const isPlatinum = plan === PLATINUM;

  if (type === "first") {
    return (
      <div className="annual-card-container">
        <div
          className={`annual-card first-year ${
            isPlatinum ? "platinum-card" : ""
          }`}
        >
          <div className="annual-content">
            <span className="rm-text-annual">RM</span>
            <h1 className="annual-price">
              {data.firstYear.price.toLocaleString()}
            </h1>
          </div>

          <span className="annaul-day">{data.firstYear.perDay}</span>
          <p className="annual-price-text">Annual Pricing (1st year)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="annual-card-container">
      <div className={`annual-card ${isPlatinum ? "platinum-card" : ""}`}>
        <div className="second-year-card">
          <div className="second-year-price-card">
            <span className="rm-text">RM</span>
            <h1 className="annaul-price-text-second">
              {data.secondYear.price.toLocaleString()}
            </h1>
          </div>

          <span className="annaul-day-second">{data.secondYear.perDay}</span>
          <p className="annual-price-text-second">2nd year onwards</p>
          <p className="excluded-text">(Excludes hardware cost)</p>
        </div>
      </div>
    </div>
  );
};

export default PlanComparisonPriceCard;
