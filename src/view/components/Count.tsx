import { RiAddLine, RiSubtractLine } from "react-icons/ri";

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
}

export default function Count({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const isMin = quantity <= min;
  const isMax = quantity >= max;

  return (
    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg w-fit shadow-sm">
      <button
        type="button"
        onClick={onDecrement}
        disabled={isMin}
        className={`p-2 transition-all duration-200 rounded-l-lg ${
          isMin
            ? "text-gray-300 cursor-not-allowed"
            : "text-colorTres hover:bg-red-50 hover:text-red-500"
        }`}
      >
        <RiSubtractLine size={20} />
      </button>

      <div className="w-12 text-center">
        <span className="text-lg font-bold text-colorTres">{quantity}</span>
      </div>

      <button
        type="button"
        onClick={onIncrement}
        disabled={isMax}
        className={`p-2 transition-all duration-200 rounded-r-lg ${
          isMax
            ? "text-gray-300 cursor-not-allowed"
            : "text-colorTres hover:bg-green-50 hover:text-green-600"
        }`}
      >
        <RiAddLine size={20} />
      </button>
    </div>
  );
}
