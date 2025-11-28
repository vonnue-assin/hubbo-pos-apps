import "./styles.css";

type PricingProps = {
  plan: string;
  data: {
    firstYear: number;
    perDay1: string;
  };
};

const PlanComparisonPriceRender = ({ plan,data }: PricingProps) => {
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
    </>
  );
};

export default PlanComparisonPriceRender;
