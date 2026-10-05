import React, { useEffect } from "react";
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
  useEffect(() => {
    if (!close) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex flex-col items-center gap-4  py-12 px-10 rounded-2xl ${colorBg ? colorBg : "bg-white"}   shadow-xl ${
          modalWidth ? modalWidth : "w-full max-w-3xl"
        }`}
      >
        <div className="flex items-start justify-between w-full ">
          {title && (
            <h3 className=" text-2xl font-semibold text-center text-default-text">
              {title}
            </h3>
          )}
          {buttonClose && (
            <CustomeButton
              onClick={close}
              Icon={IoMdCloseCircleOutline}
              color="text-error"
              colorBg="bg-transparent"
              hover="hover:bg-error/10"
              claseButton="secondary"
            />
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
