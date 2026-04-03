import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import CustomeButton from "../../components/CustomeButton";

interface IPropsModal {
  close?: () => void;
  title?: string;
  children: React.ReactNode;
  modalWidth?: string;
  buttonClose?: boolean;
  colorBg?: string;
}

export const Modal: React.FC<IPropsModal> = ({
  close,
  title,
  children,
  modalWidth,
  buttonClose,
  colorBg,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 "
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col items-center  p-8 ${colorBg ? colorBg : "bg-white"} rounded-lg shadow-xl ${
          modalWidth ? modalWidth : "w-full max-w-3xl"
        }`}
      >
        {buttonClose && (
          <div className="flex items-start justify-end w-full h-10 ">
            <CustomeButton
              onClick={close}
              Icon={RiCloseCircleLine}
              color="white"
              claseButton="secondary"
            />
          </div>
        )}
        {title && (
          <h3 className="mb-6 text-2xl font-semibold text-center text-primaryBlue">
            {title}
          </h3>
        )}

        {children}
      </div>
    </div>
  );
};
