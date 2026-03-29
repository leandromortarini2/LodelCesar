import CustomeTitle from "../../../../../components/CustomeTitle";

export default function InfoSection() {
  return (
    <div className=" p-3 border rounded-lg border-gray-secondary flex flex-col gap-3  ">
      <CustomeTitle
        title="Descripción de situación BCRA"
        type="h5"
        font="semibold"
        color="text-default-text"
      />
      <div className="text-default-text text-sm lg:w-[900px] 2xl:w-[1200px]  grid grid-cols-3 gap-3 ">
        <p>
          <span className="font-semibold text-success">0: Normal: </span> No
          posee atrasos
        </p>
        <p>
          <span className="font-semibold text-success">1: Normal: </span> Atraso
          de 0 a 30 días
        </p>
        <p>
          <span className="font-semibold text-cuartity">
            2: Riesgo Potencial:{" "}
          </span>{" "}
          Atraso de 32 a 90 días
        </p>
        <p>
          <span className="font-semibold text-cuartity">
            3: Cumplimiento deficiente:{" "}
          </span>{" "}
          Atraso de 91 a 180 días
        </p>
        <p>
          <span className="font-semibold text-error">
            4: Riesgo de Insolvencia:{" "}
          </span>{" "}
          Atraso de 181 a 360 días
        </p>
        <p>
          <span className="font-semibold text-error">5: Irrecuperable: </span>{" "}
          Atraso más de 361 días
        </p>
      </div>
    </div>
  );
}
