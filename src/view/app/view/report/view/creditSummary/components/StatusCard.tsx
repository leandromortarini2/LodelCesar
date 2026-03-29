import CustomeTitle from "../../../../../components/CustomeTitle";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  status: "Sin antecedentes" | "Con antecedentes";
}

export default function StatusCard({ status }: Props) {
  return (
    <>
      {status === "Sin antecedentes" ? (
        <div className="w-1/3 h-48 bg-success p-4 rounded-lg text-white flex flex-col gap-2 justify-center items-center">
          <CustomeTitle
            title="Sin antecedentes"
            type="h3"
            font="semibold"
            color="text-white"
          />
          <FaCheck className="text-6xl" />
        </div>
      ) : (
        <div className="w-1/3 h-48 bg-error p-4 rounded-lg text-white flex flex-col gap-2 justify-center items-center">
          <CustomeTitle
            title="Con antecedentes"
            type="h3"
            font="semibold"
            color="text-white"
          />
          <IoCloseSharp className="text-6xl" />
        </div>
      )}
    </>
  );
}
