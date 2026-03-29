import { IoMdInformationCircleOutline } from "react-icons/io";

interface Props {
  text: string;
  colorIcon?: string;
  width?: string;
}

export default function Tooltip({ text, colorIcon, width }: Props) {
  return (
    <div className="tooltip-container z-50">
      <div className="relative">
        <div className="group peer relative z-10 p-1">
          <IoMdInformationCircleOutline
            className={`text-xl ${colorIcon ? colorIcon : "text-tertiary"}`}
          />
        </div>
        <div
          className={` ${width ? width : "w-40"}
            absolute left-1/2  -translate-x-1/2 rounded bg-tertiary p-3  text-sm opacity-0 before:absolute before:-bottom-2 before:left-1/2 before:size-4 before:-translate-x-1/2 before:rotate-45 before:bg-tertiary peer-hover:bottom-[3.3rem] peer-hover:opacity-100 peer-hover:duration-500 text-white-primary`}
        >
          <p className="text-center font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
}
