import { useState } from "react";
import { faqData } from "../../data/faqData";
import "./styles.css";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-main-container">
      <h2 className="faq-header">FAQs</h2>
      <div className="faq-content">
        {faqData.map((item, index) => (
          <div key={item.id} className="faq-question">
            <div className="dropdown-icon-faq" onClick={() => toggleFAQ(index)}>
              <h2 className="question">{item.question}</h2>
              <img
                src={item.arrowDown}
                alt="Toggle"
                className={`dropdown-icon-faq-image ${
                  openIndex === index ? "rotate" : ""
                }`}
              />
            </div>

            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              {item.answer && (
                <p className="answer">
                  {item.answer} <span className="faq-link">{item.link}</span>
                </p>
              )}
              {item.answer1 && <p className="answer">{item.answer1}</p>}
              {item.answer2 && <p className="answer">{item.answer2} </p>}
              {item.answer3 && (
                <p className="answer">
                  {item.answer3} <span className="faq-link">{item.link}</span>
                </p>
              )}
            </div>

            <div className="faq-border"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
