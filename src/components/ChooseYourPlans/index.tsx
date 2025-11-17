import { useState } from "react";

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

  const [silverOpen, setSilverOpen] = useState(false);
  const [goldOpen, setGoldOpen] = useState(false);

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

            <div className="silverBasic">
              <div className="swipper-basic-main">
                <div className="swiper-wrapper">
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
                                className="button-include"
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
                        <div className="request-free-demo-button-sub">
                          <span className="free-demo-button-set">
                            Request Free Demo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-text-card">
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
                            <div>
                              <h3 className="header-2">
                                <button className="button-additional">
                                  <span className="additional-features">
                                    Additional features
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
                              <div className="feature-card-main">
                                <div className="feature-card">
                                  <img
                                    src={roundTickImage}
                                    alt="roundTickImage"
                                    className="roundTickImage"
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
                            <div>
                              <h3 className="header-2">
                                <button className="button-additional">
                                  <span className="additional-features">
                                    Additional features
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
                              <div className="feature-card-main">
                                <div className="feature-card">
                                  <img
                                    src={roundTickImage}
                                    alt="roundTickImage"
                                    className="roundTickImage"
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

                        <div className="request-free-demo-button-sub">
                          <span className="free-demo-button-set">
                            Request Free Demo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-text-card">
                      <div className="border-text">
                        <div className="w-full">
                          <div className="solid-primary">
                            <p className="silver-text">Silver Plus</p>
                            <p className="money-text">
                              <span className="rm-text">RM </span>
                              <span className="money-text-set">3,390</span>
                            </p>
                            <p className="year-plan">RM 990 annually after</p>
                          </div>
                        </div>

                        <div className="silver-card-sub-card">
                          <div className="vertical-set">
                            <div>
                              <h3 className="header-2">
                                <button className="button-additional">
                                  <span className="additional-features">
                                    Additional features
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
                              <div className="feature-card-main">
                                <div className="feature-card-hardware">
                                  <img
                                    src={roundTickImage}
                                    alt="roundTickImage"
                                    className="roundTickImage"
                                  />
                                  <p className="platform-text">
                                    1x Single-screen POS device with built-in
                                    NFC Reader
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

                        <div className="request-free-demo-button-sub">
                          <span className="free-demo-button-set">
                            Request Free Demo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination">
                  <span className="bullets"></span>
                  <span className="bullets"></span>
                  <span className="bullets"></span>
                </div>
              </div>
              <div className="arrow-cards">
                <div className="arrow-card-container">
                  <button className="arrow-buttons">
                    <img
                      src={ArrowDownImage}
                      alt="ArrowDownImage"
                      className="arrowbuttonLeft"
                    />
                  </button>
                  <div className="px-three"></div>
                  <button className="arrow-buttons">
                    <img
                      src={ArrowDownImage}
                      alt="ArrowDownImage"
                      className="arrowbuttonRight"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPlans;
