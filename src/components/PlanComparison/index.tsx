import { useState } from "react";

import BasicPlan from "../BasicPlan";
import PlansFiltering from "../PlansFilterings";

import DownArrowImage from "../../assets/images/chevron-down.svg";

import "./styles.css";
import Pricings from "../Pricings";

const PlanComparison = () => {
  const [silverPlusOpen, setSilverPlusOpen] = useState(false);
  const [silverProOpen, setSilverProOpen] = useState(false);
  const [silverOpen, setSilverOpen] = useState(false);

  const [selectedSilverPlus, setSelectedSilverPlus] = useState("Silver Plus");
  const [selectedSilverPro, setSelectedSilverPro] = useState("Silver Pro");
  const [selectedSilver, setSelectedSilver] = useState("Silver (RM 990)");

  return (
    <div className="plan-container-main-card">
      <div className="plan-container-main">
        <div className="plan-container-main-set">
          <div className="flex-col-card">
            <p className="plan-text">Full plan Comparison</p>
            <p className="plan-content">
              Hardware cost is a one-time payment only. Price is exclusive of
              tax and setup fee.
            </p>
          </div>

          <div className="choose-a-plan-main-card">
            <div className="choose-plan-sub">
              <div className="items-plans-card">
                <div className="items-card-button">
                  <button
                    className="buttons-item-set"
                    onClick={() => setSilverPlusOpen(!silverPlusOpen)}
                  >
                    <div className="flex-card-items">
                      <span className="choose-header">Choose a plan</span>
                      <h2 className="choose-text-header">
                        {selectedSilverPlus}
                      </h2>
                    </div>

                    <img
                      src={DownArrowImage}
                      alt="down-arrow"
                      className={`DownArrowImage ${
                        silverPlusOpen ? "rotate" : ""
                      }`}
                    />
                  </button>

                  {silverPlusOpen && (
                    <BasicPlan
                      onSelect={(value) => {
                        setSelectedSilverPlus(value);
                        setSilverPlusOpen(false);
                      }}
                    />
                  )}
                </div>

                <div className="items-card-button silverPro">
                  <button
                    className="buttons-item-set"
                    onClick={() => setSilverProOpen(!silverProOpen)}
                  >
                    <div className="flex-card-items">
                      <span className="choose-header">Choose a plan</span>
                      <h2 className="choose-text-header">
                        {selectedSilverPro}
                      </h2>
                    </div>

                    <img
                      src={DownArrowImage}
                      alt="down-arrow"
                      className={`DownArrowImage ${
                        silverProOpen ? "rotate" : ""
                      }`}
                    />
                  </button>

                  {silverProOpen && (
                    <BasicPlan
                      onSelect={(value) => {
                        setSelectedSilverPro(value);
                        setSilverProOpen(false);
                      }}
                    />
                  )}
                </div>

                <div className="items-card-button silver">
                  <button
                    className="buttons-item-set"
                    onClick={() => setSilverOpen(!silverOpen)}
                  >
                    <div className="flex-card-items">
                      <span className="choose-header">Choose a plan</span>
                      <h2 className="choose-text-header">{selectedSilver}</h2>
                    </div>

                    <img
                      src={DownArrowImage}
                      alt="down-arrow"
                      className={`DownArrowImage ${silverOpen ? "rotate" : ""}`}
                    />
                  </button>

                  {silverOpen && (
                    <BasicPlan
                      onSelect={(value) => {
                        setSelectedSilver(value);
                        setSilverOpen(false);
                      }}
                    />
                  )}
                </div>
              </div>

              <PlansFiltering selectedPlan={selectedSilver} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
