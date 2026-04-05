import { Link } from "react-scroll";
import type { RoutesNavBar } from "../../../interfaces/RoutesNavBar";
import delCesar from "../../../../public/textDelCesar.png";
import CustomeButton from "../CustomeButton";
import { IoClose } from "react-icons/io5";
interface Props {
  routes: RoutesNavBar[];
  routesSocial?: RoutesNavBar[];
  scroll?: boolean;
  closeModalBurger: () => void;
  openModal: () => void;
  handleRedirectSocial: (route: RoutesNavBar) => void;
}

export const Burger = ({
  routes,
  closeModalBurger,
  routesSocial,
  handleRedirectSocial,
}: Props) => {
  return (
    <>
      <div className="h-screen  w-full flex flex-col  pb-10 justify-between items-center ">
        <div className="w-full h-full">
          <div className="flex justify-between px-4 items-center h-16 border-b border-gray-secondary">
            <img src={delCesar} alt="logo" className="w-28" />
            <CustomeButton
              claseButton="secondary"
              Icon={IoClose}
              color="text-default-text"
              colorBg="bg-colorBackground"
              onClick={closeModalBurger}
            />
          </div>
          {routes &&
            routes.map((route, i) => {
              const Icon = route.icon;
              return (
                <Link
                  to={route.url}
                  key={i}
                  onClick={closeModalBurger}
                  offset={-100}
                  className="w-full h-16 cursor-pointer hover:bg-colorUno flex justify-end px-4 gap-2 items-center "
                >
                  <span className="">{route.text}</span>
                  <Icon className="w-7 h-7 text-colorTres" />
                </Link>
              );
            })}
        </div>

        <div className=" w-full border-t border-gray-secondary">
          {routesSocial?.map((route, i) => {
            const Icon = route.icon;
            return (
              <div
                key={i}
                onClick={() => handleRedirectSocial(route)}
                className="w-full h-16 cursor-pointer hover:bg-colorUno  flex justify-end px-4 gap-2 items-center "
              >
                <span className="">{route.text}</span>
                <Icon className={`w-7 h-7 ${route.colorIcon}`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
