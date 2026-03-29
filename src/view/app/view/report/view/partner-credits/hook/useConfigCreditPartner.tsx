import { useMemo, useState } from "react";
import type { ColumnConfig } from "../../../../../components/CustomeTable";
import { useSearch } from "../../../../../hook/useSearch";
import { dataCreditPartner } from "../mock/dataCreditPartner";

export default function useConfigCreditPartner() {
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
    initialData: dataCreditPartner,
    searchFields: [
      "id",
      "socio",
      "importeAprox",
      "cuotas",
      "primerVencimiento",
    ],
  });

  const handleResetFilters = () => {
    handleCleanSearch();
    setSelectedShare("");
  };

  const hasActiveFilters =
    searchValue.trim().length > 0 ||
    (selectedShare !== "" && selectedShare !== "cuotas");

  const displayData = useMemo(() => {
    if (!selectedShare || selectedShare === "cuotas") return dataTable;

    return dataTable.filter((item) => String(item.cuotas) === selectedShare);
  }, [dataTable, selectedShare]);

  const configTable: ColumnConfig[] = [
    {
      header: "Socio",
      field: "socio",
      width: "w-[250px]",
      align: "left",
    },
    {
      header: "Importe Aprox",
      field: "importeAprox",
      width: "w-[100px]",
      align: "right",
    },
    {
      header: "Cuotas",
      field: "cuotas",
      width: "w-[150px]",
      align: "center",
    },
    {
      header: "Primer Vencimiento",
      field: "primerVencimiento",
      width: "w-[150px]",
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
