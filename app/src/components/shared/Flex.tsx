import React from "react";

interface FlexProps {
  direction: any;
  justifyContent: string;
  alignItems: string;
  styles?: { [key: string]: string };
  cssClasses?: string[];
  children: React.ReactNode;
}

const Flex = ({
  direction,
  justifyContent,
  alignItems,
  styles,
  cssClasses,
  children,
}: FlexProps) => {
  return (
    <div
      className={cssClasses ? cssClasses.join(" ") : ""}
      style={{
        ...styles,
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
