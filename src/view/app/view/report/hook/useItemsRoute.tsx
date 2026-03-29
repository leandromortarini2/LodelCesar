import { MdGraphicEq } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdHowToVote } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function useItemsRoute() {
  const location = useLocation();

  const resumenCrediticio = location.pathname.includes("resumen-crediticio");
  const identificacionContacto = location.pathname.includes(
    "identificacion-contacto"
  );
  const verificacionOficial = location.pathname.includes(
    "verificacion-oficial"
  );
  const situacionLaboral = location.pathname.includes("situacion-laboral");
  const detalleOperaciones = location.pathname.includes("detalle-operaciones");
  const informesRegulatorios = location.pathname.includes(
    "informes-regulatorios"
  );

  const itemsMenu = [
    {
      title: "Resumen Crediticio Global",
      Icon: MdGraphicEq,
      active: resumenCrediticio,
      path: "resumen-crediticio",
    },
    {
      title: "Identificación y Contacto",
      Icon: IoMdPerson,
      active: identificacionContacto,
      path: "identificacion-contacto",
    },
    {
      title: "Verificación Oficial",
      Icon: MdHowToVote,
      active: verificacionOficial,
      path: "verificacion-oficial",
    },
    {
      title: "Situación Laboral y Empleo",
      Icon: MdWorkOutline,
      active: situacionLaboral,
      path: "situacion-laboral",
    },
    {
      title: "Detalle de Operaciones de Deuda",
      Icon: FaRegCreditCard,
      active: detalleOperaciones,
      path: "detalle-operaciones",
    },
    {
      title: "Informes Regulatorios",
      Icon: IoIosNotificationsOutline,
      active: informesRegulatorios,
      path: "informes-regulatorios",
    },
  ];
  return itemsMenu;
}
