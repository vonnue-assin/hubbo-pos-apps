import { useState } from "react";

import PlanCard from "../PlanCard";

const PlansList = ({ plans }: any) => {
  const [openIncluded, setOpenIncluded] = useState(true);

  return (
    <div className="swiper-wrapper">
      {plans.map((plan: any, index: number) => (
        <PlanCard
          key={index}
          plan={plan}
          openIncluded={openIncluded}
          setOpenIncluded={setOpenIncluded}
        />
      ))}
    </div>
  );
};

export default PlansList;
