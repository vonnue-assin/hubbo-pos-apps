import ChooseYourPlans from "../../components/ChooseYourPlans";
import FreeConsultaion from "../../components/FreeConsultation";
import Header from "../../components/Header";
import PlanComparison from "../../components/PlanComparison";
import Pricing from "../../components/Pricing";

import "./styles.css";

export const PlansAndPrice = () => {
  return (
    <div className="plansandPrice-main-container">
      <Header />
      <Pricing />
      <div className="section-3">
        <ChooseYourPlans />
        <FreeConsultaion />
      </div>
      <PlanComparison />
    </div>
  );
};
