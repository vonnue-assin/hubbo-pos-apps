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

const normalizeLabel = (value: string) => {
  if (value.includes("Silver")) return SILVER_BASIC;
  if (value.includes("Gold")) return GOLD_BASIC;
  if (value.includes("Platinum")) return PLATINUM_BASIC;
  return value;
};

const mapToKey = (value: string): PriceKey =>
  value.includes("Silver")
    ? "Silver"
    : value.includes("Gold")
    ? "Gold"
    : "Platinum";

export default function PlansFiltering({ selectedPlans }: PlansFilteringProps) {
  const plusKey = mapToKey(normalizeLabel(selectedPlans.plus));
  const proKey = mapToKey(normalizeLabel(selectedPlans.pro));
  const silverKey = mapToKey(normalizeLabel(selectedPlans.silver));

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener(RESIZE, resize);
    return () => window.removeEventListener(RESIZE, resize);
  }, []);

  const visiblePlans: PriceKey[] = isMobile
    ? [plusKey, silverKey]
    : [plusKey, proKey, silverKey];

  const getTitle = (plan: PriceKey) =>
    plan === "Silver"
      ? SILVER_BASIC
      : plan === "Gold"
      ? GOLD_BASIC
      : PLATINUM_BASIC;

  return (
    <div className="silver-gold-card">
      <div className="silver-gold-platinum">
        {visiblePlans.map((plan, i) => (
          <div
            key={plan + i}
            className={`plan-filtering-main-card ${
              plan === "Platinum" ? "plan-platinum" : ""
            }`}
          >
            {plan === "Platinum" && (
              <span className="best-value-text-plan best-value-card">
                BEST VALUE
              </span>
            )}

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
        ))}
      </div>

      <div className="pricing-main-card">
        <div className="pricings-container-main">
          <p className="pricing-text">Pricing</p>
        </div>

        <div className="price-renders-card">
          <div className="price-renders-card-one">
            {visiblePlans.map((plan, idx) => (
              <div
                key={`first-${idx}-${plan}`}
                className={`pricing-card-wrapper ${
                  plan === "Platinum" ? "platinum-bg" : ""
                }`}
              >
                <PlanComparisonPriceRender
                  plan={plan}
                  data={PLANS_DATA_FIRST_YEAR[plan]}
                />
              </div>
            ))}
          </div>

          <div className="price-renders-card-one">
            {visiblePlans.map((plan, idx) => (
              <div
                key={`second-${idx}-${plan}`}
                className={`pricing-card-wrapper ${
                  plan === "Platinum" ? "platinum-bg" : ""
                }`}
              >
                <PlanComparisonPriceRenderSecondYear
                  plan={plan}
                  data={PLANS_DATA_SECOND_YEAR[plan]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-main-card">
        <div className="features-card">
          <div className="pricings-container-main">
            <p className="pricing-text">Features</p>
          </div>
          <div>
            <div className="pricing-texted-cards">
              {visiblePlans.map((plan, idx) => (
                <div
                  key={`features-${idx}-${plan}`}
                  className={`features-wrapper ${
                    plan === "Platinum" ? "features-platinum-bg" : ""
                  }`}
                >
                  <Features data={FeaturesData[plan]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
