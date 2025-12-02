import { useEffect, useState } from "react";

export function useSwiperPagination(
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  totalSlides: number
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const slides = Array.from(wrapper.querySelectorAll(".swiper-slide"));

    if (slides.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slides.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: wrapper,
        threshold: 0.6,
      }
    );

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, [wrapperRef, totalSlides]);

  return activeIndex;
}
