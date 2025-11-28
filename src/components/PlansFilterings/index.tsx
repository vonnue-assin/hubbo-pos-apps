import { useEffect, useState } from "react";

import {
  GOLD_BASIC,
  PLATINUM_BASIC,
  RESIZE,
  SILVER_BASIC,
} from "../../constants/constants";

import { FeaturesData } from "../../data/featuresData";
import { PLANS_DATA_FIRST_YEAR } from "../../data/pricingDataOne";
import { PLANS_DATA_SECOND_YEAR } from "../../data/pricingDataSecondYear";
import Features from "../Features";
import PlanComparisonPriceRender from "../PlanComparisonPriceRender";
import PlanComparisonPriceRenderSecondYear from "../PlanComparisonPriceRenderSecondYear";

import "./styles.css";

type PlansFilteringProps = {
  selectedPlans: {
    plus: string;
    pro: string;
    silver: string;
  };
};

type PriceKey = "Silver" | "Gold" | "Platinum";

const normalizeBasic = (value: string): string => {
  if (value.includes("Silver")) return SILVER_BASIC;
  if (value.includes("Gold")) return GOLD_BASIC;
  if (value.includes("Platinum")) return PLATINUM_BASIC;
  return value;
};

const mapBasicToPlanKey = (value: string): PriceKey => {
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

  const selectedPlanKeys: PriceKey[] = [
    mapBasicToPlanKey(normalized.plus),
    mapBasicToPlanKey(normalized.pro),
    mapBasicToPlanKey(normalized.silver),
  ];

  const allPlans: PriceKey[] = ["Silver", "Gold", "Platinum"];

  let uniquePlans = Array.from(new Set(selectedPlanKeys));

  allPlans.forEach((p) => {
    if (!uniquePlans.includes(p)) uniquePlans.push(p);
  });

  const visiblePlans = isMobile
    ? uniquePlans.slice(0, 2)
    : uniquePlans.slice(0, 3);

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
              {planKey === "Platinum" && (
                <span className="best-value-text-plan best-value">
                  BEST VALUE
                </span>
              )}
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
            {visiblePlans.map((plan) => (
              <PlanComparisonPriceRender
                key={`first-${plan}`}
                plan={plan}
                data={PLANS_DATA_FIRST_YEAR[plan]}
              />
            ))}
          </div>

          <div className="price-renders-card-two">
            {visiblePlans.map((plan) => (
              <PlanComparisonPriceRenderSecondYear
                key={`second-${plan}`}
                plan={plan}
                data={PLANS_DATA_SECOND_YEAR[plan]}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="features-main-card">
        <div className="features-card">
          <div className="pricings-container-main">
            <p className="pricing-text">Features</p>
          </div>
          <div className="pricing-texted-cards">
            {visiblePlans.map((plan) => (
              <Features key={`features-${plan}`} data={FeaturesData[plan]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansFiltering;
