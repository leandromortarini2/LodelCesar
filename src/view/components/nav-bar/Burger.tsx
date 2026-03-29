import { Link } from "react-scroll";
import type { RoutesNavBar } from "../../../interfaces/RoutesNavBar";

interface Props {
  routes: RoutesNavBar[];
  scroll?: boolean;
  closeModalBurger: () => void;
  openModal: () => void;
}

export const Burger = ({ routes, closeModalBurger }: Props) => {
  return (
    <>
      <div>
        {routes &&
          routes.map((route, i) => (
            <Link
              to={route.url}
              key={i}
              onClick={closeModalBurger}
              offset={-100}
              className="w-full h-16 border-b cursor-pointer hover:bg-primary/20 border-gray-secondary flex justify-center items-center "
            >
              <span className="">{route.text}</span>
            </Link>
          ))}
      </div>
    </>
  );
};
