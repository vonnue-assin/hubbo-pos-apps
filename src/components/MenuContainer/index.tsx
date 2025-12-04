import { useState } from "react";

import MenuClick from "../MenuClickSection";
import Solutions from "../Solutions";
import WhyHubbo from "../WhyHubboMenuClickSection";

const MenuContainer = ({ onClose }: { onClose: () => void }) => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showHubbo, setShowHubbo] = useState(false);

  return (
    <>
      {showSolutions ? (
        <Solutions onClose={() => setShowSolutions(false)} />
      ) : showHubbo ? (
        <WhyHubbo onClose={() => setShowHubbo(false)} />
      ) : (
        <MenuClick
          onClose={onClose}
          onOpenSolutions={() => setShowSolutions(true)}
          onOpenHubbo={() => setShowHubbo(true)}
        />
      )}
    </>
  );
};

export default MenuContainer;
