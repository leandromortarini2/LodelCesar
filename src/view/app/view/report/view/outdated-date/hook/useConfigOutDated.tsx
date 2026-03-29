import { useMemo, useState } from "react";
import type { ColumnConfig } from "../../../../../components/CustomeTable";
import { useSearch } from "../../../../../hook/useSearch";
import { outDatedData } from "../mock/outDatedData";

export default function useConfigOutDated() {
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
    initialData: outDatedData,
    searchFields: [
      "id",
      "entidadReporte",
      "socio",
      "otorgado",
      "credito",
      "tipo",
      "ingreso",
      "cancelado",
      "estado",
    ],
  });

  const handleResetFilters = () => {
    handleCleanSearch();
    setSelectedShare("");
  };

  const hasActiveFilters =
    searchValue.trim().length > 0 ||
    (selectedShare !== "" && selectedShare !== "estado");

  const displayData = useMemo(() => {
    if (!selectedShare || selectedShare === "estado") return dataTable;

    const result = dataTable.filter(
      (item) => String(item.estado) === selectedShare
    );
    return result;
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
      header: "otorgado",
      field: "otorgado",
      width: "w-[100px]",
      align: "center",
    },
    {
      header: "crédito",
      field: "credito",
      width: "w-[150px]",
      align: "center",
    },
    {
      header: "tipo",
      field: "tipo",
      width: "w-[70px]",
      align: "right",
    },
    {
      header: "ingreso",
      field: "ingreso",
      width: "w-[150px]",
      align: "right",
    },
    {
      header: "cancelado",
      field: "cancelado",
      width: "w-[70px]",
      align: "center",
    },
    {
      header: "estado",
      field: "estado",
      width: "w-[180px]",
      align: "center",
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
