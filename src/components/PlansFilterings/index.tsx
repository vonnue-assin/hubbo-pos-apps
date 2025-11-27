import { useEffect, useState } from "react";

import {
  GOLD_BASIC,
  PLATINUM_BASIC,
  RESIZE,
  SILVER_BASIC,
} from "../../constants/constants";
import { PLANS_DATA } from "../../data/pricingData";

import "./styles.css";
import PlanComparisonPriceRender from "../PlanComparisonPriceRender";
import Features from "../Features";

type PlansFilteringProps = {
  selectedPlans: {
    plus: string;
    pro: string;
    silver: string;
  };
};

type PlanKey = "Silver" | "Gold" | "Platinum";

const normalizeBasic = (value: string): string => {
  if (value.includes("Silver")) return SILVER_BASIC;
  if (value.includes("Gold")) return GOLD_BASIC;
  if (value.includes("Platinum")) return PLATINUM_BASIC;
  return value;
};

const mapBasicToPlanKey = (value: string): PlanKey => {
  if (value.includes("Silver")) return "Silver";
  if (value.includes("Gold")) return "Gold";
  if (value.includes("Platinum")) return "Platinum";
  return "Silver";
};

const PlansFiltering = ({ selectedPlans }: PlansFilteringProps) => {
  const normalized = {
    plus: normalizeBasic(selectedPlans.plus),
    pro: normalizeBasic(selectedPlans.pro),
    silver: normalizeBasic(selectedPlans.silver),
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(
    mapBasicToPlanKey(normalized.plus)
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener(RESIZE, handleResize);
    return () => window.removeEventListener(RESIZE, handleResize);
  }, []);

  const standardPlans = [
    {
      title: normalized.plus,
      subText: "Software only",
      microText: "Microbusinesses",
      bestValue: normalized.plus === PLATINUM_BASIC,
    },
    {
      title: normalized.pro,
      subText: "Software only",
      microText: "Microbusinesses",
      bestValue: normalized.pro === PLATINUM_BASIC,
    },
    {
      title: normalized.silver,
      subText: "Software only",
      microText: "Small businesses",
      bestValue: normalized.silver === PLATINUM_BASIC,
    },
  ];

  const mobilePlans = isMobile ? standardPlans.slice(0, 2) : standardPlans;

  return (
    <div className="silver-gold-card">
      <div className="silver-gold-platinum">
        {mobilePlans.map((plan, idx) => (
          <div
            key={idx}
            className={`plan-filtering-main-card ${
              plan.bestValue ? "best-value-card" : ""
            }`}
          >
            {plan.bestValue && (
              <span className="best-value-text-plan">BEST VALUE</span>
            )}

            <span className="height"></span>

            <div className="goldBasics">
              <div className="title-row">
                <h2 className="basic-text">{plan.title}</h2>
                <p className="only-text">{plan.subText}</p>
              </div>

              <div className="new-wrapper">
                <span className="micro-text">{plan.microText}</span>
                <span
                  className="started-button"
                  onClick={() => setSelectedPlan(mapBasicToPlanKey(plan.title))}
                >
                  Get Started
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="pricings-container-main">
          <p className="pricing-text">Pricing</p>
        </div>
        <PlanComparisonPriceRender
          plan={selectedPlan}
          data={PLANS_DATA[selectedPlan]}
        />
      </div>
      <Features />
    </div>
  );
};

export default PlansFiltering;
