import type { ColumnConfig } from "../../../../../components/CustomeTable";

export default function useConfigMaturity() {
  const configTableMaturity: ColumnConfig[] = [
    {
      header: "Entidad de Reporte",
      field: "entidadReporte",
      width: "w-[250px]",
      align: "left",
    },
    {
      header: "Operador",
      field: "operador",
      width: "w-[100px]",
      align: "right",
    },
    {
      header: "Fecha",
      field: "fecha",
      width: "w-[150px]",
      align: "left",
    },
    {
      header: "Hora",
      field: "hora",
      width: "w-[150px]",
      align: "left",
    },
  ];
  return { configTableMaturity };
}
