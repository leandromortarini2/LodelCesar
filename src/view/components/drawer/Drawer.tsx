import { IoClose } from "react-icons/io5";
import type { Product } from "../../auth/view/landing/ProductsView/types";
import Button from "../CustomeButton";
import CartCard from "./CartCard";

interface IProp {
  handle: () => void;
  onSubmit: () => void;
  open: boolean;
  cart: Product[];
}
export const Drawer = ({ handle, open, onSubmit, cart }: IProp) => {
  return (
    <>
      <div
        className={`fixed  inset-0 bg-black/50 z-50 transition-opacity flex justify-end duration-300 ease-in-out  ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handle}
      >
        <div
          className={`w-full lg:w-1/3 px-6 flex gap-5 py-5 flex-col  overflow-y-auto  bg-[#f9f9f9]  transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex items-center justify-between">
            <h2 className="text-xl 2xl:text-2xl font-semibold">Carrito</h2>
            <Button
              onClick={handle}
              Icon={IoClose}
              width="w-full"
              claseButton="secondary"
              color="colorTres"
              colorBg="bg-[#f9f9f9]"
            />
          </div>

          <div className="flex flex-col pb-5 gap-10 2xl:gap-12 justify-start items-center h-full">
            <div className="flex-col flex gap-4 h-full w-full">
              {cart.map((prod) => (
                <CartCard prod={prod} key={prod.id} />
              ))}
            </div>
            <Button
              claseButton="primary"
              text="Enviar Pedido"
              onClick={onSubmit}
              color="bg-colorTres"
              containerClass="w-full"
              width="w-full"
              height="h-12"
              sizeText="text-base"
            />
          </div>
        </div>
      </div>
    </>
  );
};
