import { Drawer } from "../../../components/drawer/Drawer";
import Home from "./homeView/view/Home";
// import InfoBar from "../../components/InfoBar";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/nav-bar/NavBar";
import { routesLanding, social } from "../../../../utils/routesNavBar";
import { FormProvider } from "react-hook-form";
import useLogicLanding from "../../hook/useLogicLanding";
import Products from "./ProductsView/Products";
import DailySpecial from "../../components/DailYSpecial";

export default function LandingPage() {
  const {
    handleClose,
    handleSubmitCart,
    isOpen,
    method,
    handleRedirectSocial,
    cart,
    updateQuantity,
    totalCart,
    onDeleteProdCart,
    handleConsult,
    redirectProducts,
  } = useLogicLanding();

  return (
    <div>
      <FormProvider {...method}>
        <NavBar
          openModal={handleClose}
          closeModal={handleClose}
          isOpen={isOpen}
          handleDrawer={handleClose}
          routes={routesLanding}
          routesSocial={social}
          scroll={true}
          handleRedirectSocial={handleRedirectSocial}
        />
        <Home
          redirectProducts={redirectProducts}
          handleConsult={handleConsult}
        />
        {/* <InfoBar /> */}
        {/* <Products handleDrawer={handleDrawer} /> */}
        <DailySpecial handleConsult={handleConsult} />
        <Products />
        <Footer handleRedirectSocial={handleRedirectSocial} />
        <Drawer
          onSubmit={handleSubmitCart}
          open={isOpen}
          cart={cart}
          updateQuantity={updateQuantity}
          totalCart={totalCart}
          onDeleteProdCart={onDeleteProdCart}
          handleClose={handleClose}
        />
      </FormProvider>
    </div>
  );
}
