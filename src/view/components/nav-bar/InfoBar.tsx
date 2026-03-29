import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function InfoBar() {
  const dataContact = {
    email: "info@codesa.org.ar",
    phone: "0264 4277060",
  };
  return (
    <section className="w-full  h-[50px] bg-colorTres flex justify-center items-center gap-10 text-white text-xs ">
      <span className="flex justify-center items-center gap-1 lg:gap-2 h-full">
        <IoIosCall className="text-sm lg:text-xl" />
        {dataContact.phone}
      </span>
      <span className="flex justify-center items-center gap-1 lg:gap-2 h-full">
        <MdOutlineEmail className="text-sm lg:text-xl" />
        {dataContact.email}
      </span>
    </section>
  );
}
