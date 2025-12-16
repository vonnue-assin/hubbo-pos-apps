import { PLATINUM } from "../../constants/constants";

import "./styles.css";

type Props = {
  plan: string;
  price: number;
  perDay: string;
};

const FirstYearPriceCard = ({ plan, price, perDay }: Props) => {
  const isPlatinum = plan === PLATINUM;

  return (
    <div className="annual-card-container">
      <div
        className={`annual-card first-year ${
          isPlatinum ? "platinum-card" : ""
        }`}
      >
        <div className="annual-content">
          <span className="rm-text-annual">RM</span>
          <h1 className="annual-price">{price.toLocaleString()}</h1>
        </div>

        <span className="annaul-day">{perDay}</span>
        <p className="annual-price-text">Annual Pricing (1st year)</p>
      </div>
    </div>
  );
};

export default FirstYearPriceCard;
