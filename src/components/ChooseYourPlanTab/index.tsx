import "./styles.css";

type ChooseYourPlansProps = {
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
};

const ChooseYourPlansTab = ({
  selectedPlan,
  setSelectedPlan,
}: ChooseYourPlansProps) => {
  return (
    <div className="tab-main-container">
      <div className="tab-card">
        <div className="tab-container">
          <button
            className={`tab-button ${
              selectedPlan === "Software Only" ? "active" : ""
            }`}
            onClick={() => setSelectedPlan("Software Only")}
          >
            <p className="soft-button">Software Only</p>
          </button>

          <button
            className={`tab-button ${
              selectedPlan === "Software ＆ Hardware" ? "active" : ""
            }`}
            onClick={() => setSelectedPlan("Software ＆ Hardware")}
          >
            <p className="soft-button">Software ＆ Hardware</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlansTab;
