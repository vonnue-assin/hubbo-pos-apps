import { useEffect, useRef, useState } from "react";

import { SCROLL } from "../../constants/constants";
import hardwarePlans from "../../data/chooseYourPlanCardsHardware.json";
import HardWarePlanCard from "../HardWarePlanCard";

import ArrowDownImage from "../../assets/images/chevron-down.svg";

const HardWarePlanSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [allIncludedOpen, setAllIncludedOpen] = useState(false);
  const [allAdditionalOpen, setAllAdditionalOpen] = useState(true);

  const [bulletCount, setBulletCount] = useState(hardwarePlans.length);

  const updateBulletCount = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      setBulletCount(3);
    } else if (width >= 1024) {
      setBulletCount(4);
    } else if (width >= 768) {
      setBulletCount(5);
    } else {
      setBulletCount(hardwarePlans.length);
    }
  };

  useEffect(() => {
    updateBulletCount();

    window.addEventListener("resize", updateBulletCount);
    return () => window.removeEventListener("resize", updateBulletCount);
  }, []);

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

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slide = slider.querySelector(".swiper-slide") as HTMLElement;
    if (!slide) return;

    const width = slide.clientWidth;

    slider.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  };

  const displayedIndex = Math.min(activeIndex, bulletCount - 1);

  const bulletsToShow = hardwarePlans.slice(0, bulletCount);

  return (
    <div className="silverBasic hardware">
      <div className="swipper-basic-main">
        <div className="swiper-wrapper hardware-software" ref={sliderRef}>
          {hardwarePlans.map((plan) => (
            <div className="swiper-slide" key={plan.id}>
              <HardWarePlanCard
                plan={plan}
                allIncludedOpen={allIncludedOpen}
                setAllIncludedOpen={setAllIncludedOpen}
                allAdditionalOpen={allAdditionalOpen}
                setAllAdditionalOpen={setAllAdditionalOpen}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hardware-arrows">
        <button
          className="arrow-buttons-hardware"
          onClick={() => scrollToIndex(activeIndex - 1)}
        >
          <img
            src={ArrowDownImage}
            className="arrowbuttonLeft"
            alt=""
            style={{ transform: "rotate(90deg)" }}
          />
        </button>

        <button
          className="arrow-buttons-hardware"
          onClick={() => scrollToIndex(activeIndex + 1)}
        >
          <img
            src={ArrowDownImage}
            className="arrowbuttonRight"
            alt=""
            style={{ transform: "rotate(-90deg)" }}
          />
        </button>

        <div className="hardware-pagination">
          {bulletsToShow.map((_, i) => (
            <span
              key={i}
              className={`bullets ${
                displayedIndex === i ? "active-bullet" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardWarePlanSlider;
