import { FormProvider, useForm } from "react-hook-form";
import CustomeTitle from "../../components/CustomeTitle";
import FormComments from "./components/FormComments";

export default function CommentsView() {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      codarea: "",
      telefono: "",
      message: "",
    },
  });

  return (
    <section className="w-full min-h-screen flex justify-center py-10 ">
      <div className="flex flex-col  justify-center   h-[750px] w-[750px] gap-10 rounded-2xl ">
        <div className="space-y-2 text-center  w-full">
          <CustomeTitle
            title="Comentarios y Sugerencias"
            type="h2"
            font="semibold"
          />
          <CustomeTitle
            title="Ayúdenos a mejorar, envié su contacto o sugerencia"
            type="h4"
            color="text-tertiary"
            font="semibold"
          />
        </div>

        <div className=" w-full ">
          <FormProvider {...methods}>
            <FormComments />
          </FormProvider>
        </div>
      </div>
    </section>
  );
}
