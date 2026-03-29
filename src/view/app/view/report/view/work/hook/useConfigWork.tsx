import type { ColumnConfig } from "../../../../../components/CustomeTable";

export default function useConfigWork() {
  const configTableReportWork: ColumnConfig[] = [
    {
      header: "Socio Informante",
      field: "socio",
      width: "w-[220px]",
      align: "left",
    },
    {
      header: "Empresa",
      field: "empresa",
      width: "w-[220px]",
      align: "left",
    },
    {
      header: "Datos de Domicilio",
      field: "domicilio",
      width: "w-[220px]",
      align: "left",
    },
    {
      header: "Localidad",
      field: "localidad",
      width: "w-[220px]",
      align: "center",
    },
    {
      header: "Provincia",
      field: "nprovincia",
      width: "w-[220px]",
      align: "center",
    },
    {
      header: "Código Postal",
      field: "cpostal",
      width: "w-[100px]",
      align: "center",
    },
  ];

  const configTableWork: ColumnConfig[] = [
    {
      header: "Empleador",
      field: "empleador",
      width: "w-[150px]",
      align: "left",
    },
    {
      header: "CUIT Empleador",
      field: "cuit",
      width: "w-[250px]",
      align: "left",
    },
    {
      header: "Domicilio Empleador",
      field: "domicilio",
      width: "w-[150px]",
      align: "left",
    },
    {
      header: "Localidad",
      field: "localidad",
      width: "w-[150px]",
      align: "center",
    },
    {
      header: "Provincia",
      field: "nprovincia",
      width: "w-[250px]",
      align: "center",
    },
    {
      header: "Código Postal",
      field: "cpostal",
      width: "w-[250px]",
      align: "center",
    },
  ];

  return { configTableReportWork, configTableWork };
}
