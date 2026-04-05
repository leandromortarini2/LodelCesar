import { IoLogoWhatsapp } from "react-icons/io5";
import CustomeButton from "../../components/CustomeButton";

export default function DailySpecial({
  handleConsult,
}: {
  handleConsult: () => void;
}) {
  return (
    <section className="w-full py-12 px-4 bg-colorTres/5  my-10 ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
          <div className="overflow-hidden rounded-2xl shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <img
              src="https://i.imgur.com/4ZmdTxF.jpeg"
              alt="Plato del día 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl rotate-[3deg] mt-8 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://i.imgur.com/uR7F4w7.jpeg"
              alt="Plato del día 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-2 bg-yellow-400 text-colorTres font-black px-4 py-2 rounded-full shadow-lg text-sm uppercase tracking-wider">
            ¡Nuevo Hoy!
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-colorTres leading-tight">
            ¿No sabes qué elegir? <br />
            <span className="text-orange-400">Consulta el Plato del Día</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Todos los días preparamos un plato especial. Productos frescos,
            sabores caseros y un precio increíble.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <CustomeButton
              claseButton="primary"
              text="Consultar por WhatsApp"
              Icon={IoLogoWhatsapp}
              color="bg-btn-wp"
              hover="hover:bg-btn-wp/90"
              width="w-full sm:w-auto"
              height="h-14"
              sizeText="text-lg font-bold"
              onClick={handleConsult}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
