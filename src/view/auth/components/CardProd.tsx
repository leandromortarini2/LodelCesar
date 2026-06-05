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
      className={`bg-white flex-1 ${
        prodSelected?.id === id
          ? "border-btn-wp border-2"
          : "border border-gray-200"
      }`}
      onClick={() => onClick(producto)}
    >
      <div className="flex flex-col gap-5 px-2 py-4  h-full min-h-32">
        <h3 className="text-sm font-semibold text-default-text leading-snug break-words hyphens-auto">
          {nombre}
        </h3>
        <p className="text-default-text text-sm break-words">{descripcion}</p>
        <p className="font-semibold w-full text-end text-default-text mt-auto">
          ${precio}
        </p>
      </div>
    </div>
  );
}
