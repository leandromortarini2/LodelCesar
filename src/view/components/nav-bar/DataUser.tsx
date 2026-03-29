import { IoMdPerson } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

export default function DataUser({ openModal, closeModal, isOpen }: Props) {
  return (
    <section className="flex flex-col items-end justify-end font-semibold">
      {!isOpen ? (
        <div
          onClick={openModal}
          className="flex gap-2 items-center justify-center bg-tertiary p-3 rounded-full cursor-pointer hover:bg-tertiary/80"
        >
          <IoMdPerson className="text-white text-xl" />
        </div>
      ) : (
        <div
          onClick={closeModal}
          className="flex gap-2 items-center justify-center bg-tertiary p-3 rounded-full cursor-pointer hover:bg-tertiary/80"
        >
          <IoCloseOutline className="text-white text-xl" />
        </div>
      )}
    </section>
  );
}
