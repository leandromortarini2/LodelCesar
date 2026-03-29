/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocalidadStore } from "../../store/storeLocalities";
import type { ColumnConfig } from "../CustomeTable";
import CustomeTable from "../CustomeTable";

export default function SearchLocalityTable() {
  const dataTabla = useLocalidadStore((s) => s.dataTabla);
  const setDataTablaSeleccionada = useLocalidadStore(
    (s) => s.setDataTableSelect
  );
  const isSearched = useLocalidadStore((s) => s.isSearched);
  const lastSearchTerm = useLocalidadStore((s) => s.lastSearchTerm);

  const dataTableId =
    dataTabla?.map((item) => ({
      ...item,
      id: Number(item?.idcodloc),
    })) || [];

  const columns: ColumnConfig[] = [
    { header: "ID", field: "id", width: "w-[180px]", align: "left" },
    { header: "Localidad", field: "nombre", width: "w-[250px]", align: "left" },
    {
      header: "Provincia",
      field: "nprovincia",
      width: "w-[220px]",
      align: "left",
    },
    {
      header: "Código Postal",
      field: "cpostal",
      width: "w-[120px]",
      align: "center",
    },
  ];

  const handleSelect = (item: any) => {
    setDataTablaSeleccionada(item);
  };

  return (
    <div className="w-full h-full p-4">
      <div className="max-h-[500px] overflow-y-auto border border-gray-200 rounded-xl bg-white shadow-sm">
        <CustomeTable
          data={dataTableId}
          config={columns}
          onSelect={handleSelect}
          selectable={dataTableId.length > 0}
        />

        {isSearched && dataTableId.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center gap-2 text-error italic ">
              <span className="text-xs font-bold uppercase tracking-widest">
                Búsqueda no encontrada para:
              </span>
              <span className="text-xs font-medium italic">
                "{lastSearchTerm}"
              </span>
            </div>
            <p className="text-xs text-default-text mt-1">
              Verifica la ortografía o intenta con otros términos
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
