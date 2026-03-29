import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import CustomeButton from "../../../../components/CustomeButton";

interface Props {
  handleAdd: () => void;
  handleSave: () => void;
  handleDiscard: () => void;
}

export default function CrudButtons({
  handleAdd,
  handleSave,
  handleDiscard,
}: Props) {
  return (
    <section className="w-full h-16  flex justify-between bg-[#eeeeee] rounded-lg px-6  items-center">
      <div className="flex items-center">
        <CustomeButton
          onClick={handleAdd}
          text="Agregar"
          positionIcon="left"
          Icon={IoIosAddCircleOutline}
          claseButton="primary"
          color="bg-cuartity"
          hover="hover:bg-cuartity/80"
        />
      </div>
      <div className="flex gap-5 items-center">
        <CustomeButton
          onClick={handleSave}
          width="w-56"
          text="Guardar Cambios"
          Icon={FaRegSave}
          positionIcon="left"
          claseButton="primary"
          color="bg-success"
          hover="hover:bg-success/80"
        />{" "}
        <CustomeButton
          onClick={handleDiscard}
          width="w-56"
          text="Descartar Cambios"
          Icon={MdBlock}
          positionIcon="left"
          claseButton="primary"
          color="bg-error"
          hover="hover:bg-error/80"
        />
      </div>
    </section>
  );
}
