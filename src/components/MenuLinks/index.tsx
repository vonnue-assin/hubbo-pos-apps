import React from "react";
import { Link } from "react-router-dom";

import menuLinksData from "../../data/menuClick.json";
import LanguageSelector from "../LanguageSelector";

import vectorImage from "../../assets/images/vector-right.bc13d4ee.svg";

import "./styles.css";

type MenuLinksProps = {
  onOpenSolutions: () => void;
  onOpenHubbo: () => void;
};

const MenuLinks: React.FC<MenuLinksProps> = ({
  onOpenSolutions,
  onOpenHubbo,
}) => {
  const actionMap: Record<string, () => void> = {
    solutions: onOpenSolutions,
    hubbo: onOpenHubbo,
  };

  return (
    <div className="solutions-card-container">
      {menuLinksData.map((item, index) => {
        const isAction = item.type === "action";
        const isLink = item.type === "link";

        return (
          <button
            key={index}
            className="button-class"
            onClick={() => {
              if (isAction && item.action) {
                actionMap[item.action]();
              }
            }}
          >
            <div className={isLink ? "list-card-plans" : "list-cards"}>
              <p className={isLink ? "text-heading-plans" : "text-heading"}>
                {isLink && item.path ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </p>

              {isAction && (
                <img src={vectorImage} alt="vector" className="vectorImage" />
              )}
            </div>
          </button>
        );
      })}

      <div className="click-event">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default MenuLinks;
