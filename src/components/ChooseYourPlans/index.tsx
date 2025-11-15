import { useState } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";

import ChooseYourPlansAccordion from "../ChooseYourPlansAccordion";
import ChooseYourPlansTab from "../ChooseYourPlanTab";

import "./styles.css";

const ChooseYourPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Software Only");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="section-wrap">
      <div className="sub-container">
        <h3 className="choose-ypur-plans-text">Choose your plan</h3>

        <div className="Chooseyour-plans-container">
          {isDesktop ? (
            <ChooseYourPlansTab
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          ) : (
            <ChooseYourPlansAccordion
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          )}

          <div className="software-only">
            {selectedPlan === "Software Only" ? (
              <p className="price-text">
                Price is exclusive of set up fees and SST.
              </p>
            ) : (
              <p className="price-text">
                Hardware cost is a one-time payment only. Price is exclusive of
                tax and setup fee.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPlans;
