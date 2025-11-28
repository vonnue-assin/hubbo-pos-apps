import "./styles.css";

type SecondYearProps = {
  plan: string;
  data: {
    secondYear: number;
    perDay2: string;
  };
};

const PlanComparisonPriceRenderSecondYear = ({ data }: SecondYearProps) => {
  return (
    <>
      <div className="secondYearAnnualCard">
        <div className="second-year-card">
          <div className="second-year-price-card">
            <span className="rm-text">RM</span>
            <h1 className="annaul-price-text-second">
              {data.secondYear.toLocaleString()}
            </h1>
          </div>
          <span className="annaul-day-second">{data.perDay2}</span>
          <p className="annual-price-text-second">2nd year onwards</p>
          <p className="excluded-text">(Excludes hardware cost)</p>
        </div>
      </div>
    </>
  );
};

export default PlanComparisonPriceRenderSecondYear;
