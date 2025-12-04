import "./styles.css";

type FeatureItem = {
  id: number;
  name: string;
};

type FeaturesProps = {
  data: FeatureItem[];
};

const FeaturesSectionForPriceComparison = ({ data }: FeaturesProps) => {
  return (
    <div className="feature-card-main-">
      <div className="feature-card-main-input">
        {data.map((item) => (
          <div key={item.id} className="feature-card-spans">
            <span className="feature-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSectionForPriceComparison;
