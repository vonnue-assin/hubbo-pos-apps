import { FeatureDataTwo } from "../../data/FeatureTwo";

import "./styles.css";

const FeaturesDataTwoMain = () => {
  return (
    <div className="feature-container-right">
      {FeatureDataTwo.map((item) => (
        <div className="feature-card-spans" key={item.id}>
          <span className="feature-name seconds">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDataTwoMain;
