import "./styles.css";
import QrCodeImg from "../../assets/images/qr-code3.png";
import ContaclessImage from "../../assets/images/contactless-landing-sm.jpg";
import ContactlessImageLarge from "../../assets/images/contactless-landing-large.jpg";

const ContactLessOrdering = () => {
  return (
    <section className="card-container">
      <div className="contact-main-container">
        <div className="contact-main-sub">
          <div className="contactless">
            <div className="contact-button">
              <div className="ordering">
                <img src={QrCodeImg} className="qr-image" />
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
          <img src={ContaclessImage} className="ContaclessImage-small" />
          <img src={ContactlessImageLarge} className="ContactlessImageLarge" />
        </div>
      </div>
    </section>
  );
};

export default ContactLessOrdering;
