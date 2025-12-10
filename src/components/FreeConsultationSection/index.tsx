import React from "react";

import freeConsultImageTwo from "../../assets/images/pricing-cta-large.png";
import freeConsultImage from "../../assets/images/pricing-cta-small.png";

import "./styles.css";

type FreeConsultaionProps = {
  wrapperClass?: string;
  innerClass?: string;
};

const FreeConsultaion: React.FC<FreeConsultaionProps> = ({
  wrapperClass = "",
  innerClass = "",
}) => {
  return (
    <div className={`free-consultaion-main-container ${wrapperClass}`}>
      <div className={`free-consultaion-main ${innerClass}`}>
        <div className="background-brand-free">
          <div className="speak-card">
            <p className="speak-text">Speak to us for A; free consultation</p>
            <p className="need-text">
              Need help deciding? Get help from our experts who will guide you
              through the solutions based on your requirements. Request a demo
              for a free consultation today.
            </p>
            <span className="request">/request-demo</span>
          </div>

          <div className="image-free-card">
            <img
              src={freeConsultImage}
              alt="freeConsultImage"
              className="freeConsultImageOne"
            />

            <img
              src={freeConsultImageTwo}
              alt="freeConsultImage"
              className="freeConsultImageTwo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultaion;
