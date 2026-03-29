import React from "react";

interface Props {
  options?: string[];
  label?: string;
  width?: string;
  height?: string;
  colorBorder?: string;
  colorLabel?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
export default function Select({
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
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className={`${
          colorLabel ? colorLabel : "text-black"
        } text-sm font-semibold`}
      >
        {label}
      </label>
      <select
        id={name}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        className={`${disabled && "bg-gray-200"}  ${
          colorBorder ? colorBorder : "border-black "
        } border p-2  bg-white rounded min-w-16 focus-clean ${width} ${height}`}
      >
        {options?.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
