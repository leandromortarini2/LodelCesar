import { MdCleaningServices } from "react-icons/md";
import CustomeButton from "../../../../../components/CustomeButton";
import CustomeTable from "../../../../components/CustomeTable";
import CustomeTitle from "../../../../components/CustomeTitle";
import EmptyComponent from "../../../../components/EmptyComponent";
import Search from "../../../../components/Search";
import Select from "../../../../../components/input/Select";
import useConfigCreditPartner from "./hook/useConfigCreditPartner";
import ReturnButton from "../../components/ReturnButton";

export default function PartnerCreditsView() {
  const {
    configTable,
    selectedShare,
    setSelectedShare,
    handleResetFilters,
    hasActiveFilters,
    searchValue,
    isSearching,
    inputRef,
    handleOnSearch,
    onSearchChange,
    displayData,
  } = useConfigCreditPartner();

  return (
    <section className="h-screen space-y-7 w-full bg-white-primary p-6 flex flex-col">
      <ReturnButton />

      <div className="w-full flex justify-between items-center">
        <CustomeTitle
          title="Créditos Otorgados por Socios"
          type="h2"
          font="semibold"
        />

        <div className="flex gap-5 items-end">
          <Select
            options={["cuotas", "24", "18", "12", "9", "6", "3", "1"]}
            value={selectedShare}
            onChange={(e) => setSelectedShare(e.target.value)}
            width="w-32"
            height="h-10"
            colorBorder="border-gray-secondary"
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
            disabled={!hasActiveFilters}
            Icon={MdCleaningServices}
            color={hasActiveFilters ? "bg-red-600" : "bg-gray-primary"}
            hover={hasActiveFilters ? "hover:bg-red-500" : ""}
          />
        </div>
      </div>

      <div className="w-full grow">
        {displayData.length > 0 ? (
          <CustomeTable
            data={displayData}
            config={configTable}
            hoverable={false}
          />
        ) : (
          <EmptyComponent
            emptyMessage="No se encontraron créditos con los filtros seleccionados."
            handleResetFilters={handleResetFilters}
          />
        )}
      </div>
    </section>
  );
}
