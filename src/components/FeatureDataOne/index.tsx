import { FeaturesDataOne } from "../../data/Features";

const FeaturesDataOneMain = () => {
  return (
    <div className="feature-container-left">
      {FeaturesDataOne.map((item) => (
        <div className="feature-card-spans" key={item.id}>
          <span className="feature-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDataOneMain;
