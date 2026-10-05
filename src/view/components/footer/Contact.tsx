import { FaMapMarkerAlt } from "react-icons/fa";
import EmpresasIcons from "./CompanyIcons";
import { IoIosCall } from "react-icons/io";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Contact({
  handleRedirectSocial,
}: {
  handleRedirectSocial: any;
}) {
  return (
    <section className="w-full lg:h-40  flex  lg:flex-row flex-col gap-8 lg:justify-between justify-center  items-center">
      <h1 className="text-2xl lg:text-4xl font-semibold text-colorUno">
        Del Cesar
      </h1>
      <div className=" h-full font-semibold flex flex-col gap-3 text-white items-center lg:items-start justify-center">
        <span className="flex justify-center items-center gap-2 ">
          <IoIosCall className="text-xl" />
          11 22883245
        </span>
        <span className="flex justify-center items-center gap-2 ">
          <FaMapMarkerAlt className="text-xl" />
          Banfield, Centenario
        </span>
      </div>

      <div className=" w-80 h-full font-semibold flex flex-col gap-3 text-white items-center justify-center text-center lg:text-start">
        <span className="flex justify-center items-center gap-2 ">
          Todo casero para tu almuerzo, cena o evento. servicio de catering.
        </span>
      </div>

      <div className="w-64 h-full font-semibold flex flex-col gap-3 text-white items-center justify-center text-center">
        <span>Seguinos en redes</span>
        <EmpresasIcons handleRedirectSocial={handleRedirectSocial} />
      </div>
    </section>
  );
}
