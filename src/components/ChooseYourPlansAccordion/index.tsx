import { useState } from "react";

import arrowDownImage from "../../assets/images/chevron-upwhite.svg";

import "./styles.css";

interface Props {
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
}

const ChooseYourPlansAccordion = ({ selectedPlan, setSelectedPlan }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectSystem = (system: string) => {
    setSelectedPlan(system);
    setIsOpen(false);
  };

  return (
    <div className="card-section">
      <button className="button-card" onClick={() => setIsOpen(!isOpen)}>
        <div className="main-class">
          <div className="button-container">
            <span>{selectedPlan}</span>

            {isOpen && (
              <div className="software-dropdown shadow-select-dropdown">
                <button
                  className="software-drop-down-item"
                  onClick={() => handleSelectSystem("Software Only")}
                >
                  Software Only
                </button>

                <button
                  className="software-drop-down-item"
                  onClick={() => handleSelectSystem("Software ＆ Hardware")}
                >
                  Software ＆ Hardware
                </button>
              </div>
            )}

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
