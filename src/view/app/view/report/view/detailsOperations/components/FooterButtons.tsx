import CustomeButton from "../../../../../../components/CustomeButton";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FiAlertTriangle } from "react-icons/fi";
import { IoMdCalendar } from "react-icons/io";
import { TbAlertCircleFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

interface Props {
  openModal: () => void;
}
export default function FooterButtons({ openModal }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <Link to="/dashboard/informe/detalle-operaciones/creditos-socios">
          <CustomeButton
            text="Créditos Otorgados por Socios"
            claseButton="primary"
            type="button"
            height="h-10"
            Icon={HiCurrencyDollar}
            positionIcon="left"
          />
        </Link>
        <Link to="/dashboard/informe/detalle-operaciones/datos-atrasos">
          <CustomeButton
            text="Datos de Atrasos"
            claseButton="secondary"
            border
            borderColor="border-gray-secondary"
            type="button"
            height="h-10"
            Icon={FiAlertTriangle}
            positionIcon="left"
          />
        </Link>
        <CustomeButton
          onClick={openModal}
          text="Primer vencimiento"
          claseButton="secondary"
          border
          borderColor="border-gray-secondary"
          type="button"
          height="h-10"
          Icon={IoMdCalendar}
          positionIcon="left"
        />
      </div>
      <Link to="/dashboard/informe/detalle-operaciones/estado-credito">
        <CustomeButton
          text="Créditos Acordados/Rechazados"
          claseButton="primary"
          type="button"
          height="h-10"
          Icon={TbAlertCircleFilled}
          positionIcon="left"
        />
      </Link>
    </div>
  );
}
