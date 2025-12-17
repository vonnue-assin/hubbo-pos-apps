import { FeaturesData } from "../../data/featuresData";
import Features from "../FeaturesSectionForPriceComparison";
import VisiblePlansRenderer from "../VisiblePlansRender";

type PriceKey = "Silver" | "Gold" | "Platinum";

type FeaturesSectionProps = {
  visiblePlans: PriceKey[];
};

const FeaturesSectionPlanAndPrice = ({
  visiblePlans,
}: FeaturesSectionProps) => {
  return (
    <div className="features-main-card">
      <div className="features-card">
        <div className="pricings-container-main">
          <p className="pricing-text">Features</p>
        </div>

        <div className="pricing-texted-cards">
          <VisiblePlansRenderer
            plans={visiblePlans}
            render={(plan, idx) => (
              <div
                key={`features-${idx}-${plan}`}
                className={`features-wrapper ${
                  plan === "Platinum" ? "features-platinum-bg" : ""
                }`}
              >
                <Features data={FeaturesData[plan]} />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionPlanAndPrice;
