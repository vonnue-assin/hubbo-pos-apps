import { useState } from "react";

import SoftwarePlanCard from "../SoftwarePlanCard";

const SoftwarePlansList = ({ plans }: any) => {
  const [openIncluded, setOpenIncluded] = useState(true);

  return (
    <div className="swiper-wrapper">
      {plans.map((plan: string, index: number) => (
        <SoftwarePlanCard
          key={index}
          plan={plan}
          openIncluded={openIncluded}
          setOpenIncluded={setOpenIncluded}
        />
      ))}
    </div>
  );
};

export default SoftwarePlansList;
