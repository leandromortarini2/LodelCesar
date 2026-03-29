import { useMemo, useState } from "react";
import type { ColumnConfig } from "../../../../../components/CustomeTable";
import { useSearch } from "../../../../../hook/useSearch";
import { stateCreditData } from "../mock/stateCreditData";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function useConfigStateCredit() {
  const [selectedShare, setSelectedShare] = useState("");

  const {
    dataTable,
    searchValue,
    isSearching,
    inputRef,
    handleOnSearch,
    handleClean: handleCleanSearch,
    onChange: onSearchChange,
  } = useSearch({
    initialData: stateCreditData,
    searchFields: [
      "id",
      "entidadReporte",
      "socio",
      "informe",
      "ar",
      "tipo",
      "credito",
      "tipo",
      "monto",
      "cuotas",
      "importeCuota",
      "condiciones",
    ],
  });

  const handleResetFilters = () => {
    handleCleanSearch();
    setSelectedShare("");
  };

  const hasActiveFilters =
    searchValue.trim().length > 0 ||
    (selectedShare !== "" && selectedShare !== "ar");

  const displayData = useMemo(() => {
    if (
      !selectedShare ||
      selectedShare === "ar" ||
      selectedShare === "cuotas"
    ) {
      return dataTable;
    }
    return dataTable.filter((item) => {
      return (
        String(item.ar ? "Aprobado" : "Rechazado") === selectedShare ||
        String(item.cuotas) === selectedShare
      );
    });
  }, [dataTable, selectedShare]);

  const configTable: ColumnConfig[] = [
    {
      header: "Entidad Reporte",
      field: "entidadReporte",
      width: "w-[220px]",
      align: "left",
    },
    {
      header: "Socio",
      field: "socio",
      width: "w-[220px]",
      align: "left",
    },
    {
      header: "informe",
      field: "informe",
      width: "w-[120px]",
      align: "right",
    },
    {
      header: (
        <div className="flex items-center justify-center gap-1 group relative">
          <IoInformationCircleOutline className="text-white cursor-help text-lg" />
          <span>A/R</span>

          <div className="absolute top-4 capitalize hidden group-hover:block w-40 p-2 bg-tertiary text-white text-xs rounded shadow-lg z-50">
            Estado del crédito: (A) Acordado <br /> (R) Rechazado
          </div>
        </div>
      ),
      width: "w-[70px]",
      align: "center",
      render: (item) => {
        const approved = item.ar === true ? true : false;
        return (
          <div className="flex space-x-2  justify-center">
            {approved ? (
              <IoCheckmarkCircleOutline className="text-2xl text-success" />
            ) : (
              <IoCloseCircleOutline className="text-2xl text-error" />
            )}
          </div>
        );
      },
    },
    {
      header: "credito",
      field: "credito",
      width: "w-[130px]",
      align: "left",
    },
    {
      header: "tipo",
      field: "tipo",
      width: "w-[70px]",
      align: "right",
    },
    {
      header: "monto",
      field: "monto",
      width: "w-[130px]",
      align: "right",
    },
    {
      header: "cuotas",
      field: "cuotas",
      width: "w-[80px]",
      align: "right",
    },
    {
      header: "imp. Cta.",
      field: "importeCuota",
      width: "w-[130px]",
      align: "right",
    },
    {
      header: "condiciones",
      field: "condiciones",
      width: "w-[180px]",
      align: "left",
    },
  ];

  return {
    configTable,
    selectedShare,
    setSelectedShare,
    handleResetFilters,
    hasActiveFilters,
    dataTable,
    searchValue,
    isSearching,
    inputRef,
    handleOnSearch,
    handleCleanSearch,
    onSearchChange,
    displayData,
  };
}
