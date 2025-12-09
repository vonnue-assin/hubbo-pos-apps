import { useState } from "react";

import ChooseYourPlansAccordion from "../ChooseYourPlansAccordion";
import ChooseYourPlansTab from "../ChooseYourPlanTab";
import HardWarePlanSlider from "../HardWarePlanSlider";
import PlanSlider from "../PlanSlider";

import "./styles.css";

const ChooseYourPlansMain = () => {
  const [selectedPlan, setSelectedPlan] = useState("Software Only");

  return (
    <div className="section-wrap">
      <div className="sub-container">
        <h3 className="choose-ypur-plans-text">Choose your plan</h3>

        <div className="Chooseyour-plans-container">
          <div className="desktop-tabs">
            <ChooseYourPlansTab
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          </div>

          <div className="mobile-accordion">
            <ChooseYourPlansAccordion
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          </div>

          <div className="price-cards">
            <p className="price-text">
              {selectedPlan === "Software Only"
                ? "Price is exclusive of set up fees and SST."
                : "Hardware cost is a one-time payment only. Price is exclusive of tax and setup fee."}
            </p>

            {selectedPlan === "Software Only" && (
              <div className="silverBasic software">
                <PlanSlider />
              </div>
            )}

            {selectedPlan === "Software ＆ Hardware" && <HardWarePlanSlider />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlansMain;
