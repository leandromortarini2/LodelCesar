import { IoTrash } from "react-icons/io5";
import type { Product } from "../../auth/view/landing/ProductsView/types";
import Count from "../Count";
import CustomeButton from "../CustomeButton";

interface CartCardProps {
  prod: Product & { cantidad?: number };
  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: (id: number) => void;
}

export default function CartCard({
  prod,
  onIncrease,
  onDecrease,
  onDelete,
}: CartCardProps) {
  const { nombre, descripcion, precio, cantidad = 1, categoria, id } = prod;
  const subtotal = Number(precio) * cantidad;

  return (
    <div className="p-3 flex flex-col gap-3 bg-white border border-colorBorder rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-sm font-bold text-colorTres">
            {categoria === "Sanguche de Milanesa" && `${categoria} - `} {nombre}
          </p>
          <p className="text-xs text-gray-400 font-medium">${precio} c/u</p>
        </div>
        <CustomeButton
          claseButton="secondary"
          Icon={IoTrash}
          color="text-error"
          onClick={() => onDelete(id)}
        />
      </div>

      {descripcion && (
        <p className="text-xs text-gray-500 line-clamp-1 italic">
          {descripcion}
        </p>
      )}

      <div className="w-full flex items-center justify-between pt-1">
        <Count
          quantity={cantidad}
          onIncrement={onIncrease}
          onDecrement={onDecrease}
        />
        <p className="text-base font-bold ">$ {subtotal.toLocaleString()}</p>
      </div>
    </div>
  );
}
