type Props = {
  total: number;
  activeIndex: number;
  className?: string;
};

const SwiperPagination = ({ total, activeIndex, className }: Props) => {
  const bullets = Array.from({ length: total }, (_, i) => ({
    key: i,
    className: i === activeIndex ? "bullet active-bullet" : "bullet",
  }));

  return (
    <div className={`swiper-pagination ${className || ""}`}>
      {bullets.map((bullet) => (
        <span key={bullet.key} className={bullet.className}></span>
      ))}
    </div>
  );
};

export default SwiperPagination;
