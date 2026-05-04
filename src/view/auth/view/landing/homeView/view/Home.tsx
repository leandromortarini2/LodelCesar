import { Element } from "react-scroll";
import HeroText from "../Components/HeroText";
import HeroImg from "../Components/HeroImg";

interface Props {
  redirectProducts: () => void;
  handleConsult: () => void;
}

export default function Home({ redirectProducts, handleConsult }: Props) {
  return (
    <Element name="inicio">
      <section className="  bg-gradient-to-b from-[#fefce8] to-[#f5f5f5] bg-cover  flex-1 lg:h-[630px] w-full flex flex-col lg:flex-row items-center justify-center  py-20 lg:py-0">
        <HeroText
          redirectProducts={redirectProducts}
          handleConsult={handleConsult}
        />
        <div className="hidden lg:block">
          <HeroImg />
        </div>
      </section>
    </Element>
  );
}
