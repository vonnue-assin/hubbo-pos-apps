import Button from "../Button";
import "./styles.css";

type ChooseYourPlansProps = {
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
};

const ChooseYourPlansTab = ({
  selectedPlan,
  setSelectedPlan,
}: ChooseYourPlansProps) => {
  const plans = ["Software Only", "Software ＆ Hardware"];

  return (
    <div className="tab-main-container">
      <div className="tab-card">
        <div className="tab-container">
          {plans.map((plan) => (
            <Button
              key={plan}
              text={plan}
              isActive={selectedPlan === plan}
              onClick={() => setSelectedPlan(plan)}
              className="tab-button"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlansTab;
