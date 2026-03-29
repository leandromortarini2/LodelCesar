import { Element } from "react-scroll";
import HeroText from "../Components/HeroText";
import HeroImg from "../Components/HeroImg";

interface Props {
  handleDrawer: () => void;
}

export default function Home({ handleDrawer }: Props) {
  return (
    <Element name="inicio">
      <section className="bg-black/50 bg-white bg-cover bg-blend-darken lg:h-[630px] 2xl:h-[800px] w-full flex flex-col lg:flex-row items-center py-10 lg:py-0">
        <HeroText handleDrawer={handleDrawer} />
        <div className="hidden lg:block">
          <HeroImg />
        </div>
      </section>
    </Element>
  );
}
