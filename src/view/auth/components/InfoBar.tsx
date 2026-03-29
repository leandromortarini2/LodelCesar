export default function InfoBar() {
  return (
    <section className="w-full min-h-40 bg-primary flex flex-col md:flex-row justify-center lg:gap-10 items-center px-4">
      <div className="w-80 lg:w-[350px] h-[150px] text-white-primary flex justify-center items-center gap-5 px-4">
        <img src="/icons/graphic.png" alt="" className="w-16 lg:w-20" />
        <div className="space-y-2">
          <h6 className="text-2xl lg:text-4xl font-semibold">10.000</h6>
          <p className="text-lg lg:text-xl">Informes Mensuales</p>
        </div>
      </div>

      <div className="w-80 lg:w-[350px] min-h-[150px] text-white-primary  flex justify-center items-center px-4 gap-5">
        <img src="/icons/premio.png" alt="" className="w-16 lg:w-20" />
        <div className="space-y-2">
          <h6 className="text-2xl lg:text-4xl font-semibold">50</h6>
          <p className="text-lg lg:text-xl"> Años de Experiencia</p>
        </div>
      </div>

      <div className="w-80 lg:w-[350px] min-h-[150px] text-white-primary  flex justify-center items-center px-4 gap-5">
        <img src="/icons/time.png" alt="" className=" w-16 lg:w-20" />
        <div className="space-y-2">
          <h6 className="text-2xl lg:text-4xl font-semibold">24</h6>
          <p className="text-lg lg:text-xl">Horas Disponibles</p>
        </div>
      </div>
    </section>
  );
}
