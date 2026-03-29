import { useState, useMemo } from "react";
import CustomeButton from "../../../../../components/CustomeButton";
import CustomeInput from "../../../../../components/input/CustomeInput";
import CustomeTable from "../../../../components/CustomeTable";
import CustomeTitle from "../../../../components/CustomeTitle";
import Search from "../../../../components/Search";
import useConfigOperations from "./hook/useConfigOperations";
import { useSearch } from "../../../../hook/useSearch";
import { dataOperations } from "./mock/dataOperations";
import { MdCleaningServices } from "react-icons/md";
import EmptyComponent from "../../../../components/EmptyComponent";
import FooterButtons from "./components/FooterButtons";
import useHandleModal from "../../../../hook/useHandleModal";
import { Modal } from "../../../../components/Modal";
import Maturity from "./components/Maturity";

export default function DetailsOperations() {
  const { configTableOperations } = useConfigOperations();
  const [selectedDate, setSelectedDate] = useState("");
  const { isOpen, openModal, closeModal } = useHandleModal();
  const {
    dataTable,
    searchValue,
    isSearching,
    inputRef,
    handleOnSearch,
    handleClean: handleCleanSearch,
    onChange: onSearchChange,
  } = useSearch({
    initialData: dataOperations,
    searchFields: ["id", "entidadReporte", "socio", "operador", "informe"],
  });

  const { filteredData, emptyMessage } = useMemo(() => {
    let data = dataTable;
    let message = "";

    if (selectedDate && selectedDate.length === 10) {
      const [year, month, day] = selectedDate.split("-");
      const formattedDateForFilter = `${day}/${month}/${year}`;

      data = data.filter((item) => item.fecha === formattedDateForFilter);

      if (data.length === 0) {
        message = `No se han encontrado datos para la fecha seleccionada: ${formattedDateForFilter}`;
      }
    }

    if (data.length === 0 && searchValue.trim() !== "" && !message) {
      message = `No hubo coincidencias con la búsqueda realizada: "${searchValue}"`;
    }

    if (
      data.length === 0 &&
      searchValue.trim() !== "" &&
      selectedDate &&
      !message
    ) {
      message =
        "No se encontraron resultados que coincidan con la búsqueda y la fecha seleccionada.";
    }

    return { filteredData: data, emptyMessage: message };
  }, [dataTable, selectedDate, searchValue]);

  const handleResetFilters = () => {
    handleCleanSearch();
    setSelectedDate("");
  };

  const canReset = searchValue.trim().length > 0 || selectedDate.length > 0;

  return (
    <section className="h-screen space-y-7 w-full bg-white-primary p-6">
      <CustomeTitle
        title="Detalle de Operaciones de Deuda"
        type="h2"
        font="semibold"
      />

      <div className="w-full flex justify-between items-center">
        <CustomeTitle
          title="Datos de Informes"
          type="h4"
          font="semibold"
          color="text-secondary"
        />

        <div className="flex gap-5 items-center">
          <CustomeInput
            type="date"
            width="w-[200px]"
            height="h-[40px]"
            colorBorder="border-gray-secondary"
            value={selectedDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedDate(e.target.value)
            }
          />

          <Search
            inputRef={inputRef}
            inputName={searchValue}
            handleClean={handleResetFilters}
            handleOnSearch={handleOnSearch}
            isSearching={isSearching}
            onChange={onSearchChange}
          />

          <CustomeButton
            height="h-10"
            claseButton="primary"
            onClick={handleResetFilters}
            disabled={!canReset}
            Icon={MdCleaningServices}
            color={canReset ? "bg-red-600" : "bg-gray-primary"}
            hover={canReset ? "hover:bg-red-500" : ""}
          />
        </div>
      </div>

      <div className="w-full">
        {filteredData.length > 0 ? (
          <CustomeTable
            data={filteredData}
            config={configTableOperations}
            hoverable={false}
          />
        ) : (
          <EmptyComponent
            emptyMessage={emptyMessage}
            handleResetFilters={handleResetFilters}
          />
        )}
      </div>

      <CustomeTitle
        title="Créditos"
        type="h4"
        font="semibold"
        color="text-secondary"
      />
      <FooterButtons openModal={openModal} />

      {isOpen && (
        <Modal close={closeModal} buttonClose modalWidth="w-[1000px]">
          <Maturity />
        </Modal>
      )}
    </section>
  );
}
