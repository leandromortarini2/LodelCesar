import { Outlet, useLocation } from "react-router-dom";
import InfoUser from "./components/InfoUser";
import MenuReport from "./components/MenuReport";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ReportView() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === "/dashboard/informe" ||
      location.pathname === "/dashboard/informe/"
    ) {
      navigate("/dashboard/informe/resumen-crediticio", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <section className=" h-screen w-full">
      <InfoUser />
      <MenuReport />
      <div className="w-full h-full bg-white-primary">
        <Outlet />
      </div>
    </section>
  );
}
