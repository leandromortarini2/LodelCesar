import type { ColumnConfig } from "../../../../../components/CustomeTable";

export default function useConfigTableBCRA() {
  const tableConfig: ColumnConfig[] = [
    {
      header: "Periodo",
      field: "periodo",
      width: "w-[150px]",
      align: "left",
    },
    {
      header: "entidad",
      field: "entidad",
      width: "w-[250px]",
      align: "left",
    },
    {
      header: "situación",
      field: "situacion",
      width: "w-[150px]",
      align: "center",
    },
    {
      header: "monto",
      field: "monto",
      width: "w-[150px]",
      align: "right",
    },
  ];

  return { tableConfig };
}
