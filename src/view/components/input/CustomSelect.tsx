import React, { forwardRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  label?: string;
  width?: string;
  height?: string;
  colorBorder?: string;
  colorLabel?: string;
}

const CustomSelect = forwardRef<HTMLSelectElement, Props>(
  (
    {
      options,
      label,
      width,
      height,
      colorBorder,
      colorLabel,
      disabled,
      name,
      value,
      onChange,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={`flex flex-col gap-1 ${width}`}>
        <label
          htmlFor={name}
          className={`${
            colorLabel ? colorLabel : "text-black"
          } text-sm font-semibold`}
        >
          {label}
        </label>

        <div className="relative flex items-center">
          <select
            id={name}
            ref={ref}
            disabled={disabled}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`${disabled ? "bg-gray-200" : "bg-white"} ${
              colorBorder ? colorBorder : "border-gray-300"
            } border p-2 pr-8 rounded min-w-16 focus-clean appearance-none w-full ${height}`}
            {...rest}
          >
            {options?.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <IoIosArrowDown size={18} />
          </div>
        </div>
      </div>
    );
  },
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
