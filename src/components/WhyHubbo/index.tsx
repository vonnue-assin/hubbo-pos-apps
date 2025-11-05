import { hubboData } from "../../data/hubboData";
import { DropDownProps } from "../../types";

import leftArrowIcon from "../../assets/images/chevron-left.813f13ce.svg";
import CloseIcon from "../../assets/images/close.cf72762d.svg";

import "./styles.css";

const WhyHubbo = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="solutions-header-main-container">
      <div className="solutions-main-container">
        <div className="solutions-header-card">
          <div className="hubbo-item">
            <div className="flex">
              <button className="button-classes-hubbo" onClick={onClose}>
                <img
                  src={leftArrowIcon}
                  alt="leftArrowIcon"
                  className="leftArrowIcon"
                />
                <p className="solu">Why HUBBO</p>
              </button>
            </div>
            <button onClick={onClose} className="closeButton">
              <img src={CloseIcon} alt="CloseIcon" className="CloseIcon" />
            </button>
          </div>
          <div className="click-event-hubbo">
            {hubboData.map((item) => (
              <div key={item.id} className="click-item-hubbo">
                <div className="image-card-toggle">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="dropdown-icon"
                  />
                </div>
                <p className="item-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHubbo;
