import Contact from "./Contact";
import EmpresasIcons from "./CompanyIcons";

export default function Footer({
  handleRedirectSocial,
}: {
  handleRedirectSocial: any;
}) {
  return (
    <footer className="w-full lg:h-80 bg-colorUno flex flex-col justify-center items-center py-8 lg:py-0 gap-5">
      <Contact />
      <hr className="text-colorTres h-2 w-[80%]" />
      <EmpresasIcons handleRedirectSocial={handleRedirectSocial} />
    </footer>
  );
}
