import IconTextComponent from "../../../components/IconTextComponent";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { DocumentIcon } from "../../../icon/DocumentIcon";

export default function InfoUser() {
  return (
    <div className="w-full flex justify-between px-6 h-10 bg-white-primary">
      <IconTextComponent
        size="xs"
        iconSize="sm"
        text="San Juan 13/11/2025 09:11:37"
        Icon={CiCalendarDate}
      />
      <IconTextComponent
        size="xs"
        iconSize="sm"
        text="Informe Nro. 134858601 "
        Icon={MdOutlineDescription}
      />
      <IconTextComponent
        size="xs"
        iconSize="sm"
        text="Documento 9285885"
        Icon={DocumentIcon}
      />

      <IconTextComponent
        size="xs"
        iconSize="sm"
        text="CUIT: 20-92855885-2"
        Icon={DocumentIcon}
      />
    </div>
  );
}
