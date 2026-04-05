import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export default function Contact() {
  return (
    <section className="w-full lg:w-[80%] lg:h-40  flex  lg:flex-row flex-col gap-8 lg:justify-between justify-center  items-center">
      <h1 className="text-2xl lg:text-4xl font-semibold text-colorTres">
        Del Cesar
      </h1>
      <div className=" h-full font-semibold flex flex-col gap-3 text-colorTres items-center lg:items-start justify-center">
        <span className="flex justify-center items-center gap-2 ">
          <IoIosCall className="text-xl" />
          11 22883245
        </span>
        <span className="flex justify-center items-center gap-2 ">
          <FaMapMarkerAlt className="text-xl" />
          Banfield, Centenario
        </span>
      </div>

      <div className=" w-80 h-full font-semibold flex flex-col gap-3 text-colorTres items-center justify-center text-center lg:text-start">
        <span className="flex justify-center items-center gap-2 ">
          Todo casero para tu almuerzo, cena o evento. servicio de catering.
        </span>
      </div>
    </section>
  );
}
