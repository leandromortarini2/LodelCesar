import type { CategoryProps } from "../view/landing/ProductsView/types";

export default function CategoryCard({ categoria, onClick }: CategoryProps) {
  const { label, id, img } = categoria;

  return (
    <div
      className="group cursor-pointer w-full max-w-[200px] overflow-hidden rounded-2xl bg-white shadow-md border border-colorTres/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-colorUno active:scale-95"
      onClick={() => onClick({ label, id })}
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt={label}
          className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center bg-colorTres px-2 py-3 border-t-4 border-colorUno">
        <h3 className="text-sm font-bold uppercase tracking-wider text-center text-white">
          {label}
        </h3>
      </div>
    </div>
  );
}
