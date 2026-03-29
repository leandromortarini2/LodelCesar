import { CiLogin } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../../../../components/CustomeButton";
import HeroImg from "./HeroImg";

interface Props {
  handleDrawer: () => void;
}
export default function HeroText({ handleDrawer }: Props) {
  return (
    <div className="px-4  lg:px-0 lg:w-1/2 h-full  flex items-center md:justify-center lg:justify-end">
      <div className=" md:w-3/4 2xl:w-3/5 space-y-6 md:space-y-8">
        <div className=" md:space-y-3 text-center lg:text-start">
        <h1 className="text-lg md:text-4xl lg:text-6xl tracking-wide font-bold italic font-cursive text-default-text">
  Lo del Cesar
</h1>
          <h2 className="text-xl md:text-3xl lg:text-2xl font-semibold text-colorTres">
            Comidas Caceras
          </h2>
        </div>
        <div className="lg:hidden w-full flex justify-center py-4">
          <HeroImg />
        </div>
        <p className="text-sm md:text-base lg:text-base 2xl:text-lg tracking-wider pr-3">
        <span className="font-semibold">¡Anímate a probar lo mejor de nuestra cocina!</span>   <br />Disfruta de un menú variado con pizzas, empanadas, sándwiches de milanesa y hamburguesas, además de nuestros platos especiales del día.
       
        </p>
        <div className="w-full flex justify-center md:justify-start gap-8">
          <Button
            onClick={handleDrawer}
            text="Empezar Ahora"
            claseButton="primary"
            Icon={CiLogin}
            positionIcon="right"
          />
          <Button
            text="Contáctanos"
            claseButton="secondary"
            border
            Icon={IoIosArrowForward}
            positionIcon="right"
          />
        </div>
      </div>
    </div>
  );
}
