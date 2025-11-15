import { includedData } from "../../data/includedData";

import "./styles.css";

const Included = () => {
  return (
    <div className="included-data-card-main ">
      {includedData.map((item) => (
        <div key={item.id} className="included-data-main-container">
          <div className="">
            <img src={item.image} alt={item.image} className="item-tick" />
          </div>
          <p className="item-name-included">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Included;
