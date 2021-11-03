import React, { Children } from "react";

type StatusTypes = "button" | "submit" | "reset";

interface ButtonProps {
  cssClasses?: string[];
  styles?: { [key: string]: string };
  onClick?: (event) => void;
  children?: React.ReactNode;
  type?: StatusTypes;
  disabled?: boolean;
}

const Button = ({ cssClasses, styles, onClick, children, type, disabled }: ButtonProps) => {
  return (
    <button
      className={cssClasses ? cssClasses.join(" ") : ""}
      style={{ ...styles }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
