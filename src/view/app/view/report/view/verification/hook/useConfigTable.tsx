import type { ColumnConfig } from "../../../../../components/CustomeTable";

export default function useConfigTable() {
  const tableConfig: ColumnConfig[] = [
    {
      header: "Año del Padrón",
      field: "padron",
      width: "w-[150px]",
      align: "left",
    },
    {
      header: "Nombre Completo",
      field: "nombre",
      width: "w-[250px]",
      align: "left",
    },
    {
      header: "Sexo",
      field: "sexo",
      width: "w-[150px]",
      align: "left",
    },
    {
      header: "Año Nacimiento",
      field: "nacimiento",
      width: "w-[150px]",
      align: "center",
    },
    {
      header: "Domicilio",
      field: "domicilio",
      width: "w-[250px]",
      align: "center",
    },
  ];

  return tableConfig;
}
