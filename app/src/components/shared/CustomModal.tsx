import React from "react";
import Popup from "reactjs-popup";

interface CustomModalProps {
  cssClasses?: string[];
  styles?: any;
  maxWidth?: string;
  maxHeight?: string;
  children?: React.ReactNode;
  triggerComponent?: React.ReactNode;
  position?: any;
  isShowModal?: boolean;
}

const CustomModal = ({
  cssClasses,
  styles,
  maxWidth,
  maxHeight,
  children,
  triggerComponent,
  position,
  isShowModal,
}: CustomModalProps) => {
  return (
    <Popup
      trigger={<div>{triggerComponent}</div>}
      position={position}
      closeOnDocumentClick
    >
      {isShowModal
        ? children
        : (close) => {
          close();
        }}
    </Popup>
  );
};

export default CustomModal;
