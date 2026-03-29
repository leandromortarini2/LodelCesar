import CustomeTable from "../../../../components/CustomeTable";
import CustomeTitle from "../../../../components/CustomeTitle";
import EmptyComponent from "../../../../components/EmptyComponent";
import Search from "../../../../components/Search";
import { useSearch } from "../../../../hook/useSearch";
import { dataBCRA } from "./mock/dataBCRA";
import useConfigTableBCRA from "./hook/useConfigTableBCRA";
import CustomeButton from "../../../../../components/CustomeButton";
import { MdBlock } from "react-icons/md";
import InfoSection from "./components/InfoSection";

export default function RegulatoryReports() {
  const {
    dataTable,
    searchValue,
    isSearching,
    inputRef,
    handleOnSearch,
    handleClean: handleCleanSearch,
    onChange: onSearchChange,
  } = useSearch({
    initialData: dataBCRA,
    searchFields: ["id", "periodo", "entidad", "situacion", "monto"],
  });

  const { tableConfig } = useConfigTableBCRA();

  const emptyMessage = "No hay datos disponibles para mostrar";

  return (
    <section className=" space-y-7 w-full bg-white-primary p-6">
      <CustomeTitle
        title="Informes Regulatorios y Riesgo"
        type="h2"
        font="semibold"
      />

      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src="/logos/empresas/1.png" alt="" />
          <CustomeTitle
            title="Informe BCRA"
            type="h4"
            font="semibold"
            color="text-secondary"
          />
        </div>

        <Search
          inputRef={inputRef}
          inputName={searchValue}
          handleClean={handleCleanSearch}
          handleOnSearch={handleOnSearch}
          isSearching={isSearching}
          onChange={onSearchChange}
          buttonClean
        />
      </div>

      <div className="w-full">
        {dataTable.length > 0 ? (
          <CustomeTable
            data={dataTable}
            config={tableConfig}
            hoverable={false}
          />
        ) : (
          <EmptyComponent emptyMessage={emptyMessage} />
        )}
      </div>

      <div className="w-full flex justify-between items-end">
        <InfoSection />
        <div className="w-1/4 flex justify-end items-end h-20 ">
          <CustomeButton
            text="Cheques Rechazados"
            claseButton="primary"
            color="bg-error"
            hover="hover:bg-error/80"
            type="button"
            Icon={MdBlock}
          />
        </div>
      </div>
    </section>
  );
}
