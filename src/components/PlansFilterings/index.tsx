import { useEffect, useState } from "react";

import {
  GOLD,
  GOLD_BASIC,
  PLATINUM_BASIC,
  RESIZE,
  SILVER,
  SILVER_BASIC,
} from "../../constants/constants";
import PlanHeaderCard from "../PlanHeaderCard";
import VisiblePlansRenderer from "../VisiblePlansRender";
import PricingSectionComparison from "../PricingSectionComparison";
import FeaturesSectionPlanAndPrice from "../FeatureSectionPlanAndPrice";

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

      <PricingSectionComparison visiblePlans={visiblePlans} />
      <FeaturesSectionPlanAndPrice visiblePlans={visiblePlans} />
    </div>
  );
};

export default PlansFiltering;
