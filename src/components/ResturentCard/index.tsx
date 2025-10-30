import upperImage from "../../assets/images/ellipse-lg-top.e22d1819.svg";
import lowerImage from "../../assets/images/ellipse-lg-down.17b998a3.svg";

import "./styles.css";

const ResturentCard = () => {
  return (
    <div className="Pos-main-container">
      <img src={upperImage} className="upperImage" />
      <img src={lowerImage} className="lowerImage" />
      <div className="one-pos-card">
        <h1 className="pos-header">All-in-One POS for your restaurant</h1>
        <p className="pos-content">
          Streamline your F＆B operations and supercharge your business growth
        </p>
        <span className="free-demo">Request Free Demo</span>
      </div>
    </div>
  );
};

export default ResturentCard;
