import React, { useState } from "react";
import MenuClick from "../MenuClick";
import Solutions from "../Solutions";

const MenuContainer = ({ onClose }: { onClose: () => void }) => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showHubbo, setShowHubbo] = useState(false);

  return (
    <>
      {showSolutions ? (
        <Solutions onClose={() => setShowSolutions(false)} />
      ) : (
        <MenuClick
          onClose={onClose}
          onOpenSolutions={() => setShowSolutions(true)}
        />
      )}
    </>
  );
};

export default MenuContainer;
