import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CustomeButton from "../../../../../components/CustomeButton";
import CustomeTable from "../../../../components/CustomeTable";
import CustomeTitle from "../../../../components/CustomeTitle";
import useConfigWork from "./hook/useConfigWork";
import { dataReportWork } from "./mock/dataReportWork";
import { dataWork } from "./mock/dataWork";

export default function WorkView() {
  const { configTableReportWork, configTableWork } = useConfigWork();
  return (
    <section className="h-screen space-y-7 w-full bg-white-primary p-6 ">
      <CustomeTitle
        title="Situación Laboral y Empleo"
        type="h2"
        font="semibold"
      />
      <div className="w-full flex justify-between">
        <CustomeTitle
          title="Datos de Empleos Informados"
          type="h4"
          font="semibold"
          color="text-secondary"
        />
        <div className="flex gap-5">
          <CustomeButton
            text="Constancia Inscripción AFIP"
            type="button"
            claseButton="primary"
            Icon={MdOutlineKeyboardArrowRight}
          />
          <CustomeButton
            text="Aporte en Linea AFIP"
            type="button"
            claseButton="primary"
            Icon={MdOutlineKeyboardArrowRight}
          />
          <CustomeButton
            text="Certificación Negativa ANSES"
            type="button"
            claseButton="primary"
            Icon={MdOutlineKeyboardArrowRight}
          />
        </div>
      </div>
      <div className="w-full flex gap-5">
        <CustomeTable
          data={dataReportWork}
          config={configTableReportWork}
          hoverable={false}
        />
      </div>{" "}
      <CustomeTitle
        title="Datos Laborales"
        type="h4"
        font="semibold"
        color="text-secondary"
      />
      <CustomeTable
        data={dataWork}
        config={configTableWork}
        hoverable={false}
      />
    </section>
  );
}
