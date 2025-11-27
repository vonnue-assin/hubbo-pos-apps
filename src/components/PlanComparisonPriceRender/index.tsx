import "./styles.css";

type PricingProps = {
  plan: string;
  data: {
    firstYear: number;
    perDay1: string;
    secondYear: number;
    perDay2: string;
  };
};

const PlanComparisonPriceRender = ({ data }: PricingProps) => {
  return (
    <>
      <div className="annual-pricing-card">
        <div className="first-year-card">
          <div className="annual-card">
            <div className="annual-content">
              <span className="rm-text-annual">RM</span>
              <h1 className="annual-price">
                {data.firstYear.toLocaleString()}
              </h1>
            </div>
            <span className="annaul-day">{data.perDay1}</span>
            <p className="annual-price-text">Annual Pricing (1st year)</p>
          </div>
        </div>
      </div>

      <div className="hardware-cost">
        <div className="hardware-cost-sub-card">
          <div className="hardware-cost-sub">
            <span className="hardware-price-text">RM</span>
            <h1 className="hardware-price-note">
              {data.secondYear.toLocaleString()}
            </h1>
          </div>
          <span className="day-hardware">{data.perDay2}</span>
          <p className="year-hardware">2nd year onwards</p>
          <p className="day-hardware-exclude">(Excludes hardware cost)</p>
        </div>
      </div>
    </>
  );
};

export default PlanComparisonPriceRender;
