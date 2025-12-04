import chooseYourPlans from "../../data/chooseYourPlan.json";

import "./styles.css";

type PlanDropDownProps = {
  onSelect: (value: string) => void;
};

const PlanDropDown = ({ onSelect }: PlanDropDownProps) => {
  return (
    <div className="software-dropdown shadow-select-dropdown">
      {chooseYourPlans.map((plan) => (
        <button
          key={plan.value}
          className="software-drop-down-item"
          onClick={() => onSelect(plan.label)}
        >
          {plan.label}
        </button>
      ))}
    </div>
  );
};

export default PlanDropDown;
