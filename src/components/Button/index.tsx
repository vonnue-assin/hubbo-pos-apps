import React, { useState, ReactNode } from "react";
import "./styles.css";

type ButtonProps = {
  text?: string;
  children?: ((isOpen: boolean) => ReactNode) | ReactNode;
  icon?: ReactNode;
  dropdown?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  text,
  children,
  icon,
  dropdown,
  isActive = false,
  onClick,
  className = "",
}: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (dropdown) setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return (
    <div className="button-wrapper">
      <button
        className={`common-button ${className} ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        {typeof children === "function" ? children(isOpen) : children || text}
        {icon && (
          <span className={`button-icon ${isOpen ? "rotated" : ""}`}>
            {icon}
          </span>
        )}
      </button>

      {dropdown && isOpen && <div className="button-dropdown">{dropdown}</div>}
    </div>
  );
};

export default Button;
