import { ComparisonData } from "../../data/ComparisonData";
import "./styles.css";

type BasicPlanProps = {
  onSelect: (value: string) => void;
};

const BasicPlan = ({ onSelect }: BasicPlanProps) => {
  return (
    <div>
      {ComparisonData.map((item, index) => (
        <ul className="shadow-select-dropdown" key={index}>
          <li className="dropdown-heading">{item.Heading}</li>

          {item.subContents.map((sub) => (
            <li
              key={`${item.Heading}-${sub.id}`}
              className={sub.heading ? "dropdown-heading" : "dropdown-item-set"}
              onClick={() => {
                if (sub.title) {
                  onSelect(sub.title);
                }
              }}
            >
              {sub.title || sub.heading}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default BasicPlan;
