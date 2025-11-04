import hubboposImage from "../../assets/images/hubbopos-logo-sidenav.8550feba.svg";
import CloseImage from "../../assets/images/close.cf72762d.svg";

import "./styles.css";

type MenuClickProps = {
  onClose: () => void;
};

const MenuClick: React.FC<MenuClickProps> = ({ onClose }) => {
  return (
    <div className="menuClick-main-container">
      <div className="menuclick-sub-container">
        <div className="menuclick-relative">
          <div className="menuclick-width">
            <div className="menuclick-height">
              <div className="hubbopos-card-menu">
                <span>
                  <img
                    src={hubboposImage}
                    alt="HubboPOS"
                    className="hubboposImageI"
                  />
                </span>
                <button onClick={onClose} className="closeButton">
                  <img src={CloseImage} alt="Close" className="CloseImage" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuClick;
