import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="w-full lg:w-[80%] lg:h-40  flex  lg:flex-row flex-col gap-8 lg:justify-between justify-center  items-center">
      <img
        src="/logos/Logo-sinfondo.png"
        alt=""
        className="w-1/2 lg:h-[90%] lg:w-1/4"
      />

      <div className=" h-full font-semibold flex flex-col gap-3 text-white-primary items-start justify-center">
        <span className="flex justify-center items-center gap-2 ">
          <IoIosCall className="text-xl" />
          0264 4277060{" "}
        </span>{" "}
        <span className="flex justify-center items-center gap-2 ">
          <MdOutlineEmail className="text-xl" />
          info@codesa.org.ar
        </span>
      </div>

      <div className=" w-80 h-full font-semibold flex flex-col gap-3 text-white-primary items-center justify-center text-center lg:text-start">
        <span className="flex justify-center items-center gap-2 ">
          Marca Registrada â€“ Patente Registrada â€“ Todos los derechos
          reservados
        </span>{" "}
      </div>
    </section>
  );
}
