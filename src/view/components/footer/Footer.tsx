/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaGlobe, FaWhatsapp } from "react-icons/fa";
import Contact from "./Contact";

export default function Footer({
  handleRedirectSocial,
}: {
  handleRedirectSocial: any;
}) {
  return (
    <>
      <footer className="w-full bg-colorTres flex justify-center py-4 px-6">
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-3">
          <Contact handleRedirectSocial={handleRedirectSocial} />
          <hr className="text-colorUno h-2 w-full" />
          <span className="text-xs text-white/70">
            © {new Date().getFullYear()} Del Cesar. Todos los derechos
            reservados.
          </span>
        </div>
      </footer>
      <div className="w-full bg-gray-900 flex justify-center py-3 px-6">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-2 text-white text-center">
          <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
            <span className="font-semibold text-colorUno">
              ¿Necesitás una página web?
            </span>
            <span className="text-sm">
              Desarrollo web a medida para tu negocio. Escribime y charlamos.
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a
              href="https://wa.me/5491126034427"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-colorUno transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              11 2603-4427
            </a>
            <a
              href="https://leandromortarinidev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm underline hover:text-colorUno transition-colors"
            >
              <FaGlobe className="text-base" />
              leandromortarinidev.vercel.app
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
