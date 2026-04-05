// import CustomeButton from "../../components/CustomeButton";
import type { Product } from "../view/landing/ProductsView/types";

export default function CardProd({
  producto,
  onClick,
  prodSelected,
}: {
  producto: Product;
  onClick: (prod: Product) => void;
  prodSelected?: Product;
}) {
  const { nombre, descripcion, precio, id } = producto;
  return (
    <div
      className={` bg-white flex-1   ${prodSelected?.id === id ? "border-btn-wp border-2" : "border border-gray-200"} `}
      onClick={() => onClick(producto)}
    >
      <div className="card-body ">
        <h3 className="card-title text-sm font-semibold text-default-text">
          {nombre}
        </h3>
        <p className="text-default-text"> {descripcion}</p>
        <p className="font-semibold w-full text-end text-default-text">
          ${precio}
        </p>
      </div>
    </div>
  );
}
