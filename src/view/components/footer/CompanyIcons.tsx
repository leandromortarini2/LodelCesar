export default function EmpresasIcons() {
  const empresas = [
    "/logos/empresas/1.png",
    "/logos/empresas/2.png",
    "/logos/empresas/3.png",
    "/logos/empresas/4.png",
    "/logos/empresas/5.png",
    "/logos/empresas/6.png",
  ];

  return (
    <div className="w-[80%] h-16 bg-[#1E1E1E]/20 rounded-2xl flex justify-between items-center px-5">
      {empresas.map((empresa, index) => (
        <img key={index} src={empresa} alt="" className="h-4 md:h-8 lg:h-10" />
      ))}
    </div>
  );
}
