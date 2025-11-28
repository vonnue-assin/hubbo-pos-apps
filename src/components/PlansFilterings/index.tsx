import { useEffect, useState } from "react";

import {
  GOLD_BASIC,
  PLATINUM_BASIC,
  RESIZE,
  SILVER_BASIC,
} from "../../constants/constants";

import { PLANS_DATA_FIRST_YEAR } from "../../data/pricingDataOne";
import { PLANS_DATA_SECOND_YEAR } from "../../data/pricingDataSecondYear";

import PlanComparisonPriceRender from "../PlanComparisonPriceRender";
import PlanComparisonPriceRenderSecondYear from "../PlanComparisonPriceRenderSecondYear";
import Features from "../Features";

import "./styles.css";

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener(RESIZE, handleResize);
    return () => window.removeEventListener(RESIZE, handleResize);
  }, []);

  let planKeys: PlanKey[] = [
    mapBasicToPlanKey(normalized.plus),
    mapBasicToPlanKey(normalized.pro),
    mapBasicToPlanKey(normalized.silver),
  ];

  planKeys = Array.from(new Set(planKeys));

  const visiblePlans = isMobile ? planKeys.slice(0, 2) : planKeys.slice(0, 3);

  return (
    <div className="silver-gold-card">
      <div className="silver-gold-platinum">
        {visiblePlans.map((planKey, idx) => {
          const title =
            planKey === "Silver"
              ? SILVER_BASIC
              : planKey === "Gold"
              ? GOLD_BASIC
              : PLATINUM_BASIC;

          return (
            <div key={idx} className="plan-filtering-main-card">
              <span className="height"></span>
              <div className="goldBasics">
                <div className="title-row">
                  <h2 className="basic-text">{title}</h2>
                  <p className="only-text">Software only</p>
                </div>

                <div className="new-wrapper">
                  <span className="micro-text">
                    {planKey === "Silver"
                      ? "Small businesses"
                      : "Microbusinesses"}
                  </span>
                  <span className="best-value-text-plan">BEST VALUE</span>

                  <span className="started-button">Get Started</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pricing-main-card">
        <div className="pricings-container-main">
          <p className="pricing-text">Pricing</p>
        </div>

        <div className="price-renders-card">
          <div className="price-renders-card-one">
            {visiblePlans.map((planKey) => (
              <PlanComparisonPriceRender
                key={`first-${planKey}`}
                plan={planKey}
                data={PLANS_DATA_FIRST_YEAR[planKey]}
              />
            ))}
          </div>

          <div className="price-renders-card-two">
            {visiblePlans.map((planKey) => (
              <PlanComparisonPriceRenderSecondYear
                key={`second-${planKey}`}
                plan={planKey}
                data={PLANS_DATA_SECOND_YEAR[planKey]}
              />
            ))}
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
};

export default PlansFiltering;
