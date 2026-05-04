/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "./Logo";
import PanelButton from "./PanelButton";
import type { RoutesNavBar } from "../../../interfaces/RoutesNavBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import useHandleModal from "../../app/hook/useHandleModal";
import { Burger } from "./Burger";
import InfoBar from "./InfoBar";

interface Props {
  handleDrawer: () => void;
  routes?: RoutesNavBar[];
  routesSocial?: RoutesNavBar[];
  scroll?: boolean;
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
  handleRedirectSocial?: any;
  searchTerm?: string | any;
  setSearchTerm?: any;
  handleSearch?: any;
  handleCleanSearch?: any;
}

export default function NavBar({
  routes,
  routesSocial,
  scroll,
  openModal,
  handleRedirectSocial,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleCleanSearch,
  handleDrawer,
}: Props) {
  const {
    isOpen: isOpenBurger,
    openModal: openModalBurger,
    closeModal: closeModalBurger,
  } = useHandleModal();

  return (
    <div className="sticky top-0 w-full  z-50">
      <section className="w-full h-12 bg-colorTres flex justify-between items-center border-gray-secondary  px-3  2xl:px-10 ">
        <div className="w-12 h-10 lg:w-[20%]  flex justify-start">
          <Logo />
        </div>

        <div className=" hidden lg:flex justify-end ">
          {routes && <PanelButton routes={routes} scroll={scroll} />}
        </div>
        <div className=" flex items-center justify-end  lg:w-[15%] lg:hidden">
          {isOpenBurger ? (
            <div onClick={closeModalBurger} className="  lg:hidden ">
              <IoClose className="w-8 h-8 cursor-pointer text-white" />
            </div>
          ) : (
            <div onClick={openModalBurger} className="  lg:hidden ">
              <RxHamburgerMenu className="w-8 h-8 cursor-pointer text-white" />
            </div>
          )}
          <div className="">
            {isOpenBurger && (
              <section className="w-full   bg-white-secondary h-screen absolute top-0 left-0 lg:hidden flex flex-col justify-between overflow-y-auto ">
                <Burger
                  routes={routes || []}
                  routesSocial={routesSocial}
                  scroll={scroll}
                  closeModalBurger={closeModalBurger}
                  openModal={openModal}
                  handleRedirectSocial={handleRedirectSocial}
                />
              </section>
            )}
          </div>
        </div>
      </section>
      <InfoBar
        handleDrawer={handleDrawer}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleCleanSearch={handleCleanSearch}
      />
    </div>
  );
}
