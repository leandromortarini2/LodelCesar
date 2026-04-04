import type { Product } from "../../auth/view/landing/ProductsView/types";
import Count from "../Count";

export default function CartCard({ prod }: { prod: Product }) {
  const { nombre, descripcion, precio } = prod;
  return (
    <div className=" p-2 flex flex-col gap-2 bg-white border border-colorBorder rounded-md">
      <p className="text-sm font-medium">{nombre}</p>
      <p className="text-sm ">{descripcion}</p>
      <div className="w-full  flex items-center justify-between">
        <Count />
        <p className="text-sm font-semibold">$ {precio}</p>
      </div>
    </div>
  );
}
