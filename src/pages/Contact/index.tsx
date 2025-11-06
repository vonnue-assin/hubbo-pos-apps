import Footer from "../../components/Footer";
import FooterTab from "../../components/FooterTab";
import Header from "../../components/Header";
import HelpHere from "../../components/HelpHere";
import NewToHubboPos from "../../components/NewToHubboPos";

import "./styles.css";

const Contact = () => {
  return (
    <div className="helphere-header">
      <Header />
      <HelpHere />
      <NewToHubboPos />
      <Footer />
    </div>
  );
};

export default Contact;
