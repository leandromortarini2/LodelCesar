import CustomeTable from "../../../../components/CustomeTable";
import CustomeTitle from "../../../../components/CustomeTitle";
import StatusCard from "./components/StatusCard";
import useConfigCreditSummary from "./hook/useConfigCreditSummary";
import { reportData } from "./mock/reportData";

export default function CreditSummaryView() {
  const configTable = useConfigCreditSummary();
  return (
    <section className="h-screen space-y-5 w-full bg-white-primary p-6 ">
      <CustomeTitle
        title="Resumen Crediticio Global"
        type="h2"
        font="semibold"
      />
      <div className="w-full h-full flex gap-5">
        <CustomeTable
          data={reportData}
          config={configTable}
          showHeaders={false}
          hoverable={false}
          textSize="text-sm"
        />
        <StatusCard status="Sin antecedentes" />
      </div>
    </section>
  );
}
