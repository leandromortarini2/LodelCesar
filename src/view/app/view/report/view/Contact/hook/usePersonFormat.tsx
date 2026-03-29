import { useMemo } from "react";
import { IoMdCalendar, IoMdPerson } from "react-icons/io";
import { DocumentIcon } from "../../../../../icon/DocumentIcon";
import { SextIcon } from "../../../../../icon/SexIcon";
import { CompanyIcon } from "../../../../../icon/CompanyIcon";
import { CountryIcon } from "../../../../../icon/CountryIcon";

export default function usePersonFormat() {
  const itemsIdentificacion = useMemo(
    () => [
      { title: "Nombre", Icon: IoMdPerson, value: "Carlos Alejandro Martinez" },
      { title: "DNI", Icon: DocumentIcon, value: "92.858.285" },
      { title: "CUIT", Icon: DocumentIcon, value: "20-92.858.285-4" },
      { title: "Sexo", Icon: SextIcon, value: "Masculino" },
      { title: "Fecha de nacimiento", Icon: IoMdCalendar, value: "17/03/2001" },
      { title: "Nacionalidad", Icon: CountryIcon, value: "Argentina" },
      { title: "Socio informante", Icon: CompanyIcon, value: "CO.DE.SA" },
    ],
    []
  );

  return itemsIdentificacion;
}
