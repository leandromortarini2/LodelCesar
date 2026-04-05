import React from "react";
import CustomeButton from "../../components/CustomeButton";
import { IoMdCloseCircleOutline } from "react-icons/io";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20  "
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col items-center gap-4  py-12 px-10 ${colorBg ? colorBg : "bg-white"} h-screen  shadow-xl ${
          modalWidth ? modalWidth : "w-full max-w-3xl"
        }`}
      >
        <div className="flex items-start justify-between w-full ">
          {title && (
            <h3 className=" text-2xl font-semibold text-center text-primaryBlue">
              {title}
            </h3>
          )}
          {buttonClose && (
            <CustomeButton
              onClick={close}
              Icon={IoMdCloseCircleOutline}
              color="white"
              claseButton="secondary"
            />
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
