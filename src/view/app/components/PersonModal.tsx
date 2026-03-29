import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import customeAlert from "../utils/customeAlert";
import Cookies from "js-cookie";

interface Props {
  user: string;
  operator: string;
}

export default function PersonModal({ user, operator }: Props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    customeAlert({
      title: "¿Deseas cerrar sesión?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2A4B9C",
      confirmButtonText: "Si, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("accessToken");
        navigate("/");
      }
    });
  };
  return (
    <section className="max-w-xs w-full bg-tertiary z-99 rounded-b-xl absolute right-0 overflow-hidden  transition-all duration-300">
      <div className="px-4 py-4 border-b border-white ">
        <p className="text-xs font-medium text-white uppercase tracking-wider">
          Usuario
        </p>
        <div className="flex items-center mt-1">
          <p className="text-sm  text-white  ">{user}</p>
        </div>
      </div>
      <div className="px-4 py-4 border-b border-white ">
        <p className="text-xs font-medium text-white uppercase tracking-wider">
          Operador
        </p>
        <div className="flex items-center mt-1">
          <p className="text-sm  text-white  ">{operator}</p>
        </div>
      </div>
      <div
        onClick={handleLogout}
        className="px-4 py-4 flex gap-2 items-center hover:bg-secondary cursor-pointer"
      >
        <LuLogOut className="text-2xl text-white" />{" "}
        <p className="text-xs font-medium text-white uppercase tracking-wider">
          Cerrar Sesión
        </p>
      </div>
    </section>
  );
}
