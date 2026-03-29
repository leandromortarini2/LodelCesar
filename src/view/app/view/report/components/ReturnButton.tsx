import { Link } from "react-router-dom";
import CustomeButton from "../../../../components/CustomeButton";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function ReturnButton() {
  return (
    <div>
      <Link to="/dashboard/informe/detalle-operaciones">
        <CustomeButton
          height="h-10"
          claseButton="primary"
          text="Volver"
          Icon={MdOutlineKeyboardArrowLeft}
          positionIcon="left"
        />
      </Link>
    </div>
  );
}
