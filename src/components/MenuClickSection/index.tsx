import React from "react";
import MenuHeader from "../MenuHeader";
import MenuLinks from "../MenuLinks";
import MenuFooterButtons from "../MenuFooterButtons";

import "./styles.css";

type MenuClickProps = {
  onClose: () => void;
  onOpenSolutions: () => void;
  onOpenHubbo: () => void;
};

const MenuClick: React.FC<MenuClickProps> = ({
  onClose,
  onOpenSolutions,
  onOpenHubbo,
}) => {
  return (
    <div className="menuClick-main-container">
      <div className="menuclick-sub-container">
        <div className="menuclick-relative">
          <div className="menuclick-width">
            <div className="menuclick-height">
              <MenuHeader onClose={onClose} />
              <MenuLinks
                onOpenSolutions={onOpenSolutions}
                onOpenHubbo={onOpenHubbo}
              />
            </div>
          </div>

          <MenuFooterButtons />
        </div>
      </div>
    </div>
  );
};

export default MenuClick;
