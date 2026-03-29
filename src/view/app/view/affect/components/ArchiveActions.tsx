import CustomeButton from "../../../../components/CustomeButton";
import { HiDocumentArrowUp, HiDocumentArrowDown } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";

interface Props {
  openModalArchive: () => void;
}

export default function ArchiveActions({ openModalArchive }: Props) {
  return (
    <section className="w-full h-16  flex justify-end items-center px-5 2xl:px-10 bg-[#F2F2F2]">
      <div className="flex gap-5">
        <CustomeButton
          onClick={openModalArchive}
          text="Afectación Masiva"
          positionIcon="left"
          claseButton="primary"
          Icon={HiDocumentArrowUp}
        />
        <CustomeButton
          text="Afectación vía API"
          positionIcon="left"
          claseButton="secondary"
          border
          borderColor="border-gray-secondary"
          Icon={IoIosLink}
        />
        <a href="/Postulaciones- 2025.xlsx" download="Postulaciones-2025.xlsx">
          <CustomeButton
            text="Descargar Plantilla"
            positionIcon="left"
            claseButton="secondary"
            border
            borderColor="border-gray-secondary"
            Icon={HiDocumentArrowDown}
          />
        </a>
      </div>
    </section>
  );
}
