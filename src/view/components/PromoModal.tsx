import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function PromoModal({
  handleConsult,
}: {
  handleConsult: () => void;
}) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm flex flex-col items-center gap-4 rounded-3xl bg-white px-8 py-10 text-center shadow-2xl"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 rounded-full bg-colorTres p-2 text-white shadow-md hover:scale-110 transition-transform"
        >
          <IoMdClose className="text-xl" />
        </button>
        <img
          src="/Logo-del cesar.png"
          alt="Del Cesar"
          className="h-24 w-24 object-contain"
        />
        <h2 className="text-2xl font-bold text-colorTres">
          Servicio de catering
        </h2>
        <p className="text-gray-600">
          Hacemos salidas y eventos con servicio de catering. Si te interesa,
          contactate con nosotros.
        </p>
        <button
          type="button"
          onClick={handleConsult}
          className="flex items-center justify-center gap-2 rounded-full bg-btn-wp px-6 py-3 font-bold text-white hover:bg-btn-wp/90 transition-colors"
        >
          <IoLogoWhatsapp className="text-xl" />
          Contactanos
        </button>
      </div>
    </div>
  );
}
