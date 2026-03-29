/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnConfig } from "../../../../../components/CustomeTable";

export default function useConfigCreditSummary() {
  const reportConfig: ColumnConfig[] = [
    {
      header: "",
      field: "label",
      align: "left",
    },
    {
      header: "",
      field: "value",
      align: "right",
      render: (item: any) => <strong>{item.value}</strong>,
    },
  ];
  return reportConfig;
}
