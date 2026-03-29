import Contact from "./Contact";
import EmpresasIcons from "./CompanyIcons";

export default function Footer() {
  return (
    <footer className="w-full lg:h-80 bg-primary flex flex-col justify-center items-center py-8 lg:py-0 gap-5">
      <Contact />
      <hr className="text-white-primary h-2 w-[80%]" />
      <EmpresasIcons />
    </footer>
  );
}
