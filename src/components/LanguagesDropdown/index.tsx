import { EnglishData } from "../../data/languageData";
import { DropDownProps } from "../../types";

import "./styles.css";

const EnglishLangaugesDropdown: React.FC<DropDownProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-main-container-languages">
      <div className="drop-down-english">
        {EnglishData.map((item) => (
          <div key={item.id} className="dropdown-item-languages">
            <p className="item-name-english">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnglishLangaugesDropdown;
