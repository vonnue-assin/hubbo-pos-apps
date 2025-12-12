import { Link } from "react-router-dom";

import { solutionsData } from "../../data/solutionsData";

import leftArrowIcon from "../../assets/images/chevron-left.813f13ce.svg";
import CloseIcon from "../../assets/images/close.cf72762d.svg";

import "./styles.css";

const SolutionsDropDown = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="solutions-header-main-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="solutions-main-container">
        <div className="solutions-sub-container">
          <div className="solutions-header-card">
            <div className="solutions-item">
              <div className="flex">
                <button className="button-classes" onClick={onClose}>
                  <img
                    src={leftArrowIcon}
                    alt="leftArrowIcon"
                    className="leftArrowIcon"
                  />
                  <p className="solu">Solutions</p>
                </button>
              </div>
              <button onClick={onClose} className="closeButton">
                <img src={CloseIcon} alt="CloseIcon" className="CloseIcon" />
              </button>
            </div>

            <div className="solutions-list-card">
              <div className="solutions-flex">
                {solutionsData.map((item) => (
                  <div className="columns-items" key={item.id}>
                    <div className="image-cloud">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <p className="sol-text">
                      {item.link ? (
                        <Link to={item.link}>{item.name}</Link>
                      ) : (
                        item.name
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropDown;
