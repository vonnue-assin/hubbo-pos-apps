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
    <div className="plans-filering-component">
      <div className="plans-filtering-card">
        {standardPlans.map((plan, index) => (
          <div
            key={index}
            className={`plan-filtering-main ${
              plan.bestValue ? "best-value-card" : ""
            }`}
          >
            <span className="height"></span>
            <div className="goldBasics">
              {plan.bestValue && (
                <span className="best-value-text">BEST VALUE</span>
              )}
              <h2 className="basic-text">{plan.title}</h2>
              <p className="only-text">{plan.subText}</p>
            </div>
            <div className="new-wrapper">
              <span className="micro-text">Microbusinesses</span>
              <span className="started-button">Get Started</span>
            </div>
          </div>
        ))}
      </div>
      <Pricings />

      <Features />
    </div>
  );
};

export default PlansFiltering;
