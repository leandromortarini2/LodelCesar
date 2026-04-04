import { HiMinus, HiPlus } from "react-icons/hi2";
import CustomeButton from "./CustomeButton";

export default function Count({ count, setCount }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      <CustomeButton claseButton="secondary" Icon={HiMinus} border />
      <div className=" bg-red-500 py-2 px-4 flex justify-center items-center">
        {count || 1}
      </div>
      <CustomeButton claseButton="secondary" Icon={HiPlus} border />
    </div>
  );
}
