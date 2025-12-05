import { useEffect, useRef, useState } from "react";

import PlanCard from "../PlanCard";

import ArrowDownImage from "../../assets/images/chevron-down.svg";
import chooseYourPlanCards from "../../data/chooseYourPlanCards.json";

import "./styles.css";
import { SCROLL } from "../../constants/constants";

const PlanSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [openIncluded, setOpenIncluded] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const slide = slider.querySelector(".swiper-slide") as HTMLElement;
      if (!slide) return;

      const width = slide.clientWidth;
      const index = Math.round(slider.scrollLeft / width);
      setActiveIndex(index);
    };

    slider.addEventListener(SCROLL, handleScroll);
    return () => slider.removeEventListener(SCROLL, handleScroll);
  }, []);

  const scrollToIndex = (newIndex: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slide = slider.querySelector(".swiper-slide") as HTMLElement;
    if (!slide) return;

    const width = slide.clientWidth;
    slider.scrollTo({
      left: newIndex * width,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < chooseYourPlanCards.length - 1)
      scrollToIndex(activeIndex + 1);
  };

  return (
    <>
      <div className="swipper-basic-main software">
        <div className="swiper-wrapper" ref={sliderRef}>
          {chooseYourPlanCards.map((plan) => (
            <div className="swiper-slide" key={plan.id}>
              <PlanCard
                plan={plan}
                openIncluded={openIncluded}
                setOpenIncluded={setOpenIncluded}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="arrow-cards">
        <div className="arrow-card-container">
          <button className="arrow-buttons" onClick={handlePrev}>
            <img
              src={ArrowDownImage}
              alt="arrow left"
              className="arrowbuttonLeft"
              style={{ transform: "rotate(90deg)" }}
            />
          </button>

          <div className="swiper-pagination software-pagination">
            {chooseYourPlanCards.map((_, i) => (
              <span
                key={i}
                className={`bullets ${
                  activeIndex === i ? "active-bullet" : ""
                }`}
              />
            ))}
          </div>

          <button className="arrow-buttons" onClick={handleNext}>
            <img
              src={ArrowDownImage}
              alt="arrow right"
              className="arrowbuttonRight"
              style={{ transform: "rotate(-90deg)" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanSlider;
