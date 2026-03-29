import CustomeTitle from "../../../../../components/CustomeTitle";
import CustomeTable from "../../../../../components/CustomeTable";
import EmptyComponent from "../../../../../components/EmptyComponent";
import useConfigMaturity from "../hook/useConfigMaturity";
import { dataMaturity } from "../mock/dataMaturity";

export default function Maturity() {
  const { configTableMaturity } = useConfigMaturity();

  const emptyMessage = "No hay datos disponibles para mostrar";

  return (
    <div className="w-full space-y-5">
      <CustomeTitle
        title="Primer vencimiento"
        type="h4"
        font="semibold"
        color="text-default-text"
      />
      <hr className="h-1 w-full text-gray-secondary" />
      {dataMaturity.length > 0 ? (
        <CustomeTable
          data={dataMaturity}
          config={configTableMaturity}
          hoverable={false}
        />
      ) : (
        <EmptyComponent emptyMessage={emptyMessage} />
      )}
    </div>
  );
}
