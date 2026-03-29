import { useFormContext } from "react-hook-form";
import CustomeTitle from "../../../components/CustomeTitle";
import CustomeInput from "../../../../components/input/CustomeInput";
import ErrorForm from "../../../components/ErrorForm";
import LocalityComponent from "../../../components/SearchLocality/LocalityComponent";

export default function FormCompany() {
  const {
    formState: { errors },
    register,
    getValues,
  } = useFormContext();

  return (
    <>
      <div className="w-1/3  space-y-5">
        <div className="h-10">
          <CustomeTitle
            title="Trabajo"
            type="h3"
            font="bold"
            color="text-secondary"
          />
        </div>
        <div>
          <CustomeInput
            type="text"
            label="Nombre Empresa/Entidad *"
            height="h-10"
            colorBorder="border-gray-primary"
            {...register("company", {
              required: "La empresa es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
          />
          {errors.company && (
            <ErrorForm
              message={
                typeof errors.company.message === "string"
                  ? errors.company.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
        <div>
          <CustomeInput
            type="text"
            label="Domicilio *"
            height="h-10"
            colorBorder="border-gray-primary"
            {...register("companyAddress", {
              required: "El domicilio es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
          />
          {errors.companyAddress && (
            <ErrorForm
              message={
                typeof errors.companyAddress.message === "string"
                  ? errors.companyAddress.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
        <LocalityComponent
          register={register}
          errors={errors}
          nameLocalidad="companyLocalidad"
          nameCpostal="companyCpostal"
          nameProvincia="companyNprovincia"
          label="Localidad Empresa"
        />

        <div className="flex flex-col">
          <div className="flex gap-5 items-end justify-start w-[400px]">
            <CustomeInput
              label="Celular *"
              placeholder="11"
              type="number"
              width="w-[60px]"
              height="h-10"
              colorBorder="border-gray-primary"
              {...register("companyCodarea", {
                required: "Obligatorio",
                deps: ["companyTelefono"],
                onChange: (e) => {
                  if (e.target.value.length > 3) {
                    e.target.value = e.target.value.slice(0, 3);
                  }
                },
              })}
            />

            <CustomeInput
              type="number"
              placeholder="12345678"
              width="w-[150px]"
              height="h-10"
              colorBorder="border-gray-primary"
              {...register("companyTelefono", {
                required: "Número obligatorio",
                onChange: (e) => {
                  if (e.target.value.length > 8) {
                    e.target.value = e.target.value.slice(0, 8);
                  }
                },
                validate: (value) => {
                  const codArea = getValues("companyCodarea") || "";
                  const total = codArea.length + value.length;

                  if (codArea.length < 2) {
                    return "El código de área debe tener al menos 2 dígitos";
                  }

                  if (total !== 10) {
                    return `El celular debe tener 10 dígitos en total (llevas ${total})`;
                  }

                  return true;
                },
              })}
            />
          </div>

          {errors.companyTelefono?.message ? (
            <ErrorForm message={errors.companyTelefono.message.toString()} />
          ) : errors.companyCodarea?.message ? (
            <ErrorForm message={errors.companyCodarea.message.toString()} />
          ) : null}
        </div>
      </div>
    </>
  );
}
