import FirstYearPriceCard from "../FirstYearPriceCard";
import SecondYearPriceCard from "../SecondYearPriceCard";

import "./styles.css";

type PlanPriceCardProps = {
  plan: string;
  data: {
    firstYear: {
      price: number;
      perDay: string;
    };
    secondYear: {
      price: number;
      perDay: string;
    };
  };
  type: "first" | "second";
};

const PlanComparisonPriceCard = ({ plan, data, type }: PlanPriceCardProps) => {
  if (type === "first") {
    return (
      <FirstYearPriceCard
        plan={plan}
        price={data.firstYear.price}
        perDay={data.firstYear.perDay}
      />
    );
  }

  return (
    <SecondYearPriceCard
      plan={plan}
      price={data.secondYear.price}
      perDay={data.secondYear.perDay}
    />
  );
};

export default PlanComparisonPriceCard;
