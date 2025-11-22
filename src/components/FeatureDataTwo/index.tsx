import { FeatureDataTwo } from "../../data/FeatureTwo";

import "./styles.css";

const FeaturesDataTwoMain = () => {
  return (
    <div className="feature-card-texts-two">
      {FeatureDataTwo.map((item) => (
        <div className="feature-card-spans-two" key={item.id}>
          <span className="feature-name-two">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDataTwoMain;
