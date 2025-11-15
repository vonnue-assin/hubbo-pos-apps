import ChooseYourPlans from "../../components/ChooseYourPlans";
import Header from "../../components/Header";
import Pricing from "../../components/Pricing";

import "./styles.css";

export const PlansAndPrice = () => {
  return (
    <div className="plansandPrice-main-container">
      <Header />
      <Pricing />
      <div className="section-3">
        <ChooseYourPlans />
      </div>
    </div>
  );
};
