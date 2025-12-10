import { useEffect, useRef } from "react";

import { MOUSEDOWN } from "../../constants/constants";
import BasicPlanDropDown from "../BasicPlanDropdown";

import DownArrowImage from "../../assets/images/chevron-down.svg";

type PlanSelectorProps = {
  label: string;
  selected: string;
  open: boolean;
  onToggle: () => void;
  onSelect: (value: any) => void;
  className?: string;
  onClose: () => void;
};

const PlanSelectorDropDown = ({
  label,
  selected,
  open,
  onToggle,
  onSelect,
  className,
  onClose,
}: PlanSelectorProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener(MOUSEDOWN, handleClickOutside);
    return () => document.removeEventListener(MOUSEDOWN, handleClickOutside);
  }, [open, onClose]);

  return (
    <div ref={dropdownRef} className={`items-card-button ${className || ""}`}>
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

      {open && (
        <BasicPlanDropDown
          onSelect={(val: string) => {
            onSelect(val);
            onClose();
          }}
        />
      )}
    </div>
  );
};

export default PlanSelectorDropDown;
