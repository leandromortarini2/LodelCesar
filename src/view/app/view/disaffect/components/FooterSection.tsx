import { HiDocumentArrowUp, HiDocumentArrowDown } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";
import CustomeButton from "../../../../components/CustomeButton";
import Pagination from "../../../components/Pagination";

interface Props {
  openModal: () => void;
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export default function FooterSection({
  openModal,
  currentPage,
  totalPages,
  handlePageChange,
}: Props) {
  return (
    <footer className="w-full h-16  flex justify-between items-center">
      <div className="flex gap-5">
        <CustomeButton
          onClick={openModal}
          text="Desafectación Masiva"
          positionIcon="left"
          claseButton="primary"
          color="bg-error"
          hover="hover:bg-error/80"
          Icon={HiDocumentArrowUp}
        />
        <CustomeButton
          text="Desafectación vía API"
          positionIcon="left"
          claseButton="primary"
          Icon={IoIosLink}
        />
        <a href="/Postulaciones- 2025.xlsx" download="Postulaciones-2025.xlsx">
          <CustomeButton
            text="Descargar Plantilla"
            positionIcon="left"
            claseButton="primary"
            Icon={HiDocumentArrowDown}
          />
        </a>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </footer>
  );
}
