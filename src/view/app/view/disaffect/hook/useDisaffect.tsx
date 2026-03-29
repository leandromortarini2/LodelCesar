import { useEffect, useState } from "react";
import CustomeButton from "../../../../components/CustomeButton";
import type { ColumnConfig } from "../../../components/CustomeTable";
import useHandleModal from "../../../hook/useHandleModal";
import customeAlert from "../../../utils/customeAlert";
import { dataDesafectaciones } from "../mock/dataTable";

export default function useDisaffect() {
  const [disaffectIds, setDisaffectIds] = useState(new Set<number>());
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSearch, setDataSearch] = useState({
    search: "",
  });
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataTable, setDataTable] = useState(dataDesafectaciones);
  const [fileForm, setFileForm] = useState<File | null>(null);

  const itemsPerPage = 10;
  const totalItems = dataTable.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = dataTable.slice(startIndex, endIndex);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { isOpen, openModal, closeModal } = useHandleModal();

  function handleOnSearch() {
    setIsSearching(true);
    const data = dataDesafectaciones.filter((item) => {
      const isMatchDni = item.dni
        .toLowerCase()
        .includes(dataSearch.search.toLowerCase());
      const isMatchName = item.nombre
        .toLowerCase()
        .includes(dataSearch.search.toLowerCase());
      const isMatchClienteId = item.clienteId
        .toLowerCase()
        .includes(dataSearch.search.toLowerCase());
      if (isMatchDni) {
        return item;
      } else if (isMatchName) {
        return item;
      } else if (isMatchClienteId) {
        return item;
      }
    });
    setDataTable(data);
  }
  function handleClean() {
    setIsSearching(false);
    setDataSearch({ search: "" });
    setDataTable(dataDesafectaciones);
  }
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDataSearch({
      ...dataSearch,
      [name]: value,
    });
  }

  function handleDesafectarRow(id: number) {
    const newSet = new Set(disaffectIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    customeAlert({
      title: "¿Estas seguro/a?",
      text: "Estas a punto de desafectar a nombre de la persona",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonColor: "#D12D2D",
      confirmButtonText: "Desafectar",
      showCancelButton: true,
      cancelButtonColor: "#16457E",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed && newSet.has(id)) {
        newSet.add(id);
        setDisaffectIds(newSet);
      }
    });
  }

  const tableConfig: ColumnConfig[] = [
    { header: "Fecha", field: "fecha", align: "left" },
    { header: "Nombre", field: "nombre", align: "left" },
    { header: "DNI", field: "dni", align: "right" },
    { header: "Cliente ID", field: "clienteId", align: "right" },
    {
      header: "Acciones",
      align: "center",
      render: (item: (typeof dataDesafectaciones)[0]) => {
        const isDiseffected = disaffectIds.has(item.id);
        return (
          <div className="flex space-x-2  justify-center">
            {isDiseffected ? (
              <CustomeButton
                text="Desafectado"
                positionIcon="left"
                claseButton="secondary"
                disabled={isDiseffected}
                color="text-error"
              />
            ) : (
              <CustomeButton
                text="Desafectar"
                positionIcon="left"
                claseButton="primary"
                color="bg-error"
                hover="hover:bg-error/80"
                disabled={isDiseffected}
                onClick={() => handleDesafectarRow(item.id)}
              />
            )}
          </div>
        );
      },
    },
  ];
  return {
    dataSearch,
    setDataSearch,
    isSearching,
    setIsSearching,
    isLoading,
    setIsLoading,
    dataTable,
    setDataTable,
    itemsPerPage,
    totalItems,
    totalPages,
    startIndex,
    endIndex,
    currentData,
    handlePageChange,
    isOpen,
    openModal,
    closeModal,
    handleOnSearch,
    handleClean,
    onChange,
    handleDesafectarRow,
    tableConfig,
    fileForm,
    setFileForm,
    currentPage,
  };
}
