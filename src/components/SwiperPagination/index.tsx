import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  bullets: number;
}

const SwiperWrapper = ({ children, bullets }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = ref.current;
    if (!slider) return;

    const handleScroll = () => {
      const slide = slider.querySelector(".swiper-slide") as HTMLElement;
      if (!slide) return;

      const width = slide.clientWidth;
      const index = Math.round(slider.scrollLeft / width);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="swiper-wrapper" ref={ref}>
        {children}
      </div>

      <div className="swiper-pagination">
        {[...Array(bullets)].map((_, i) => (
          <span
            key={i}
            className={`bullets ${activeIndex === i ? "active-bullet" : ""}`}
          ></span>
        ))}
      </div>
    </>
  );
};

export default SwiperWrapper;
