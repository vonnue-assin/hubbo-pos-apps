import SilverBasicCard from "../SilverBasicCard";
import SwiperPagination from "../SwiperPagination";

const SoftwarePlans = () => {
  return (
    <div className="silverBasic software">
      <div className="swipper-basic-main software">
        <SwiperPagination bullets={3}>
          <SilverBasicCard />
        </SwiperPagination>
      </div>
    </div>
  );
};

export default SoftwarePlans;
