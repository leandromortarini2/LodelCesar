import { Controller, useFormContext } from "react-hook-form";
import CustomeTitle from "../../../components/CustomeTitle";
import CustomeInput from "../../../../components/input/CustomeInput";
import ErrorForm from "../../../components/ErrorForm";
import Select from "../../../../components/input/Select";
import LocalityComponent from "../../../components/SearchLocality/LocalityComponent";

export default function FormPerson() {
  const {
    formState: { errors },
    register,
    control,
    getValues,
  } = useFormContext();

  return (
    <>
      <div className="w-1/3 space-y-5 ">
        <div className="h-10 ">
          <CustomeTitle
            title="Persona"
            type="h3"
            font="bold"
            color="text-secondary"
          />
        </div>
        <div>
          <CustomeInput
            type="text"
            label="Nombre *"
            height="h-10"
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
        <div>
          <CustomeInput
            type="text"
            label="Apellido *"
            height="h-10"
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
        <div>
          <CustomeInput
            type="number"
            label="Dni *"
            height="h-10"
            colorBorder="border-gray-primary"
            {...register("dni", {
              required: "El dni es obligatorio",
              pattern: {
                value: /^[0-9]*$/,
                message: "Solo números",
              },
              minLength: {
                value: 7,
                message: "Debe tener al menos 7 caracteres",
              },
              maxLength: {
                value: 8,
                message: "Debe tener máximo 8 caracteres",
              },
            })}
          />
          {errors.dni && (
            <ErrorForm
              message={
                typeof errors.dni.message === "string"
                  ? errors.dni.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
        <div>
          <Controller
            name="sex"
            control={control}
            rules={{ required: "El sexo es obligatorio" }}
            render={({ field }) => (
              <Select
                label="Sexo *"
                height="h-10"
                colorBorder="border-gray-primary"
                options={["Masculino", "Femenino"]}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.sex && (
            <ErrorForm
              message={
                typeof errors.sex.message === "string"
                  ? errors.sex.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
        <div>
          <CustomeInput
            type="text"
            label="Nacionalidad *"
            height="h-10"
            colorBorder="border-gray-primary"
            {...register("nationality", {
              required: "La nacionalidad es requerida",
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
          {errors.nationality && (
            <ErrorForm
              message={
                typeof errors.nationality.message === "string"
                  ? errors.nationality.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
      </div>

      <div className="w-1/3 space-y-5 ">
        <div className="h-10"></div>
        <div>
          <CustomeInput
            type="text"
            label="Domicilio *"
            height="h-10"
            colorBorder="border-gray-primary"
            {...register("address", {
              required: "El domicilio es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
          />
          {errors.address && (
            <ErrorForm
              message={
                typeof errors.address.message === "string"
                  ? errors.address.message
                  : "Campo inválido"
              }
            />
          )}
        </div>

        <LocalityComponent
          register={register}
          errors={errors}
          nameLocalidad="localidad"
          nameCpostal="cpostal"
          nameProvincia="nprovincia"
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
        <div>
          <CustomeInput
            label="Teléfono Fijo "
            type="text"
            maxLength={8}
            colorBorder="border-gray-primary"
            width="w-[235px]"
            {...register("telFijo", {
              pattern: {
                value: /^[0-9]*$/,
                message: "Solo números",
              },
              validate: (value) => {
                if (!value) return true;
                return value.length === 8 || "Debe tener exactamente 8 dígitos";
              },
            })}
          />
          {errors.telFijo && (
            <ErrorForm
              message={
                typeof errors.telFijo.message === "string"
                  ? errors.telFijo.message
                  : "Campo inválido"
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
