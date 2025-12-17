import { useState } from "react";

import SoftwarePlanCard from "../SoftwarePlanCard";

const SoftwarePlansList = ({ plans }: any) => {
  const [openIncluded, setOpenIncluded] = useState(true);
  const [openAdditional, setOpenAdditional] = useState(true);

  return (
    <div className="swiper-wrapper">
      {plans.map((plan: string) => (
        <SoftwarePlanCard
          plan={plan}
          openIncluded={openIncluded}
          setOpenIncluded={setOpenIncluded}
          openAdditional={openAdditional}
          setOpenAdditional={setOpenAdditional}
        />
      ))}
    </div>
  );
};

export default SoftwarePlansList;
