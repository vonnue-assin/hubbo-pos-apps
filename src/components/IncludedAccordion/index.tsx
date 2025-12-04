import { ReactNode, useState } from "react";
import ArrowDown from "../../assets/images/chevron-down.svg";

type Props = {
  children: ReactNode;
};

const IncludedAccordion = ({ children }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`silver-card-sub-card ${open ? "is-open" : ""}`}>
      <button className="button-include" onClick={() => setOpen(!open)}>
        <span className="include-text">What’s included :</span>
        <img
          src={ArrowDown}
          className={`ArrowDownImage ${open ? "rotated" : ""}`}
          alt="arrow"
        />
      </button>

      <div className={`included-content ${open ? "open" : ""}`}>{children}</div>
    </div>
  );
};

export default IncludedAccordion;
