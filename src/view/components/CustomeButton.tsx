import React from "react";

interface props {
  text?: string;
  Icon?: React.ElementType;
  width?: string;
  height?: string;
  positionIcon?: "left" | "right";
  claseButton: "primary" | "secondary" | "iconButton";
  hover?: string;
  color?: string;
  border?: boolean;
  borderColor?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  sizeText?: string;
}

const CustomeButton = ({
  text,
  Icon,
  type,
  width,
  height,
  positionIcon,
  claseButton,
  hover,
  color,
  border,
  onClick: onclick,
  disabled,
  sizeText,
  borderColor,
}: props) => {
  const disabledStyles =
    "bg-gray-primary opacity-75 cursor-not-allowed pointer-events-none border-gray-primary";

  return (
    <div className="flex gap-10">
      {claseButton === "primary" && Icon && (
        <button
          disabled={disabled}
          type={type ?? "button"}
          onClick={onclick}
          className={`
            justify-center items-center text-white text-bold py-2 px-3 flex gap-2 rounded text-center font-semibold
            ${sizeText ? sizeText : "text-xs"}
            ${positionIcon === "left" ? "" : "flex-row-reverse"}
            ${width} ${height}
            ${
              disabled
                ? disabledStyles
                : `${color ? color : "bg-primary"} ${
                    hover ? hover : "hover:bg-primary/80"
                  } cursor-pointer`
            }
          `}
        >
          <Icon className="w-5 h-5" /> {text}
        </button>
      )}

      {claseButton === "primary" && !Icon && (
        <button
          type={type ?? "button"}
          disabled={disabled}
          onClick={onclick}
          className={`
            text-white py-2 px-3 rounded text-center flex justify-center items-center font-semibold
            ${sizeText ? sizeText : "text-xs"}
            ${width} ${height}
            ${
              disabled
                ? disabledStyles
                : `${color ? color : "bg-primary"} ${
                    hover ? hover : "hover:bg-primary/80"
                  } cursor-pointer`
            }
          `}
        >
          {text}
        </button>
      )}

      {claseButton === "secondary" && Icon && (
        <button
          disabled={disabled}
          type={type}
          onClick={onclick}
          className={`
            py-2 px-3 rounded text-center flex items-center justify-center gap-2 font-semibold bg-white
            ${sizeText ? sizeText : "text-xs"}
            ${positionIcon === "left" ? "" : "flex-row-reverse"}
            ${width} ${height}
            ${
              disabled
                ? `${disabledStyles} text-white`
                : `cursor-pointer ${color ? color : "text-primary"} ${
                    hover ? hover : "hover:bg-white-secondary"
                  } ${
                    border
                      ? `border ${borderColor ? borderColor : "border-primary"}`
                      : ""
                  }`
            }
          `}
        >
          <Icon className="w-5 h-5" /> {text}
        </button>
      )}

      {claseButton === "secondary" && !Icon && (
        <button
          disabled={disabled}
          type={type ?? "button"}
          onClick={onclick}
          className={`
            flex justify-center items-center py-2 px-3 rounded text-center font-semibold 
            ${sizeText ? sizeText : "text-xs"}
            ${width} ${height}
            ${
              disabled
                ? `${disabledStyles} text-white`
                : `bg-white cursor-pointer ${color ? color : "text-primary"} ${
                    hover ? hover : "hover:bg-white-secondary"
                  } ${
                    border
                      ? `border ${borderColor ? borderColor : "border-primary"}`
                      : ""
                  }`
            }
          `}
        >
          {text}
        </button>
      )}

      {claseButton === "iconButton" && Icon && (
        <button
          disabled={disabled}
          type={type}
          onClick={onclick}
          className={`
            p-2 rounded text-center flex items-center justify-center transition-all duration-300
            ${width} ${height}
            ${
              disabled
                ? disabledStyles
                : `bg-gray-200 cursor-pointer ${
                    color ? color : "text-primaryGreen"
                  } ${hover ? hover : "hover:bg-white-secondary"} ${
                    border ? "border-gray-300 border " : ""
                  }`
            }
          `}
        >
          <Icon />
        </button>
      )}
    </div>
  );
};

export default CustomeButton;
