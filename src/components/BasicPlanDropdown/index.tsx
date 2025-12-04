import React from "react";

import comparisonData from "../../data/comparisonData.json";

import "./styles.css";

type BasicPlanProps = {
  onSelect: (value: string) => void;
};

const BasicPlan: React.FC<BasicPlanProps> = ({ onSelect }) => {
  return (
    <div className="shadow-select-dropdown">
      {comparisonData.map((section, index) => (
        <React.Fragment key={index}>
          <li className="dropdown-heading">{section.heading}</li>
          {section.items.map((item, i) => (
            <li
              key={`${section.heading}-${i}`}
              className="dropdown-item-set"
              onClick={() => onSelect(item.title)}
            >
              {item.title}
            </li>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BasicPlan;
