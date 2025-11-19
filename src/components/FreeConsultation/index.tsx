import freeConsultImage from "../../assets/images/pricing-cta-small.png";
import freeConsultImageTwo from "../../assets/images/pricing-cta-large.png";

import "./styles.css";

export const FreeConsultaion = () => {
  return (
    <div className="free-consultaion-main-container">
      <div className="free-consultaion-main">
        <div className="background-brand-free">
          <div className="speak-card">
            <p className="speak-text">Speak to us for a; free consultation</p>
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
