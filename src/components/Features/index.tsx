import FeaturesDataOneMain from "../FeatureDataOne";
import FeaturesDataTwoMain from "../FeatureDataTwo";
import "./styles.css";

const Features = () => {
  return (
    <>
      <div className="feature-card-main-container">
        <p className="feat-text-header">Features</p>
      </div>
      <div className="feature-card-main-input">
        <FeaturesDataOneMain />
        <FeaturesDataTwoMain />
      </div>
    </>
  );
};

export default Features;
