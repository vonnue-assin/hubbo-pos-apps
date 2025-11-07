import "./styles.css";

import ScanImage from "../../assets/images/contactless-cta-large.png";
import ScanImageSmall from "../../assets/images/contactless-cta-small.png";

const QuickerTimes = () => {
  return (
    <div className="quicker-main-container">
      <div className="section-wrapper">
        <div className="section-sub-wrapper">
          <div className="section-two">
            <div className="section-one-image-large">
              <img src={ScanImage} className="ScanImage" />
            </div>
            <div className="quicker-times">
              <div className="quicker-times-text">
                <h2 className="quicker-text">
                  Quicker Turnaround Times and Smoother Workflows
                </h2>
                <div className="image-card">
                  <img src={ScanImageSmall} className="ScanImageSmall" />
                </div>
                <h3 className="quicker-content">
                  With HUBBO POS, customers can easily browse menus, place
                  orders, and make payments all on their own. This means lesser
                  wait times, reduced congestion, and improved customer
                  satisfaction.
                </h3>
                <button className="request-free-demo">Request Free Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickerTimes;
