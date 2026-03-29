import { FaCartShopping } from "react-icons/fa6";

interface Props {
  handleDrawer: () => void;
}

export default function CartButton({ handleDrawer }: Props) {
  return (
    <div className="flex justify-end items-center h-full gap-20 text-sm  ">
    
      <button onClick={handleDrawer}
         className="btn btn-circle bg-colorUno text-colorTres  border-colorTres border-2 w-12 h-12 hover:bg-colorDos hover:text-default-text  transition-colors duration-300 flex justify-center items-center">
        <FaCartShopping className="text-2xl" />
</button>
    </div>
  );
}
