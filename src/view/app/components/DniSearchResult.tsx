import CustomeButton from "../../components/CustomeButton";
import type { IAffectation } from "../interface/IAffectation";
import CustomeTitle from "./CustomeTitle";

interface Props {
  typeButton: "Procesar" | "Desafectar" | "Ver Informe";
  handleModal: () => void;
  data: IAffectation;
  dni: string;
  sexo: string;
  cuil: string;
  handleAffectation: () => void;
}

export default function DniSearchResult({
  typeButton,
  handleModal,
  data,
  dni,
  sexo,
  cuil,
  handleAffectation,
}: Props) {
  return (
    <section className="w-full space-y-5">
      <div className="space-y-1">
        <CustomeTitle
          title="Personales Encontrada"
          type="h2"
          font="semibold"
          color="text-secondary"
        />
        <CustomeTitle
          title="Aquí podrás realizar la afectación de la persona"
          type="h5"
          font="regular"
        />
      </div>
      <hr className="h-1 text-gray-primary" />
      <article className="flex flex-col gap-5 w-full">
        <div className="grid grid-cols-2 w-full">
          <p className="font-semibold">
            Nombre:{" "}
            <span className="font-normal">
              {data.nombre} {data.apellido}
            </span>
          </p>
          <p className="font-semibold">
            DNI: <span className="font-normal">{dni}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 w-full">
          <p className="font-semibold">
            CUIL: <span className="font-normal">{cuil}</span>
          </p>
          <p className="font-semibold">
            Sexo: <span className="font-normal">{sexo}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 w-full">
          <p className="font-semibold">
            Domicilio: <span className="font-normal">{data.domicilio}</span>
          </p>
          <p className="font-semibold">
            Código Postal:{" "}
            <span className="font-normal">{data.cod_postal}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 w-full">
          <p className="font-semibold">
            Localidad: <span className="font-normal">{data.localidad}</span>
          </p>
          <p className="font-semibold">
            Provincia: <span className="font-normal">{data.provincia}</span>
          </p>
        </div>

        <hr className="h-1 text-gray-primary" />

        <div className="flex gap-5 justify-between">
          <CustomeButton
            onClick={handleModal}
            text="Cancelar"
            claseButton="secondary"
            border
            borderColor="border-gray-200"
            height="h-[40px]"
          />
          <CustomeButton
            onClick={handleAffectation}
            text={typeButton}
            claseButton="primary"
            height="h-[40px]"
            width="w-32"
          />
        </div>
      </article>
    </section>
  );
}
