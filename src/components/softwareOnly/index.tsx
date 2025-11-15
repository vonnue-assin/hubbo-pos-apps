import { useEffect, useRef, useState } from "react";

import GoldBasic from "../GoldBasic";
import PlatinumBasic from "../PlatinumBasic";
import SilverBasic from "../SilverBasic";

import arrowleftImage from "../../assets/images/chevron-left.813f13ce.svg";

import "./styles.css";

const SoftwareOnly = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const firstItem = carousel.firstElementChild as HTMLElement | null;
      if (!firstItem) return;

      const itemWidth = firstItem.offsetWidth + 20;
      const index = Math.round(carousel.scrollLeft / itemWidth);

      setActiveIndex(Math.max(0, Math.min(index, 2)));
    };
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const firstItem = carouselRef.current
      .firstElementChild as HTMLElement | null;
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth + 20;
    carouselRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  const scrollByAmount = (amount: number) => {
    carouselRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="sub-main-class">
      <div className="carousel-wrapper" ref={carouselRef}>
        <div className="carousel">
          <div className="carousel-item">
            <SilverBasic />
          </div>
          <div className="carousel-item">
            <GoldBasic />
          </div>
          <div className="carousel-item">
            <PlatinumBasic />
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="arrow-btn" onClick={() => scrollByAmount(-350)}>
          <img src={arrowleftImage} className="arrow-icon left" />
        </button>

        <div className="dots-wrapper">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`dot ${activeIndex === i ? "active" : ""}`}
              onClick={() => scrollToSlide(i)}
            ></span>
          ))}
        </div>

        <button className="arrow-btn" onClick={() => scrollByAmount(350)}>
          <img src={arrowleftImage} className="arrow-icon right" />
        </button>
      </div>
    </div>
  );
};

export default SoftwareOnly;
