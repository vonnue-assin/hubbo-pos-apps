import scannedImageMobile from "../../assets/images/contactless-featureMobile.jpg";
import scannedImageTab from "../../assets/images/contactless-featureTab.jpg";
import qrIconImage from "../../assets/images/qr-code3.png";
import dynamiImage from "../../assets/images/dynamic-qr2.png";
import trash from "../../assets/images/container (1).png";

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
              <div className="content-stores">
                <div className="icon-card">
                  <img src={qrIconImage} className="offlineImage" />
                </div>
                <div className="icon-card-header">
                  <h2 className="icon-header">Table QR Ordering</h2>
                  <p className="icon-header-content">
                    Table QR ordering simplifies the entire dining experience,
                    allowing customers to browse menus, place orders, and pay
                    directly from their smartphones.
                  </p>
                </div>
              </div>
              <div className="content-stores">
                <div className="icon-card">
                  <img src={dynamiImage} alt="offlineImage" />
                </div>
                <div className="icon-card-header">
                  <h2 className="icon-header">Dynamic QR Ordering</h2>
                  <p className="icon-header-content">
                    Designed for table-service F＆Bs, it streamlines operations,
                    reduces manual errors, and enhances efficiency.
                  </p>
                </div>
              </div>
              <div className="content-stores">
                <div className="icon-card">
                  <img src={trash} alt="offlineImage" />
                </div>
                <div className="icon-card-header">
                  <h2 className="icon-header">Order Ahead ＆ Pickup</h2>
                  <p className="icon-header-content">
                    Offer a genuine Grab＆Go experience, allowing your customers
                    to order and pay ahead of time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchFree;
