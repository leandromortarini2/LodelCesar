import type { CategoryProps } from "../view/landing/ProductsView/types";

export default function CategoryCard({ categoria, onClick }: CategoryProps) {
  //   const { label, icon } = categoria;
  const { label, id, img } = categoria;

  return (
    <div className="group cursor-pointer">
      <div
        className="flex flex-col items-center justify-center  bg-colorTres/10 rounded-2xl shadow-sm  "
        onClick={() => onClick({ label, id })}
      >
        <img src={img} alt="" className="rounded-t-2xl h-24 w-full " />
        <div className="p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-center">
            {label}
          </h3>
        </div>
      </div>
    </div>
  );
}
