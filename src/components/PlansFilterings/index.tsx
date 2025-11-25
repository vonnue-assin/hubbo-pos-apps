import Features from "../Features";
import Pricings from "../Pricings";
import "./styles.css";

type PlansFilteringProps = {
  selectedPlan: string;
};

const planMapping: Record<string, string> = {
  "Silver (RM 990)": "Silver Basic",
  "Gold (RM 1490)": "Gold Basic",
  "Platinum (RM 1300)": "Platinum Basic",
};

const PlansFiltering = ({ selectedPlan }: PlansFilteringProps) => {
  const standardPlans = [
    {
      title: planMapping[selectedPlan] || "Silver Basic",
      subText: "Software only",
    },
    {
      title: planMapping[selectedPlan] || "Gold Basic",
      subText: "Software only",
    },
    {
      title: planMapping[selectedPlan] || "Platinum Basic",
      subText: "Software only",
      bestValue: true,
    },
  ];

  return (
    <div className="silver-gold-card">
      <div className="silver-gold-platinum">
        {standardPlans.map((plan, index) => (
          <div
            key={index}
            className={`plan-filtering-main-card ${
              plan.bestValue ? "best-value-card" : ""
            }`}
          >
            <span className="height"></span>

            <div className="goldBasics">
              {plan.bestValue && (
                <span className="best-value-text-plan">BEST VALUE</span>
              )}
              <div className="title-row">
                <h2 className="basic-text">{plan.title}</h2>
                <p className="only-text">{plan.subText}</p>
              </div>

              <div className="new-wrapper">
                <span className="micro-text">Microbusinesses</span>
                <span className="started-button">Get Started</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="silver-gold-platinum-text">
        <div className="silver-gold-tablet-main">
          <div className="silver-gold-tablet-main-card">
            <span className="height-set"></span>
            <div className="silver-set">
              <div className="new-wrapper-name">
                <h2 className="basic-text">Silver Plus</h2>
                <p className="only-text">Hardware and software included</p>
              </div>
              <div className="new-wrapper">
                <span className="micro-text">Medium businesses</span>
                <span className="started-button">Get Started</span>
              </div>
            </div>
          </div>
          <div className="silver-gold-tablet-main-card">
            <span className="height-set"></span>
            <div className="silver-set">
              <div className="new-wrapper-name">
                <h2 className="basic-text">Gold Basic</h2>
                <p className="only-text">Software only</p>
              </div>
              <div className="new-wrapper">
                <span className="micro-text">Small businesses</span>
                <span className="started-button">Get Started</span>
              </div>
            </div>
          </div>
          <div className="silver-gold-tablet-main-card">
            <span className="height-set"></span>
            <span className="best-value-text-plan">BEST VALUE</span>
            <div className="silver-set">
              <div className="new-wrapper-name">
                <h2 className="basic-text">Platinum Basic</h2>
                <p className="only-text">Software only</p>
              </div>
              <div className="new-wrapper">
                <span className="micro-text">Small businesses</span>
                <span className="started-button-get">Get Started</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricings />

      <Features />
    </div>
  );
};

export default PlansFiltering;
