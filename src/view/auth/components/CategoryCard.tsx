interface CategoryProps {
  categoria: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  };
}
export default function CategoryCard({ categoria }: CategoryProps) {
  //   const { label, icon } = categoria;
  const { label } = categoria;

  return (
    <div className="group cursor-pointer">
      <div className="flex flex-col items-center justify-center p-6 bg-colorUno/50   rounded-2xl shadow-sm   h-24">
        {/* <div className="text-4xl mb-3 text-[#a67c52] group-hover:text-white transition-colors">
          {icon}
        </div> */}
        <h3 className="text-sm font-bold uppercase tracking-wider text-center">
          {label}
        </h3>
      </div>
    </div>
  );
}
