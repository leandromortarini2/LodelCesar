import Button from "../CustomeButton";

interface IProp {
  handle: () => void;
  onSubmit: () => void;
  open: boolean;
}
export const Drawer = ({ handle, open, onSubmit }: IProp) => {
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
          className={`w-full lg:w-1/3 px-14 flex gap-5 py-5 flex-col  overflow-y-auto  bg-white  transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex justify-end">
            <Button
              onClick={handle}
              text="X"
              width="w-full"
              claseButton="secondary"
            />
          </div>

          <div className="flex flex-col gap-10 2xl:gap-12 justify-start items-center  h-full">
            <div className="w-full flex justify-center ">
              <h2 className="text-xl 2xl:text-2xl font-semibold">Carrito</h2>
            </div>
            <Button
              claseButton="primary"
              text="Enviar Pedido"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};
