import { GoAlert } from "react-icons/go";

interface Props {
  emptyMessage?: string;
  handleResetFilters?: () => void;
}

export default function EmptyComponent({
  emptyMessage = "",
  handleResetFilters,
}: Props) {
  return (
    <div className="w-full flex flex-col items-center justify-center p-10 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg">
      <div className="bg-orange-100 p-4 rounded-full mb-4">
        <GoAlert className="text-orange-500 text-3xl" />
      </div>
      <p className="text-gray-600 font-medium text-center max-w-md">
        {emptyMessage || "No hay datos disponibles para mostrar."}
      </p>
      <button
        onClick={handleResetFilters}
        className="mt-4 text-primary cursor-pointer font-semibold hover:underline"
      >
        Limpiar todos los filtros
      </button>
    </div>
  );
}
