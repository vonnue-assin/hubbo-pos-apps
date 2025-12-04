import { useState } from "react";

import { SILVER_RM } from "../../constants/constants";
import BasicPlan from "../BasicPlanDropdown";
import PlansFiltering from "../PlansFilterings";

import DownArrowImage from "../../assets/images/chevron-down.svg";

import "./styles.css";

const PlanComparison = () => {
  const [selPlus, setSelPlus] = useState(SILVER_RM);
  const [selPro, setSelPro] = useState(SILVER_RM);
  const [selSilver, setSelSilver] = useState(SILVER_RM);

  const [plusOpen, setPlusOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);
  const [silverOpen, setSilverOpen] = useState(false);

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
            <div className="items-plans-card">
              <div className="items-card-button">
                <button
                  className="buttons-item-set"
                  onClick={() => setPlusOpen(!plusOpen)}
                >
                  <div className="flex-card-items">
                    <span className="choose-header">Choose a plan</span>
                    <h2 className="choose-text-header">{selPlus}</h2>
                  </div>
                  <img
                    src={DownArrowImage}
                    alt="down-arrow"
                    className={`DownArrowImage ${plusOpen ? "rotate" : ""}`}
                  />
                </button>

                {plusOpen && (
                  <BasicPlan
                    onSelect={(value) => {
                      setSelPlus(value);
                      setPlusOpen(false);
                    }}
                  />
                )}
              </div>

              <div className="items-card-button silverPro">
                <button
                  className="buttons-item-set"
                  onClick={() => setProOpen(!proOpen)}
                >
                  <div className="flex-card-items">
                    <span className="choose-header">Choose a plan</span>
                    <h2 className="choose-text-header">{selPro}</h2>
                  </div>
                  <img
                    src={DownArrowImage}
                    alt="down-arrow"
                    className={`DownArrowImage ${proOpen ? "rotate" : ""}`}
                  />
                </button>

                {proOpen && (
                  <BasicPlan
                    onSelect={(value) => {
                      setSelPro(value);
                      setProOpen(false);
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
                    <h2 className="choose-text-header">{selSilver}</h2>
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
                      setSelSilver(value);
                      setSilverOpen(false);
                    }}
                  />
                )}
              </div>
            </div>

            <PlansFiltering
              selectedPlans={{
                plus: selPlus,
                pro: selPro,
                silver: selSilver,
              }}
            />

            <div className="button-padding-card">
              <span className="free-button-padding">Request Free Demo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
