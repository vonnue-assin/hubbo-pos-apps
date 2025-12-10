import { useEffect, useRef, useState } from "react";

import {
  GOLD_BASIC,
  PLATINUM_BASIC,
  SILVER_RM,
} from "../../constants/constants";
import planComparisonData from "../../data/planComparison.json";
import { PlanConfigurations } from "../../types";
import PlanSelector from "../PlanSelectorDropDown";
import PlansFiltering from "../PlansFilterings";

import "./styles.css";

const PlansType = planComparisonData as PlanConfigurations[];

const PlanComparison = () => {
  const [selectedPlans, setSelectedPlans] = useState({
    plus: SILVER_RM,
    pro: GOLD_BASIC,
    silver: PLATINUM_BASIC,
  });

  const [openDropdown, setOpenDropdown] = useState<null | string>(null);

  const handleSelectPlan = (planKey: "plus" | "pro" | "silver", value: any) => {
    setSelectedPlans((prev) => ({ ...prev, [planKey]: value }));
    setOpenDropdown(null);
  };

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="plan-container-main-card">
      <div className="plan-container-main">
        <div className="plan-container-main-set">
          <div className="flex-col-card">
            <p className="plan-text">Full plan Comparison</p>
            <p className="plan-content">
              Hardware cost is a one-time payment only. Price is exclusive of
              tax and setup fee.
            </p>
          </div>

          <div className="choose-a-plan-main-card" ref={dropDownRef}>
            <div className="items-plans-card">
              {PlansType.map((plan) => (
                <PlanSelector
                  key={plan.key}
                  label="Choose a plan"
                  selected={selectedPlans[plan.key]}
                  open={openDropdown === plan.key}
                  onToggle={() =>
                    setOpenDropdown(openDropdown === plan.key ? null : plan.key)
                  }
                  onSelect={(value) => handleSelectPlan(plan.key, value)}
                  onClose={() => setOpenDropdown(null)}
                  className={plan.className}
                />
              ))}
            </div>

            <PlansFiltering selectedPlans={selectedPlans} />

            <div className="button-padding-card">
              <span className="free-button-padding">Request Free Demo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
