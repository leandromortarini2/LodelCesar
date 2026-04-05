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
      className={`card bg-base-100 flex-1   ${prodSelected?.id === id ? "border-btn-wp border-2" : "border border-gray-200"} `}
      onClick={() => onClick(producto)}
    >
      <div className="card-body ">
        <h3 className="card-title text-sm font-semibold">{nombre}</h3>
        <p>{descripcion}</p>
        <p className="font-semibold w-full text-end">${precio}</p>
      </div>
    </div>
  );
}
