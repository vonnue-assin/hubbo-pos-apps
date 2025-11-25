import "./styles.css";

const Pricings = () => {
  return (
    <>
      <div className="pricings-container-main">
        <p className="pricing-text">Pricing</p>
      </div>
      <div className="annual-pricing-card">
        <div className="first-year-card">
          <div className="annual-card">
            <div className="annual-content">
              <span className="rm-text-annual">RM</span>
              <h1 className="annual-price">3,390</h1>
            </div>
            <span className="annaul-day">Est. RM9.2/day</span>
            <p className="annual-price-text">Annual Pricing (1st year)</p>
          </div>
        </div>
        <div className="first-year-card left">
          <div className="annual-card">
            <div className="annual-content">
              <span className="rm-text-annual">RM</span>
              <h1 className="annual-price">1,300</h1>
            </div>
            <span className="annaul-day">RM3.5/day</span>
            <p className="annual-price-text">Annual Pricing (1st year)</p>
          </div>
        </div>
        <div className="first-year-card right">
          <div className="annual-card">
            <div className="annual-content">
              <span className="rm-text-annual">RM</span>
              <h1 className="annual-price">3,800</h1>
            </div>
            <span className="annaul-day">RM10.4/day</span>
            <p className="annual-price-text">Annual Pricing (1st year)</p>
          </div>
        </div>
      </div>
      <div className="hardware-cost">
        <div className="hardware-cost-sub-card">
          <div className="hardware-cost-sub">
            <span className="hardware-price-text">RM</span>
            <h1 className="hardware-price-note">990</h1>
          </div>
          <span className="day-hardware">Est. RM2.7/day</span>
          <p className="year-hardware">2nd year onwards</p>
          <p className="day-hardware-exclude">(Excludes hardware cost)</p>
        </div>
        <div className="hardware-cost-sub-card left">
          <div className="hardware-cost-sub">
            <span className="hardware-price-text">RM</span>
            <h1 className="hardware-price-note">1,300</h1>
          </div>
          <span className="day-hardware">RM3.5/day</span>
          <p className="year-hardware">2nd year onwards</p>
          <p className="day-hardware-exclude">(Excludes hardware cost)</p>
        </div>
        <div className="hardware-cost-sub-card right">
          <div className="hardware-cost-sub">
            <span className="hardware-price-text">RM</span>
            <h1 className="hardware-price-note">1,300</h1>
          </div>
          <span className="day-hardware">RM3.5/day</span>
          <p className="year-hardware">2nd year onwards</p>
          <p className="day-hardware-exclude">(Excludes hardware cost)</p>
        </div>
      </div>
    </>
  );
};

export default Pricings;
