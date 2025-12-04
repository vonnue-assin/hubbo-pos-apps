import { useState } from "react";
import ArrowDownImage from "../../../assets/images/chevron-down.svg";
import Included from "../WhatsIncludedDropdown";

const SilverBasicCard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="swiper-slide">
      <div className="swiper-text-card">
        <div className="border-text">
          <div className="w-full">
            <div className="solid-primary">
              <p className="silver-text">Silver Basic</p>
              <p className="money-text">
                <span className="rm-text-silver">RM</span>
                <span className="money-text-set">990</span>
              </p>
              <p className="year-plan">1 year plan</p>
            </div>
          </div>

          <div className={`silver-card-sub-card ${open ? "is-open" : ""}`}>
            <button className="button-include" onClick={() => setOpen(!open)}>
              <span className="include-text">What’s included :</span>
              <img
                src={ArrowDownImage}
                className={`ArrowDownImage ${open ? "rotated" : ""}`}
                alt="arrow"
              />
            </button>

            <div className={`included-content ${open ? "open" : ""}`}>
              <Included />
            </div>
          </div>

          <div className="request-free-demo-button-sub">
            <span className="free-demo-button-set">Request Free Demo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SilverBasicCard;
