import Button from "../Button";
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
  const handleSelectSystem = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="card-section">
      <Button
        className="button-card"
        dropdown={<PlanDropDown onSelect={handleSelectSystem} />}
      >
        {(isOpen) => (
          <div className="main-class">
            <div className="button-container">
              <span>{selectedPlan}</span>
              <img
                src={arrowDownImage}
                alt="arrowDownImage"
                className={`arrowDownImage ${isOpen ? "rotated" : ""}`}
              />
            </div>
          </div>
        )}
      </Button>
    </div>
  );
};

export default ChooseYourPlansAccordion;
