import { useState } from "react";

import PlanDropDown from "../PlanDropDown";

import arrowDownImage from "../../assets/images/chevron-upwhite.svg";

import "./styles.css";

type ChooseYourPlansAccordionProps = {
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
};

const ChooseYourPlansAccordion = ({
  selectedPlan,
  setSelectedPlan,
}: ChooseYourPlansAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectSystem = (plan: string) => {
    setSelectedPlan(plan);
    setIsOpen(false);
  };
  return (
    <div className="card-section">
      <button className="button-card" onClick={() => setIsOpen(!isOpen)}>
        <div className="main-class">
          <div className="button-container">
            <span>{selectedPlan}</span>

            {isOpen && <PlanDropDown onSelect={handleSelectSystem} />}

            <img
              src={arrowDownImage}
              alt="arrowDownImage"
              className={`arrowDownImage ${isOpen ? "rotated" : ""}`}
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ChooseYourPlansAccordion;
