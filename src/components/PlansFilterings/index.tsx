import { useEffect, useState } from "react";

import {
  GOLD,
  GOLD_BASIC,
  PLATINUM_BASIC,
  RESIZE,
  SILVER,
  SILVER_BASIC,
} from "../../constants/constants";
import { FeaturesData } from "../../data/featuresData";
import { PLANS_DATA } from "../../data/pricingDataOne";
import Features from "../FeaturesSectionForPriceComparison";
import PlanComparisonPriceCard from "../PlanComparisonPriceRender";
import PlanHeaderCard from "../PlanHeaderCard";
import VisiblePlansRenderer from "../VisiblePlansRender";

import "./styles.css";

type PlansFilteringProps = {
  selectedPlans: {
    plus: string;
    pro: string;
    silver: string;
  };
};

type PriceKey = "Silver" | "Gold" | "Platinum";

const normalizeLabel = (value: string) => {
  if (value.includes("Silver")) return SILVER_BASIC;
  if (value.includes("Gold")) return GOLD_BASIC;
  if (value.includes("Platinum")) return PLATINUM_BASIC;
  return value;
};

const mapToPriceKeys = (value: string): PriceKey =>
  value.includes(SILVER)
    ? "Silver"
    : value.includes(GOLD)
    ? "Gold"
    : "Platinum";

const PlansFiltering = ({ selectedPlans }: PlansFilteringProps) => {
  const plusKey = mapToPriceKeys(normalizeLabel(selectedPlans.plus));
  const proKey = mapToPriceKeys(normalizeLabel(selectedPlans.pro));
  const silverKey = mapToPriceKeys(normalizeLabel(selectedPlans.silver));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener(RESIZE, resize);
    return () => window.removeEventListener(RESIZE, resize);
  }, []);

  const visiblePlans: PriceKey[] = isMobile
    ? [plusKey, silverKey]
    : [plusKey, proKey, silverKey];

  return (
    <div className="silver-gold-card">
      <div className="silver-gold-platinum">
        <VisiblePlansRenderer
          plans={visiblePlans}
          render={(plan, i) => <PlanHeaderCard key={plan + i} plan={plan} />}
        />
      </div>

      <div className="pricing-main-card">
        <div className="pricings-container-main">
          <p className="pricing-text">Pricing</p>
        </div>

        {["first", "second"].map((type) => (
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
                    type={type as "first" | "second"}
                    plan={plan}
                    data={PLANS_DATA[plan]}
                  />
                </div>
              )}
            />
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default PlansFiltering;
