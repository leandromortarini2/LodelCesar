import { Outlet } from "react-router-dom";
import { routesDashboard } from "../../../../utils/routesNavBar";
import PersonModal from "../../components/PersonModal";
import useHandleModal from "../../hook/useHandleModal";
import NavBar from "../../../components/nav-bar/NavBar";

export default function DashboardLayout() {
  const { openModal, closeModal, isOpen } = useHandleModal();

  return (
    <div className="w-full bg-white-secondary">
      <NavBar
        routes={routesDashboard}
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        handleDrawer={() => {}}
      />
      {isOpen && (
        <PersonModal user={"john.parker@example.com"} operator={"998"} />
      )}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
