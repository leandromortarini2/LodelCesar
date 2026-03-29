export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div
        className="w-20 h-20 rounded-full border-8 border-gray-200/50 border-t-primary  animate-spin
"
      ></div>

      <p className="mt-4 text-xl font-semibold text-blue-600 animate-pulse">
        Cargando...
      </p>
    </div>
  );
}
