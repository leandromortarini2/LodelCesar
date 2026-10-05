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
  const seleccionado = prodSelected?.id === id;
  const precioFormateado = Number(precio).toLocaleString("es-AR");

  return (
    <div
      className={`bg-white flex-1 cursor-pointer rounded-xl overflow-hidden shadow-sm border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] ${
        seleccionado
          ? "border-btn-wp bg-btn-wp/5 shadow-md"
          : "border-transparent hover:border-colorUno"
      }`}
      onClick={() => onClick(producto)}
    >
      <div className="flex flex-col gap-2 px-3 py-4 h-full min-h-32">
        <h3 className="text-sm font-bold text-colorTres leading-snug break-words hyphens-auto">
          {nombre}
        </h3>
        {descripcion && (
          <p className="text-default-text/70 text-xs break-words">
            {descripcion}
          </p>
        )}
        <p className="mt-auto self-end rounded-full bg-colorUno px-3 py-1 text-sm font-bold text-colorTres">
          ${precioFormateado}
        </p>
      </div>
    </div>
  );
}
