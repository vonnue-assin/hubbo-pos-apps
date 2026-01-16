import PricingLandImageSmall from "../../assets/images/pricing-landing-small.png";
import PricingLandImageLarge from "../../assets/images/pricing-landing-large.png";
import payementImg from "../../assets/images/payment.png";

import "./styles.css";

const Pricing = () => {
  return (
    <section className="card-container">
      <div className="contact-main-container">
        <div className="contact-main-sub">
          <div className="contactless">
            <div className="contact-button">
              <div className="ordering">
                <img src={payementImg} className="qr-image" alt="qr-images" />
              </div>
              <h3 className="contactless-order">Pricing</h3>
            </div>

            <div className="order-made-easy">
              <h3 className="order-made-easy-header">
                Flexible plans to suit your business needs
              </h3>
              <h4 className="minimize-content">
                Choose from a variety of software packages or opt for a
                comprehensive software and hardware bundle to fit your unique
                business needs.
              </h4>
            </div>
          </div>
          <img
            src={PricingLandImageSmall}
            className="ContaclessImage-smaller"
            alt="smallerImages"
          />
          <img
            src={PricingLandImageLarge}
            className="ContactlessImageLarge"
            alt="pricing"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
