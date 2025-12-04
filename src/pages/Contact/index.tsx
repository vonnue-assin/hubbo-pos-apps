import Footer from "../../components/FooterAccordion";
import Header from "../../components/Header";
import HelpHere from "../../components/HelpHereSection";
import NewToHubboPos from "../../components/NewToHubboPos";

import "./styles.css";

export const Contact = () => {
  return (
    <div className="helphere-header">
      <Header />
      <HelpHere />
      <NewToHubboPos />
      <Footer />
    </div>
  );
};
