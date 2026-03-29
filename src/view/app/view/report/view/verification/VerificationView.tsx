import CustomeTable from "../../../../components/CustomeTable";
import CustomeTitle from "../../../../components/CustomeTitle";
import useConfigTable from "./hook/useConfigTable";
import { padronData } from "./mock/padronData";

export default function VerificationView() {
  const tableConfig = useConfigTable();
  return (
    <section className="h-screen space-y-5 w-full bg-white-primary p-6 ">
      <CustomeTitle title="Verificación Oficial" type="h2" font="semibold" />
      <CustomeTitle
        title="Padrón Electoral"
        type="h4"
        font="semibold"
        color="text-secondary"
      />
      <div className="w-full h-full flex gap-5">
        <CustomeTable
          data={padronData}
          config={tableConfig}
          hoverable={false}
        />
      </div>
    </section>
  );
}
