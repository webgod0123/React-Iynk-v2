import React, { Children } from "react";

interface ButtonProps {
  cssClasses?: string[];
  styles?: { [key: string]: string };
  onClick?: (event) => void;
  children?: React.ReactNode;
}

const Button = ({ cssClasses, styles, onClick, children }: ButtonProps) => {
  return (
    <button
      className={cssClasses ? cssClasses.join(" ") : ""}
      style={{ ...styles }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
