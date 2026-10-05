import { LuShoppingCart } from "react-icons/lu";
import useLandingStore from "../../auth/store/storeLanding";

interface Props {
  handleDrawer: () => void;
}

export default function CartButton({ handleDrawer }: Props) {
  const totalProductos = useLandingStore((state) =>
    state.cart.reduce((acc, item) => acc + (item.cantidad ?? 1), 0),
  );

  return (
    <div className="flex justify-end items-center h-full text-sm">
      <button
        onClick={handleDrawer}
        aria-label={`Abrir carrito, ${totalProductos} productos`}
        className="relative flex justify-center items-center w-10 h-10 rounded-full bg-colorTres text-colorUno border-2 border-colorTres shadow-md hover:bg-white hover:text-colorTres hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <LuShoppingCart className="text-xl lg:text-2xl" strokeWidth={2.5} />
        {totalProductos > 0 && (
          <span
            key={totalProductos}
            className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-error text-white text-[11px] font-bold leading-none border-2 border-colorUno animate-bounce [animation-iteration-count:2]"
          >
            {totalProductos > 99 ? "99+" : totalProductos}
          </span>
        )}
      </button>
    </div>
  );
}
