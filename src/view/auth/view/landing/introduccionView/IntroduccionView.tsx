import CardProd from "../../../components/CardProd";
import { Element } from "react-scroll";

// interface Props {
//   handleDrawer: () => void;
// }

// export default function Products({ handleDrawer }: Props) {
export default function Products() {
  return (
    <div className="w-full p-2">
      <Element name="intro-1" className="flex flex-col gap-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-colorTres  lg:text-left">
          Nuestros Platos
        </h1>
        <div className="w-full flex gap-2">
          <CardProd />
          <CardProd />
        </div>
      </Element>
    </div>
  );
}
