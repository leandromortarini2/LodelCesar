import CustomeButton from "../../../../../components/CustomeButton";
import CustomeTable from "../../../../components/CustomeTable";
import CustomeTitle from "../../../../components/CustomeTitle";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { dataAddress } from "./mock/dataTable";
import PersonCard from "./components/PersonCard";
import useConfigureTable from "./hook/useConfigureTable";

export default function ContactView() {
  const tableConfig = useConfigureTable();

  return (
    <section className="h-screen space-y-5 w-full bg-white-primary p-6 ">
      <CustomeTitle
        title="Identificación y Contacto"
        type="h2"
        font="semibold"
      />
      <div className="w-full h-full flex gap-5">
        <PersonCard />
        <div className="flex md:w-3/4 xl:w-full flex-col gap-3">
          <div className="h-10 w-full flex justify-end items-center gap-5">
            <CustomeButton
              text="Consulta Extra Domicilio-Teléfono"
              type="button"
              claseButton="primary"
              Icon={MdOutlineKeyboardArrowRight}
            />
            <CustomeButton
              text="Consulta Extra Inmuebles Registrados"
              type="button"
              claseButton="primary"
              Icon={MdOutlineKeyboardArrowRight}
            />
          </div>
          <CustomeTable
            data={dataAddress}
            config={tableConfig}
            hoverable={false}
          />
        </div>
      </div>
    </section>
  );
}
