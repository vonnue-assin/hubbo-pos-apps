import ContactlessImageLarge from "../../assets/images/contactless-landing-large (1).jpg";
import ContaclessImage from "../../assets/images/contactless-landing-sm.jpg";
import QrCodeImg from "../../assets/images/qr-code3.png";

import "./styles.css";

const ContactLessOrderingSectionUnderHeader = () => {
  return (
    <section className="card-container">
      <div className="contact-main-container">
        <div className="contact-main-sub">
          <div className="contactless">
            <div className="contact-button">
              <div className="ordering">
                <img src={QrCodeImg} className="qr-image" alt="arrow" />
              </div>
              <h3 className="contactless-order">Contactless ordering</h3>
            </div>

            <div className="order-made-easy">
              <h3 className="order-made-easy-header">
                Contactless Ordering Made Easy
              </h3>
              <h4 className="minimize-content">
                Minimise wait times and prioritise the customer ordering
                experience through contactless ordering.
              </h4>
            </div>
          </div>
          <img
            src={ContaclessImage}
            alt="arrow"
            className="ContaclessImage-smaller"
          />
          <img
            src={ContactlessImageLarge}
            alt="arrow"
            className="ContactlessImageLarge"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLessOrderingSectionUnderHeader;
