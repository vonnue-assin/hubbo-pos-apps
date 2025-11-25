import { useState, useRef, useEffect } from "react";

import useMediaQuery from "../../Hooks/useMediaQuery";
import ChooseYourPlansAccordion from "../ChooseYourPlansAccordion";
import ChooseYourPlansTab from "../ChooseYourPlanTab";
import Included from "../Included";

import ArrowDownImage from "../../assets/images/chevron-down.svg";
import roundTickImage from "../../assets/images/round-tick.38e908ce.svg";

import "./styles.css";

const ChooseYourPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Software Only");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const [goldAdditionalOpen, setGoldAdditionalOpen] = useState(true);
  const activeSliderRef = useRef<HTMLDivElement>(null);
  const [silverOpen, setSilverOpen] = useState(true);

  useEffect(() => {
    const slider = activeSliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const slide = slider.querySelector(".swiper-slide") as HTMLElement;
      if (!slide) return;

      const slideWidth = slide.clientWidth;
      const index = Math.round(slider.scrollLeft / slideWidth);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", handleScroll);

    return () => slider.removeEventListener("scroll", handleScroll);
  }, [selectedPlan]);

  return (
    <section className="section-wrap">
      <div className="sub-container">
        <h3 className="choose-ypur-plans-text">Choose your plan</h3>

        <div className="Chooseyour-plans-container">
          {isDesktop ? (
            <ChooseYourPlansTab
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          ) : (
            <ChooseYourPlansAccordion
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          )}

          <div className="software-only">
            {/* --- PRICE TEXT --- */}
            {selectedPlan === "Software Only" ? (
              <p className="price-text">
                Price is exclusive of set up fees and SST.
              </p>
            ) : (
              <p className="price-text">
                Hardware cost is a one-time payment only. Price is exclusive of
                tax and setup fee.
              </p>
            )}

            {selectedPlan === "Software Only" && (
              <div className="silverBasic">
                <div className="swipper-basic-main software">
                  <div className="swiper-wrapper" ref={activeSliderRef}>
                    <div className="swiper-slide">
                      <div className="swiper-text-card">
                        <div className="border-text">
                          <div className="w-full">
                            <div className="solid-primary">
                              <p className="silver-text">Silver Basic</p>
                              <p className="money-text">
                                <span className="rm-text">RM </span>
                                <span className="money-text-set">990</span>
                              </p>
                              <p className="year-plan">1 year plan</p>
                            </div>
                          </div>

                          <div className="silver-card-sub-card">
                            <div className="vertical-set">
                              <h3 className="header-3">
                                <button
                                  className={`button-include ${
                                    silverOpen ? "open" : "close"
                                  }`}
                                  onClick={() => setSilverOpen(!silverOpen)}
                                >
                                  <span className="include-text">
                                    What’s included :
                                  </span>
                                  <img
                                    src={ArrowDownImage}
                                    alt="ArrowDownImage"
                                    className={`ArrowDownImage ${
                                      silverOpen ? "rotated" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              <div
                                className={`included-content ${
                                  silverOpen ? "open" : ""
                                }`}
                              >
                                <Included />
                              </div>
                            </div>
                          </div>

                          <div className="request-free-demo-button-sub texted-silver">
                            <span className="free-demo-button-set">
                              Request Free Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-text-card card-gold">
                      <div className="border-text">
                        <div className="w-full">
                          <div className="solid-primary">
                            <p className="silver-text">Gold Basic</p>
                            <p className="money-text">
                              <span className="rm-text">RM </span>
                              <span className="money-text-set">1,490</span>
                            </p>
                            <p className="year-plan">1 year plan</p>
                          </div>
                        </div>

                        <div className="silver-card-sub-card">
                          <div className="vertical-set">
                            {/* Additional features */}
                            <div className="additional-featured-buttons">
                              <h3 className="header-2">
                                <button
                                  className="button-additional"
                                  onClick={() =>
                                    setGoldAdditionalOpen(!goldAdditionalOpen)
                                  }
                                >
                                  <span
                                    className={`additional-features ${
                                      goldAdditionalOpen ? "open" : ""
                                    }`}
                                  >
                                    Additional features
                                  </span>

                                  <img
                                    src={ArrowDownImage}
                                    className={`ArrowDownImage ${
                                      goldAdditionalOpen ? "rotated" : ""
                                    }`}
                                    alt="arrow"
                                  />
                                </button>
                              </h3>

                              <div
                                className={`feature-card-main ${
                                  goldAdditionalOpen ? "open" : "close"
                                }`}
                              >
                                <div className="feature-card">
                                  <img
                                    src={roundTickImage}
                                    className="roundTickImage"
                                    alt="arrow"
                                  />
                                  <p className="platform-text">
                                    Delivery Platform Integration
                                  </p>
                                </div>
                              </div>
                            </div>

                            <h3 className="header-3">
                              <button
                                className="button-include"
                                onClick={() => setSilverOpen(!silverOpen)}
                              >
                                <span className="include-text">
                                  What’s included :
                                </span>
                                <img
                                  src={ArrowDownImage}
                                  alt="arrow"
                                  className={`ArrowDownImage ${
                                    silverOpen ? "rotated" : ""
                                  }`}
                                />
                              </button>
                            </h3>

                            <div
                              className={`included-content ${
                                silverOpen ? "open" : ""
                              }`}
                            >
                              <Included />
                            </div>
                          </div>
                        </div>

                        <div className="request-free-demo-button-sub">
                          <span className="free-demo-button-set">
                            Request Free Demo
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-text-card best-value">
                      <p className="best-value-text">BEST VALUE</p>

                      <div className="border-text">
                        <div className="w-full">
                          <div className="solid-primary">
                            <p className="silver-text">Platinum Basic</p>
                            <p className="money-text">
                              <span className="rm-text">RM </span>
                              <span className="money-text-set">2,600</span>
                            </p>
                            <p className="year-plan">2 year plan</p>
                          </div>
                        </div>

                        <div className="silver-card-sub-card">
                          <div className="vertical-set">
                            {/* Additional features */}
                            <div className="additional-featured-buttons">
                              <h3 className="header-2">
                                <button
                                  className="button-additional"
                                  onClick={() =>
                                    setGoldAdditionalOpen(!goldAdditionalOpen)
                                  }
                                >
                                  <span
                                    className={`additional-features ${
                                      goldAdditionalOpen ? "open" : ""
                                    }`}
                                  >
                                    Additional features
                                  </span>

                                  <img
                                    src={ArrowDownImage}
                                    className={`ArrowDownImage ${
                                      goldAdditionalOpen ? "rotated" : ""
                                    }`}
                                    alt="arrow"
                                  />
                                </button>
                              </h3>

                              <div
                                className={`feature-card-main ${
                                  goldAdditionalOpen ? "open" : "close"
                                }`}
                              >
                                <div className="feature-card">
                                  <img
                                    src={roundTickImage}
                                    className="roundTickImage"
                                    alt="arrow"
                                  />
                                  <p className="platform-text">
                                    Delivery Platform Integration
                                  </p>
                                </div>
                              </div>
                            </div>

                            <h3 className="header-3">
                              <button
                                className="button-include"
                                onClick={() => setSilverOpen(!silverOpen)}
                              >
                                <span className="include-text">
                                  What’s included :
                                </span>
                                <img
                                  src={ArrowDownImage}
                                  alt="arrow"
                                  className={`ArrowDownImage ${
                                    silverOpen ? "rotated" : ""
                                  }`}
                                />
                              </button>
                            </h3>

                            <div
                              className={`included-content ${
                                silverOpen ? "open" : ""
                              }`}
                            >
                              <Included />
                            </div>
                          </div>
                        </div>

                        <div className="request-free-demo-button-sub">
                          <span className="free-demo-button-set">
                            Request Free Demo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="swiper-pagination software-pagination">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className={`bullets ${
                          activeIndex === i ? "active-bullet" : ""
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>

                {/* Arrows */}
                <div className="arrow-cards">
                  <div className="arrow-card-container">
                    <button className="arrow-buttons">
                      <img
                        src={ArrowDownImage}
                        alt="arrow"
                        className="arrowbuttonLeft"
                      />
                    </button>
                    <div className="px-three"></div>
                    <button className="arrow-buttons">
                      <img
                        src={ArrowDownImage}
                        alt="arrow"
                        className="arrowbuttonRight"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedPlan === "Software ＆ Hardware" && (
              <div className="silverBasic hardware">
                <div className="swipper-basic-main">
                  <div
                    className="swiper-wrapper hardware-software"
                    ref={activeSliderRef}
                  >
                    <div className="swiper-slide hard">
                      <div className="swiper-text-card">
                        <div className="border-text">
                          <div className="w-full">
                            <div className="solid-primary">
                              <p className="silver-text">Silver Plus</p>
                              <p className="money-text">
                                <span className="rm-text">RM</span>
                                <span className="money-text-set-hardware">
                                  3,390
                                </span>
                              </p>
                              <p className="year-plan">Payable first year</p>
                              <p className="year-plan">RM 990 annually after</p>
                            </div>
                          </div>

                          <div className="silver-card-sub-card">
                            <div className="vertical-set">
                              {/* Additional features */}
                              <div className="additional-featured-buttons">
                                <h3 className="header-2">
                                  <button
                                    className="button-additional"
                                    onClick={() =>
                                      setGoldAdditionalOpen(!goldAdditionalOpen)
                                    }
                                  >
                                    <span
                                      className={`additional-features ${
                                        goldAdditionalOpen ? "open" : ""
                                      }`}
                                    >
                                      Additional features
                                    </span>

                                    <img
                                      src={ArrowDownImage}
                                      className={`ArrowDownImage ${
                                        goldAdditionalOpen ? "rotated" : ""
                                      }`}
                                      alt="arrow"
                                    />
                                  </button>
                                </h3>

                                <div
                                  className={`feature-card-main ${
                                    goldAdditionalOpen ? "open" : "close"
                                  }`}
                                >
                                  <div className="feature-card">
                                    <img
                                      src={roundTickImage}
                                      className="roundTickImage"
                                      alt="arrow"
                                    />
                                    <p className="platform-text">
                                      Delivery Platform Integration
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <h3 className="header-3">
                                <button
                                  className="button-include"
                                  onClick={() => setSilverOpen(!silverOpen)}
                                >
                                  <span className="include-text">
                                    What’s included :
                                  </span>
                                  <img
                                    src={ArrowDownImage}
                                    alt="arrow"
                                    className={`ArrowDownImage ${
                                      silverOpen ? "rotated" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              <div
                                className={`included-content ${
                                  silverOpen ? "open" : ""
                                }`}
                              >
                                <Included />
                              </div>
                            </div>
                          </div>

                          <div className="request-free-demo-button-sub">
                            <span className="free-demo-button-set">
                              Request Free Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-text-card pro">
                        <div className="border-text">
                          <div className="w-full">
                            <div className="solid-primary">
                              <p className="silver-text">Silver Pro</p>
                              <p className="money-text">
                                <span className="rm-text">RM</span>
                                <span className="money-text-set-hardware">
                                  3,490
                                </span>
                              </p>
                              <p className="year-plan">Payable first year</p>
                              <p className="year-plan">RM 990 annually after</p>
                            </div>
                          </div>

                          <div className="silver-card-sub-card">
                            <div className="vertical-set">
                              {/* Additional features */}
                              <div className="additional-featured-buttons">
                                <h3 className="header-2">
                                  <button
                                    className="button-additional"
                                    onClick={() =>
                                      setGoldAdditionalOpen(!goldAdditionalOpen)
                                    }
                                  >
                                    <span
                                      className={`additional-features ${
                                        goldAdditionalOpen ? "open" : ""
                                      }`}
                                    >
                                      Additional features
                                    </span>

                                    <img
                                      src={ArrowDownImage}
                                      className={`ArrowDownImage ${
                                        goldAdditionalOpen ? "rotated" : ""
                                      }`}
                                      alt="arrow"
                                    />
                                  </button>
                                </h3>

                                <div
                                  className={`feature-card-main ${
                                    goldAdditionalOpen ? "open" : "close"
                                  }`}
                                >
                                  <div className="feature-card">
                                    <img
                                      src={roundTickImage}
                                      className="roundTickImage"
                                      alt="arrow"
                                    />
                                    <p className="platform-text">
                                      Delivery Platform Integration
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <h3 className="header-3">
                                <button
                                  className="button-include"
                                  onClick={() => setSilverOpen(!silverOpen)}
                                >
                                  <span className="include-text">
                                    What’s included :
                                  </span>
                                  <img
                                    src={ArrowDownImage}
                                    alt="arrow"
                                    className={`ArrowDownImage ${
                                      silverOpen ? "rotated" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              <div
                                className={`included-content ${
                                  silverOpen ? "open" : ""
                                }`}
                              >
                                <Included />
                              </div>
                            </div>
                          </div>

                          <div className="request-free-demo-button-sub">
                            <span className="free-demo-button-set">
                              Request Free Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-text-card plus">
                        <div className="border-text">
                          <div className="w-full">
                            <div className="solid-primary">
                              <p className="silver-text">Gold Plus</p>
                              <p className="money-text">
                                <span className="rm-text">RM</span>
                                <span className="money-text-set-hardware">
                                  3,890
                                </span>
                              </p>
                              <p className="year-plan">Payable first year</p>
                              <p className="year-plan">
                                RM 1,490 annually after
                              </p>
                            </div>
                          </div>

                          <div className="silver-card-sub-card">
                            <div className="vertical-set">
                              {/* Additional features */}
                              <div className="additional-featured-buttons">
                                <h3 className="header-2">
                                  <button
                                    className="button-additional"
                                    onClick={() =>
                                      setGoldAdditionalOpen(!goldAdditionalOpen)
                                    }
                                  >
                                    <span
                                      className={`additional-features ${
                                        goldAdditionalOpen ? "open" : ""
                                      }`}
                                    >
                                      Additional features
                                    </span>

                                    <img
                                      src={ArrowDownImage}
                                      className={`ArrowDownImage ${
                                        goldAdditionalOpen ? "rotated" : ""
                                      }`}
                                      alt="arrow"
                                    />
                                  </button>
                                </h3>

                                <div
                                  className={`feature-card-main ${
                                    goldAdditionalOpen ? "open" : "close"
                                  }`}
                                >
                                  <div className="feature-card">
                                    <img
                                      src={roundTickImage}
                                      className="roundTickImage"
                                      alt="arrow"
                                    />
                                    <p className="platform-text">
                                      Delivery Platform Integration
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <h3 className="header-3">
                                <button
                                  className="button-include"
                                  onClick={() => setSilverOpen(!silverOpen)}
                                >
                                  <span className="include-text">
                                    What’s included :
                                  </span>
                                  <img
                                    src={ArrowDownImage}
                                    alt="arrow"
                                    className={`ArrowDownImage ${
                                      silverOpen ? "rotated" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              <div
                                className={`included-content ${
                                  silverOpen ? "open" : ""
                                }`}
                              >
                                <Included />
                              </div>
                            </div>
                          </div>

                          <div className="request-free-demo-button-sub">
                            <span className="free-demo-button-set">
                              Request Free Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-text-card plus">
                        <div className="border-text">
                          <div className="w-full">
                            <div className="solid-primary">
                              <p className="silver-text">Gold Pro</p>
                              <p className="money-text">
                                <span className="rm-text">RM</span>
                                <span className="money-text-set-hardware">
                                  3,990
                                </span>
                              </p>
                              <p className="year-plan">Payable first year</p>
                              <p className="year-plan">
                                RM 1,490 annually after
                              </p>
                            </div>
                          </div>

                          <div className="silver-card-sub-card">
                            <div className="vertical-set">
                              {/* Additional features */}
                              <div className="additional-featured-buttons">
                                <h3 className="header-2">
                                  <button
                                    className="button-additional"
                                    onClick={() =>
                                      setGoldAdditionalOpen(!goldAdditionalOpen)
                                    }
                                  >
                                    <span
                                      className={`additional-features ${
                                        goldAdditionalOpen ? "open" : ""
                                      }`}
                                    >
                                      Additional features
                                    </span>

                                    <img
                                      src={ArrowDownImage}
                                      className={`ArrowDownImage ${
                                        goldAdditionalOpen ? "rotated" : ""
                                      }`}
                                      alt="arrow"
                                    />
                                  </button>
                                </h3>

                                <div
                                  className={`feature-card-main ${
                                    goldAdditionalOpen ? "open" : "close"
                                  }`}
                                >
                                  <div className="feature-card">
                                    <img
                                      src={roundTickImage}
                                      className="roundTickImage"
                                      alt="arrow"
                                    />
                                    <p className="platform-text">
                                      Delivery Platform Integration
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <h3 className="header-3">
                                <button
                                  className="button-include"
                                  onClick={() => setSilverOpen(!silverOpen)}
                                >
                                  <span className="include-text">
                                    What’s included :
                                  </span>
                                  <img
                                    src={ArrowDownImage}
                                    alt="arrow"
                                    className={`ArrowDownImage ${
                                      silverOpen ? "rotated" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              <div
                                className={`included-content ${
                                  silverOpen ? "open" : ""
                                }`}
                              >
                                <Included />
                              </div>
                            </div>
                          </div>

                          <div className="request-free-demo-button-sub">
                            <span className="free-demo-button-set">
                              Request Free Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-text-card platinum">
                        <div className="border-text">
                          <div className="w-full">
                            <div className="solid-primary">
                              <p className="silver-text">Platinum Plus</p>
                              <p className="money-text">
                                <span className="rm-text">RM</span>
                                <span className="money-text-set-hardware">
                                  5,000
                                </span>
                              </p>
                              <p className="year-plan">Payable two year</p>
                              <p className="year-plan">
                                RM 2,600 biennially after
                              </p>
                            </div>
                          </div>

                          <div className="silver-card-sub-card">
                            <div className="vertical-set">
                              {/* Additional features */}
                              <div className="additional-featured-buttons">
                                <h3 className="header-2">
                                  <button
                                    className="button-additional"
                                    onClick={() =>
                                      setGoldAdditionalOpen(!goldAdditionalOpen)
                                    }
                                  >
                                    <span
                                      className={`additional-features ${
                                        goldAdditionalOpen ? "open" : ""
                                      }`}
                                    >
                                      Additional features
                                    </span>

                                    <img
                                      src={ArrowDownImage}
                                      className={`ArrowDownImage ${
                                        goldAdditionalOpen ? "rotated" : ""
                                      }`}
                                      alt="arrow"
                                    />
                                  </button>
                                </h3>

                                <div
                                  className={`feature-card-main ${
                                    goldAdditionalOpen ? "open" : "close"
                                  }`}
                                >
                                  <div className="feature-card">
                                    <img
                                      src={roundTickImage}
                                      className="roundTickImage"
                                      alt="arrow"
                                    />
                                    <p className="platform-text">
                                      Delivery Platform Integration
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <h3 className="header-3">
                                <button
                                  className="button-include"
                                  onClick={() => setSilverOpen(!silverOpen)}
                                >
                                  <span className="include-text">
                                    What’s included :
                                  </span>
                                  <img
                                    src={ArrowDownImage}
                                    alt="arrow"
                                    className={`ArrowDownImage ${
                                      silverOpen ? "rotated" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              <div
                                className={`included-content ${
                                  silverOpen ? "open" : ""
                                }`}
                              >
                                <Included />
                              </div>
                            </div>
                          </div>

                          <div className="request-free-demo-button-sub">
                            <span className="free-demo-button-set">
                              Request Free Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-text-card best-value hardware">
                        <p className="best-value-text">BEST VALUE</p>

                        <div className="border-text">
                          <div className="w-full">
                            <div className="solid-primary">
                              <p className="silver-text">Platinum Pro</p>
                              <p className="money-text">
                                <span className="rm-text">RM </span>
                                <span className="money-text-set-hardware-platinum">
                                  5,100
                                </span>
                              </p>
                              <p className="year-plan">Payable two year</p>
                              <p className="year-plan">
                                RM 2,600 biennially after
                              </p>
                            </div>
                          </div>

                          <div className="silver-card-sub-card">
                            <div className="vertical-set">
                              {/* Additional features */}
                              <div className="additional-featured-buttons">
                                <h3 className="header-2">
                                  <button
                                    className="button-additional"
                                    onClick={() =>
                                      setGoldAdditionalOpen(!goldAdditionalOpen)
                                    }
                                  >
                                    <span
                                      className={`additional-features ${
                                        goldAdditionalOpen ? "open" : ""
                                      }`}
                                    >
                                      Additional features
                                    </span>

                                    <img
                                      src={ArrowDownImage}
                                      className={`ArrowDownImage ${
                                        goldAdditionalOpen ? "rotated" : ""
                                      }`}
                                      alt="arrow"
                                    />
                                  </button>
                                </h3>

                                <div
                                  className={`feature-card-main ${
                                    goldAdditionalOpen ? "open" : "close"
                                  }`}
                                >
                                  <div className="feature-card">
                                    <img
                                      src={roundTickImage}
                                      className="roundTickImage"
                                      alt="arrow"
                                    />
                                    <p className="platform-text">
                                      Delivery Platform Integration
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <h3 className="header-3">
                                <button
                                  className="button-include"
                                  onClick={() => setSilverOpen(!silverOpen)}
                                >
                                  <span className="include-text">
                                    What’s included :
                                  </span>
                                  <img
                                    src={ArrowDownImage}
                                    alt="arrow"
                                    className={`ArrowDownImage ${
                                      silverOpen ? "rotated" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              <div
                                className={`included-content ${
                                  silverOpen ? "open" : ""
                                }`}
                              >
                                <Included />
                              </div>
                            </div>
                          </div>

                          <div className="request-free-demo-button-sub">
                            <span className="free-demo-button-set">
                              Request Free Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pagination */}
                  <div className="swiper-pagination hardware-pagination">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className={`bullets ${
                          activeIndex === i ? "active-bullet" : ""
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>

                {/* Arrows */}
                <div className="hardware-arrows">
                  <div className="arrow-card-container-hardware">
                    <button className="arrow-buttons-hardware">
                      <img
                        src={ArrowDownImage}
                        alt="arrow"
                        className="arrowbuttonLeft"
                      />
                    </button>
                    <div className="px-three"></div>
                    <button className="arrow-buttons-hardware">
                      <img
                        src={ArrowDownImage}
                        alt="arrow"
                        className="arrowbuttonRight"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPlans;
