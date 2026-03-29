/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Props {
  name: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  label?: string;
  width?: string;
  height?: string;
  colorBorder?: string;
  colorLabel?: string;
  disabled?: boolean;
  [x: string]: any;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      name,
      value,
      onChange,
      placeholder,
      label,
      width,
      height,
      colorBorder,
      colorLabel,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            className={`${
              colorLabel ? colorLabel : "text-black"
            } text-sm font-semibold`}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
          className={`${disabled && "bg-gray-200"} ${
            colorBorder ? colorBorder : "border-black"
          } border input rounded border-accent pl-2 py-1 min-w-16 min-h-32 
            focus:border-primary focus:border focus:outline-none
            focus:ring-[1px] focus:ring-accent ${width} ${height}`}
        />
      </div>
    );
  }
);

export default Textarea;
