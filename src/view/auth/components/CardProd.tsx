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
      className={`card bg-base-100 flex-1  h-48 ${prodSelected?.id === id ? "border-success border-2" : "border border-gray-200"} `}
      onClick={() => onClick(producto)}
    >
      <div className="card-body ">
        <h3 className="card-title text-sm font-semibold">{nombre}</h3>
        <p>{descripcion}</p>
        <p className="font-semibold w-full text-end">${precio}</p>
        {/* <div className="card-actions justify-end">
          <CustomeButton claseButton="secondary" text="Agregar" />
          <button className="btn w-full btn-primary border-none shadow-sm   text-white bg-colorTres">
            Agregar
          </button>
        </div> */}
      </div>
    </div>
  );
}
