import { PLATINUM } from "../../constants/constants";

import "./styles.css";

type Props = {
  plan: string;
  price: number;
  perDay: string;
};

const SecondYearPriceCard = ({ plan, price, perDay }: Props) => {
  const isPlatinum = plan === PLATINUM;

  return (
    <div className="annual-card-container">
      <div className={`annual-card ${isPlatinum ? "platinum-card" : ""}`}>
        <div className="second-year-card">
          <div className="second-year-price-card">
            <span className="rm-text">RM</span>
            <h1 className="annaul-price-text-second">
              {price.toLocaleString()}
            </h1>
          </div>

          <span className="annaul-day-second">{perDay}</span>
          <p className="annual-price-text-second">2nd year onwards</p>
          <p className="excluded-text">(Excludes hardware cost)</p>
        </div>
      </div>
    </div>
  );
};

export default SecondYearPriceCard;
