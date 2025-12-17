import { PLANS_DATA } from "../../data/pricingDataOne";
import PlanComparisonPriceCard from "../PlanComparisonPriceRender";
import VisiblePlansRenderer from "../VisiblePlansRender";

import "./styles.css";

type PriceKey = "Silver" | "Gold" | "Platinum";

type PricingSectionProps = {
  visiblePlans: PriceKey[];
};

const PricingSectionComparison = ({ visiblePlans }: PricingSectionProps) => {
  return (
    <div className="pricing-main-card">
      <div className="pricings-container-main">
        <p className="pricing-text">Pricing</p>
      </div>

      {(["first", "second"] as const).map((type) => (
        <div key={type} className={`price-renders-card ${type}-year-group`}>
          <VisiblePlansRenderer
            plans={visiblePlans}
            render={(plan, idx) => (
              <div
                key={`${type}-${idx}-${plan}`}
                className={`pricing-card-wrapper ${
                  plan === "Platinum" ? "platinum-bg" : ""
                }`}
              >
                <PlanComparisonPriceCard
                  type={type}
                  plan={plan}
                  data={PLANS_DATA[plan]}
                />
              </div>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default PricingSectionComparison;
