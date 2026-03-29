/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, forwardRef } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface Props {
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "radio"
    | "checkbox";
  checkedValue?: string;
  placeholder?: string;
  label?: string;
  width?: string;
  height?: string;
  colorBorder?: string;
  colorLabel?: string;
  name?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLSelectElement>;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<any>;
  value?: string | number;
  id?: string;
  className?: string;
  readOnly?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      checkedValue,
      type,
      placeholder,
      label,
      width = "w-full",
      height,
      colorBorder,
      onKeyDown,
      colorLabel,
      name,
      onChange,
      value,
      id,
      disabled,
      className = "",
      readOnly,
      ...rest
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const baseInputClass = `
    ${disabled ? "bg-gray-200 text-black cursor-not-allowed" : "bg-white"} 
    ${colorBorder ? colorBorder : "border-gray-300"}
    border rounded px-2 py-1 min-w-16 focus:border-primary focus:outline-none focus:ring-1 focus:ring-accent placeholder:text-default-text/80
    ${width} ${height} ${className}
  `.trim();

    if (type === "password") {
      return (
        <div className="flex flex-col gap-1">
          {label && (
            <label
              className={`${colorLabel || "text-black"} text-sm font-semibold`}
            >
              {label}
            </label>
          )}
          <div className="relative">
            <input
              ref={ref}
              id={id}
              name={name}
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              disabled={disabled}
              placeholder={placeholder}
              className={baseInputClass}
              readOnly={readOnly}
              {...rest}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`flex ${
          type === "checkbox" || type === "radio"
            ? "flex-row items-center gap-2 h-10"
            : "flex-col gap-1"
        }`}
      >
        {label && type !== "checkbox" && type !== "radio" && (
          <label
            className={`${colorLabel || "text-black"} text-sm font-semibold`}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          value={value}
          checked={type === "radio" ? checkedValue === value : undefined}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={baseInputClass}
          readOnly={readOnly}
          {...rest}
        />
        {label && (type === "checkbox" || type === "radio") && (
          <label
            className={`${
              colorLabel || "text-default-text"
            } text-sm font-semibold`}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

CustomInput.displayName = "Input";
export default CustomInput;
