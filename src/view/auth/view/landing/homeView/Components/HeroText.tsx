import { IoIosArrowForward } from "react-icons/io";
import Button from "../../../../../components/CustomeButton";
import HeroImg from "./HeroImg";
import { FaWhatsapp } from "react-icons/fa6";

interface Props {
  handleDrawer: () => void;
}
export default function HeroText({ handleDrawer }: Props) {
  return (
    <div className="px-4  lg:px-0 lg:w-1/2  items-center h-full  flex  md:justify-center lg:justify-end">
      <div className=" md:w-3/4 2xl:w-3/5 space-y-10 md:space-y-8">
        <div className="lg:hidden w-full flex flex-col items-center gap-1 justify-center ">
          <HeroImg />
          <div className=" flex flex-col items-center space-y-3 text-center lg:text-start">
            <h2 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-colorTres">
              Comidas Caceras
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base lg:text-base 2xl:text-lg tracking-wider pr-3">
          <span className="font-semibold">
            ¡Anímate a probar lo mejor de nuestra cocina!
          </span>
          <br />
          Disfruta de un menú variado con pizzas, empanadas, sándwiches de
          milanesa y hamburguesas, además de nuestros platos especiales del día.
        </p>
        <div className="w-full flex justify-between md:justify-start gap-3">
          <Button
            onClick={handleDrawer}
            text="Ver Comidas"
            claseButton="primary"
            Icon={IoIosArrowForward}
            positionIcon="right"
            color="bg-colorTres"
          />
          <Button
            text="Consultar Plato del Día"
            claseButton="secondary"
            border
            Icon={FaWhatsapp}
            positionIcon="right"
            color="text-colorTres"
            borderColor="border-colorTres"
          />
        </div>
      </div>
    </div>
  );
}
