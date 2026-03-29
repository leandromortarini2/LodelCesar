import Button from "../../components/CustomeButton";
import CustomeInput from "../../components/input/CustomeInput";
import { useFormContext } from "react-hook-form";
import useLandingStore from "../store/storeLanding";
import ErrorForm from "../../app/components/ErrorForm";
import CustomeButton from "../../components/CustomeButton";

interface IFormLogin {
  onSubmit: () => void;
  closeModal?: () => void;
}

export default function FormLogin({ onSubmit, closeModal }: IFormLogin) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const { disabled } = useLandingStore();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 2xl:gap-8 bg items-center "
    >
      <div>
        <CustomeInput
          {...register("usuario")}
          type="text"
          label="Usuario"
          width="w-80 lg:w-72"
          colorBorder="border-gray-primary"
          colorLabel="text-text-default"
          height="h-10"
        />{" "}
        {errors.user && (
          <ErrorForm
            message={
              typeof errors.user.message === "string"
                ? errors.user.message
                : "Campo inválido"
            }
          />
        )}
      </div>
      <div>
        <CustomeInput
          {...register("operador", {
            required: "El operador es obligatorio",
            pattern: {
              value: /^[0-9]*$/,
              message: "Solo números",
            },
            minLength: {
              value: 1,
              message: "Debe tener al menos 1 caracteres",
            },
          })}
          type="number"
          label="Operador"
          width="w-80 lg:w-72"
          colorBorder="border-gray-primary"
          colorLabel="text-text-default"
          height="h-10"
        />
        {errors.operator && (
          <ErrorForm
            message={
              typeof errors.operator.message === "string"
                ? errors.operator.message
                : "Campo inválido"
            }
          />
        )}
      </div>
      <div>
        <CustomeInput
          {...register("password", {
            required: "La contraseña es obligatoria",
          })}
          type="password"
          label="Contraseña"
          width="w-80 lg:w-72"
          colorBorder="border-gray-primary"
          colorLabel="text-text-default"
          height="h-10"
        />{" "}
        {errors.password && (
          <ErrorForm
            message={
              typeof errors.password.message === "string"
                ? errors.password.message
                : "Campo inválido"
            }
          />
        )}
      </div>
      <Button
        disabled={disabled}
        type="submit"
        text="Iniciar Sesión"
        width="w-80 lg:w-72"
        claseButton="primary"
        height="h-10"
      />
      <div className="lg:hidden">
        <CustomeButton
          onClick={closeModal}
          text="Cancelar"
          claseButton="secondary"
          border={true}
          borderColor="border-gray-primary"
          width="w-80 lg:w-72"
          height="h-10"
        />
      </div>
    </form>
  );
}
