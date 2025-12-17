import scannedImageMobile from "../../assets/images/contactless-featureMobile.jpg";
import scannedImageTab from "../../assets/images/contactless-featureTab.jpg";

import TouchFreeFeatureCard from "../TouchFreeFeatureCard";
import { touchFreeFeatures } from "../../data/touchFreeData";

import "./styles.css";

const TouchFree = () => {
  return (
    <div className="touchFree-main-section">
      <div className="touchfree-section-wrapper">
        <div className="sub-section-wrapper">
          <h2 className="touch-header">
            Touch Free Convenience for Simplified Ordering
          </h2>

          <div className="image-free-box">
            <img src={scannedImageMobile} className="scannedImageMobile" />
            <img src={scannedImageTab} className="scannedImageTab" />

            <div className="content-store-main">
              {touchFreeFeatures.map((feature) => (
                <TouchFreeFeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchFree;
