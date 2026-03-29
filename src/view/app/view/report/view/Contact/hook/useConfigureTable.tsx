import type { ColumnConfig } from "../../../../../components/CustomeTable";

export default function useConfigureTable() {
  const tableConfig: ColumnConfig[] = [
    {
      header: "Socio Informante",
      field: "socio",
      width: "w-[180px]",
      align: "left",
    },
    {
      header: "Datos de Domicilio",
      field: "domicilio",
      width: "w-[250px]",
      align: "left",
    },
    {
      header: "Localidad",
      field: "localidad",
      width: "w-[220px]",
      align: "left",
    },
    {
      header: "Provincia",
      field: "nprovincia",
      width: "w-[120px]",
      align: "center",
    },
    {
      header: "Código Postal",
      field: "cpostal",
      width: "w-[120px]",
      align: "center",
    },
  ];

  return tableConfig;
}
