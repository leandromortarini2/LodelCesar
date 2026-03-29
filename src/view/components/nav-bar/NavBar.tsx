import Logo from "./Logo";
import PanelButton from "./PanelButton";
import CartButton from "./LoginButton";
import { useLocation } from "react-router-dom";
import DataUser from "./DataUser";
import type { RoutesNavBar } from "../../../interfaces/RoutesNavBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import useHandleModal from "../../app/hook/useHandleModal";
import { Burger } from "./Burger";
import InfoBar from "./InfoBar";

interface Props {
  handleDrawer?: () => void;
  routes?: RoutesNavBar[];
  scroll?: boolean;
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

export default function NavBar({
  handleDrawer,
  routes,
  scroll,
  openModal,
  closeModal,
  isOpen,
}: Props) {
  const location = useLocation();
  const pathname = location.pathname;
  const dashboard = pathname.includes("/dashboard");

  const {
    isOpen: isOpenBurger,
    openModal: openModalBurger,
    closeModal: closeModalBurger,
  } = useHandleModal();

  return (
    <div className="sticky top-0 w-full  z-50">
      <InfoBar />

      <section className="w-full h-20 bg-colorUno flex justify-between items-center border-gray-secondary  px-5  2xl:px-10 ">
        <div className="w-16 h-14 lg:w-[15%]  flex justify-start">
          <Logo />
        </div>

        <div className="w-[80%] hidden lg:flex justify-center    ">
          {routes && <PanelButton routes={routes} scroll={scroll} />}
        </div>
        <div className=" flex items-center justify-end  lg:w-[15%] gap-3 ">
          <div className="flex justify-end ">
            {location.pathname === "/" && handleDrawer && (
              <CartButton  handleDrawer={handleDrawer} />
            )}
            {dashboard && (
              <DataUser
                openModal={openModal}
                closeModal={closeModal}
                isOpen={isOpen}
              />
            )}
          </div>
          {isOpenBurger ? (
            <div onClick={closeModalBurger} className="  lg:hidden ">
              <IoClose className="w-8 h-8 cursor-pointer" />
            </div>
          ) : (
            <div onClick={openModalBurger} className="  lg:hidden ">
              <RxHamburgerMenu className="w-8 h-8 cursor-pointer" />
            </div>
          )}
          <div className="">
            {isOpenBurger && (
              <section className="w-full   bg-white-secondary h-[calc(100vh-130px)] absolute top-32 left-0 lg:hidden flex flex-col justify-between overflow-y-auto ">
                <Burger
                  routes={routes || []}
                  scroll={scroll}
                  closeModalBurger={closeModalBurger}
                  openModal={openModal}
                />
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
