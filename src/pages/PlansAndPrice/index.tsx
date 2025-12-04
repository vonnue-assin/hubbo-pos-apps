import ChooseYourPlans from "../../components/ChooseYourPlans";
import Footer from "../../components/FooterAccordion";
import FreeConsultaion from "../../components/FreeConsultationSection";
import Header from "../../components/Header";
import PlanComparison from "../../components/PlanComparisonSection";
import Pricing from "../../components/PricingSection";

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
      <Footer />
    </div>
  );
};
