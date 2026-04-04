import { Drawer } from "../../../components/drawer/Drawer";
import Home from "./homeView/view/Home";
// import InfoBar from "../../components/InfoBar";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/nav-bar/NavBar";
import { routesLanding, social } from "../../../../utils/routesNavBar";
import { FormProvider } from "react-hook-form";
import useLogicLanding from "../../hook/useLogicLanding";
import Products from "./ProductsView/Products";

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
        <Home handleDrawer={handleClose} />
        {/* <InfoBar /> */}
        {/* <Products handleDrawer={handleDrawer} /> */}
        <Products />
        <Footer />
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
