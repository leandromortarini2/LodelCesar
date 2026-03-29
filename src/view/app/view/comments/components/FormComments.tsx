import { useFormContext } from "react-hook-form";
import CustomeButton from "../../../../components/CustomeButton";
import CustomeInput from "../../../../components/input/CustomeInput";
import Textarea from "../../../../components/input/Textarea";
import ErrorForm from "../../../components/ErrorForm";

export default function FormComments() {
  const {
    formState: { errors, isValid, isDirty },
    register,
    getValues,
    handleSubmit,
  } = useFormContext();

  return (
    <form
      className="  flex flex-col  gap-10 items-center bg-white rounded-2xl p-10"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="flex flex-col gap-3 items-center">
        <div className="w-full">
          <CustomeInput
            type="text"
            label="Nombre *"
            height="h-10"
            width="w-72"
            colorBorder="border-gray-primary"
            {...register("firstname", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "El nombre no puede contener números ni símbolos",
              },
            })}
          />
          {errors.firstname && (
            <ErrorForm
              message={
                typeof errors.firstname.message === "string"
                  ? errors.firstname.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
        <div className="w-full">
          <CustomeInput
            type="text"
            label="Apellido *"
            height="h-10"
            width="w-72"
            colorBorder="border-gray-primary"
            {...register("lastname", {
              required: "El apellido es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
          />
          {errors.lastname && (
            <ErrorForm
              message={
                typeof errors.lastname.message === "string"
                  ? errors.lastname.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
        <div className="w-full">
          <CustomeInput
            type="email"
            label="Correo Electrónico *"
            placeholder="ejemplo@correo.com"
            height="h-10"
            width="w-96"
            colorBorder="border-gray-primary"
            {...register("email", {
              required: "El correo electrónico es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Formato de correo inválido",
              },
            })}
          />
          {errors.email && (
            <ErrorForm
              message={
                typeof errors.email.message === "string"
                  ? errors.email.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
        <div className="w-full flex flex-col">
          <div className="flex gap-5 items-end justify-start w-[400px]">
            <CustomeInput
              label="Celular *"
              placeholder="11"
              type="number"
              width="w-[60px]"
              height="h-10"
              colorBorder="border-gray-primary"
              {...register("codarea", {
                required: "Código de área obligatorio",
                deps: ["telefono"],
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
              {...register("telefono", {
                required: "Número obligatorio",
                onChange: (e) => {
                  if (e.target.value.length > 8) {
                    e.target.value = e.target.value.slice(0, 8);
                  }
                },
                validate: (value) => {
                  const codArea = getValues("codarea") || "";
                  const total = codArea.length + value.length;

                  if (codArea.length < 2) {
                    return "El código de área debe tener al menos 2 dígitos";
                  }

                  if (total !== 10) {
                    return `El celular debe contener 10 caracteres en total (llevas ${total})`;
                  }

                  return true;
                },
              })}
            />
          </div>

          {(errors.telefono || errors.codarea) && (
            <ErrorForm
              message={String(
                errors.telefono?.message || errors.codarea?.message || ""
              )}
            />
          )}
        </div>
        <div className="w-full">
          <Textarea
            placeholder="Escribe tu comentario"
            label="Comentario"
            width="w-96"
            colorBorder="border-gray-primary"
            {...register("message", {
              required: "El comentario es obligatorio",
              minLength: {
                value: 10,
                message: "El comentario debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message: "El comentario no puede exceder los 500 caracteres",
              },
            })}
          />
          {errors.message && (
            <ErrorForm
              message={
                typeof errors.message.message === "string"
                  ? errors.message.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
      </div>
      <CustomeButton
        text="Enviar"
        disabled={!isValid || !isDirty}
        claseButton="primary"
        color="bg-tertiary"
        hover="hover:bg-tertiary/80"
        width="w-72"
        type="submit"
      />
    </form>
  );
}
