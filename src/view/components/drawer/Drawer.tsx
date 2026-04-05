import { IoClose } from "react-icons/io5";
import type { Product } from "../../auth/view/landing/ProductsView/types";
import Button from "../CustomeButton";
import CartCard from "./CartCard";

interface IProp {
  onSubmit: () => void;
  open: boolean;
  cart: Product[];
  updateQuantity: (id: number, delta: number) => void;
  totalCart: number;
  onDeleteProdCart: (id: number) => void;
  handleClose: () => void;
}

export const Drawer = ({
  open,
  onSubmit,
  cart,
  updateQuantity,
  totalCart,
  onDeleteProdCart,
  handleClose,
}: IProp) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity flex justify-end duration-300 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full lg:w-1/3 px-6 flex gap-5 py-5 flex-col overflow-y-auto bg-[#f9f9f9] transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex items-center justify-between">
            <h2 className="text-xl 2xl:text-2xl font-semibold text-colorTres">
              Mi Pedido
            </h2>
            <Button
              onClick={handleClose}
              Icon={IoClose}
              claseButton="secondary"
              color="colorTres"
              colorBg="bg-[#f9f9f9]"
            />
          </div>

          <div className="flex flex-col pb-5 gap-6 justify-between h-full">
            <div className="flex-col flex gap-4 w-full">
              {cart.length > 0 ? (
                cart.map((prod) => (
                  <CartCard
                    prod={prod}
                    key={prod.id}
                    onIncrease={() => updateQuantity(prod.id, 1)}
                    onDecrease={() => updateQuantity(prod.id, -1)}
                    onDelete={onDeleteProdCart}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500 mt-10">
                  Tu pedido está vacío
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center px-2">
                <span className="text-lg font-medium text-gray-600">
                  Total:
                </span>
                <span className="text-2xl font-bold ">
                  $ {totalCart.toLocaleString()}
                </span>
              </div>

              <Button
                claseButton="primary"
                text={"Enviar Pedido por WhatsApp"}
                onClick={onSubmit}
                containerClass="w-full"
                width="w-full"
                height="h-12"
                sizeText="text-base font-semibold"
                disabled={cart.length === 0}
                color="bg-btn-wp"
                hover="hover:bg-btn-wp/90"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
