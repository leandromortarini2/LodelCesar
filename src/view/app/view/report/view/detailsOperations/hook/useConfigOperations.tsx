import type { ColumnConfig } from "../../../../../components/CustomeTable";

export default function useConfigOperations() {
  const configTableOperations: ColumnConfig[] = [
    {
      header: "Entidad de Reporte",
      field: "entidadReporte",
      width: "w-[250px]",
      align: "left",
    },
    {
      header: "Socio",
      field: "socio",
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
    {
      header: "Informe",
      field: "informe",
      width: "w-[200px]",
      align: "right",
    },
  ];

  return { configTableOperations };
}
