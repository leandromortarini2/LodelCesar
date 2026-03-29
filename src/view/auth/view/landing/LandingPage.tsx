import { Drawer } from "../../../components/drawer/Drawer";
import Home from "./homeView/view/Home";
import InfoBar from "../../components/InfoBar";
import Footer from "../../../components/footer/Footer";
import IntroduccionView from "./introduccionView/IntroduccionView";
import NavBar from "../../../components/nav-bar/NavBar";
import { routesLanding } from "../../../../utils/routesNavBar";
import { FormProvider } from "react-hook-form";
import useLogicLanding from "../../hook/useLogicLanding";

export default function LandingPage() {
  const { handleDrawer, handleLogin, isOpen, method } = useLogicLanding();

  return (
    <div>
      <FormProvider {...method}>
        <NavBar
          openModal={handleDrawer}
          closeModal={handleDrawer}
          isOpen={isOpen}
          handleDrawer={handleDrawer}
          routes={routesLanding}
          scroll={true}
        />
        <Home handleDrawer={handleDrawer} />
        <InfoBar />
        <IntroduccionView handleDrawer={handleDrawer} />
        <Footer />
        <Drawer onSubmit={handleLogin} handle={handleDrawer} open={isOpen} />
      </FormProvider>
    </div>
  );
}
