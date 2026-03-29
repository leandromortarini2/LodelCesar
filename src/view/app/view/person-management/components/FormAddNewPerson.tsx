import CustomeButton from "../../../../components/CustomeButton";
import { useFormContext } from "react-hook-form";
import FormPerson from "./FormPerson";
import FormCompany from "./FormCompany";

export default function FormAddNewPerson() {
  const { handleSubmit } = useFormContext();

  const {
    formState: { isValid, isDirty },
  } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-10"
    >
      <div className="flex justify-evenly w-[1220px] min-h-[350px] gap-10 ">
        <FormPerson />
        <FormCompany />
      </div>
      <div className="w-full flex justify-end">
        <CustomeButton
          type="submit"
          disabled={!isValid || !isDirty}
          claseButton="primary"
          text="Cargar Nueva Persona"
          color="bg-tertiary"
          hover="hover:bg-tertiary/80"
        />
      </div>
    </form>
  );
}
