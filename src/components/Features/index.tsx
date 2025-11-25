import FeaturesDataOneMain from "../FeatureDataOne";
import FeaturesDataTwoMain from "../FeatureDataTwo";
import "./styles.css";

const Features = () => {
  return (
    <>
      <div className="pricings-container-main">
        <p className="pricing-text">Features</p>
      </div>
      <div className="feature-card-main-input">
        <div>
          <FeaturesDataOneMain />
        </div>

        <div className="data-two">
          {" "}
          <FeaturesDataOneMain />
        </div>
        <div className="data-three">
          <FeaturesDataTwoMain />
        </div>
      </div>
    </>
  );
};

export default Features;
