import { IoMdInformationCircleOutline } from "react-icons/io";

interface Prop {
  text: string;
  color: "info" | "error" | "success";
}

export default function InfoText({ text, color }: Prop) {
  return (
    <div
      className={`${
        color === "info"
          ? "text-secondary"
          : color === "error"
          ? "text-error"
          : "text-success"
      } flex gap-1`}
    >
      <IoMdInformationCircleOutline />
      <p className="text-xs ">{text}</p>
    </div>
  );
}
