import { customerData } from "../../data/customerData";

import "./styles.css";

const NewToHubboPos = () => {
  return (
    <div className="new-container">
      <div className="new-container-main">
        <div className="demo-book-card-main">
          <div className="book-card-hubbo">
            {customerData.map((item) => (
              <div key={item.id} className="flex-item-start">
                <img
                  src={item.image}
                  alt={item.image}
                  className="DemoBookImage"
                />
                <div className="flex-items-content">
                  <div className="flex-gap-items-card">
                    <h2 className="hubbo-name-text">{item.name}</h2>
                    <h4 className="hubbo-content-contact">{item.content}</h4>
                  </div>
                  <span className="hubbo-button">{item.button}</span>
                </div>
              </div>
            ))}
            <div className="general-enquiry">
              <div className="general-enquiry-start-link">
                <h2 className="general-text">For general enquiries :</h2>
                <span className="hello">hello.my@hubbopos.com</span>
              </div>
              <div className="general-enquiry-start-link">
                <h2 className="general-text">
                  For partnership or marketing queries :
                </h2>
                <span className="hello">marketing.my@hubbopos.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewToHubboPos;
