import qrIconImage from "../../assets/images/qr-code2.png";
import dynamicQr from "../../assets/images/dynamic-qr.png";
import container from "../../assets/images/container.png";

import "./styles.css";

const TableOrder = () => {
  return (
    <div className="store-container-support">
      <div className="store-sub-container">
        <div className="store-box-support">
          <div className="content-card-store">
            <div className="content-store">
              <div className="icon-card">
                <img src={qrIconImage} alt="offlineImage" />
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
            <div className="content-store">
              <div className="icon-card">
                <img src={dynamicQr} alt="deskImage" />
              </div>
              <div className="icon-card-header">
                <h2 className="icon-header">Dynamic QR Ordering</h2>
                <p className="icon-header-content">
                  Designed for table-service F＆Bs, it streamlines operations,
                  reduces manual errors, and enhances efficiency.
                </p>
              </div>
            </div>
            <div className="content-store">
              <div className="icon-card">
                <img src={container} alt="InfoImage" />
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
  );
};

export default TableOrder;
