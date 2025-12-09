import BasicPlanDropDown from "../BasicPlanDropdown";

import DownArrowImage from "../../assets/images/chevron-down.svg";

type PlanSelectorProps = {
  label: string;
  selected: string;
  open: boolean;
  onToggle: () => void;
  onSelect: (value: any) => void;
  className?: string;
};

const PlanSelectorDropDown = ({
  label,
  selected,
  open,
  onToggle,
  onSelect,
  className,
}: PlanSelectorProps) => {
  return (
    <div className={`items-card-button ${className || ""}`}>
      <button className="buttons-item-set" onClick={onToggle}>
        <div className="flex-card-items">
          <span className="choose-header">{label}</span>
          <h2 className="choose-text-header">{selected}</h2>
        </div>
        <img
          src={DownArrowImage}
          alt="down-arrow"
          className={`DownArrowImage ${open ? "rotate" : ""}`}
        />
      </button>

      {open && <BasicPlanDropDown onSelect={(val: string) => onSelect(val)} />}
    </div>
  );
};

export default PlanSelectorDropDown;
