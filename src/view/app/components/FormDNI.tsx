import { useEffect, useRef } from "react";
import Button from "../../components/CustomeButton";
import InfoText from "./InfoText";
import CustomeInput from "../../components/input/CustomeInput";
import CustomSelect from "../../components/input/CustomSelect";
import { useFormContext } from "react-hook-form";
import type { ICalculateCuil } from "../interface/ICalculateCuil";
import ErrorForm from "./ErrorForm";

interface Prop {
  info?: boolean;
  text?: string;
  textTwo?: string;
  color?: "info" | "error" | "success";
  textButton: string;
  cleanForm: () => void;
  onSubmit: (data: ICalculateCuil) => void;
}

export default function FormDNI({
  info,
  textTwo,
  color = "info",
  textButton,
  cleanForm,
  onSubmit,
}: Prop) {
  const dniRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, formState, watch } =
    useFormContext<ICalculateCuil>();
  useEffect(() => {
    dniRef.current?.focus();
  }, []);
  const dni = watch("dni");
  const count = dni?.length || 0;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-2 items-center justify-center rounded-2xl"
    >
      <section className="space-y-3 w-full">
        <CustomeInput
          {...register("dni", {
            required: "El DNI es obligatorio",
            minLength: {
              value: 7,
              message: "Debe tener al menos 7 caracteres",
            },
            maxLength: {
              value: 8,
              message: "Debe tener 8 caracteres como máximo",
            },
          })}
          label="DNI"
          type="text"
          placeholder="Ingrese el DNI"
          ref={(e) => {
            register("dni").ref(e);
            dniRef.current = e;
          }}
          width="w-full"
          height="h-[40px]"
          colorBorder="border-gray-primary"
        />
        <div className="w-full flex justify-end">
          <span
            className={`text-xs ${count > 8 ? "text-red-500" : count === 8 ? "text-success" : ""}`}
          >
            {count}/8
          </span>
        </div>
        {formState.errors.dni && (
          <ErrorForm
            message={
              typeof formState.errors.dni.message === "string"
                ? formState.errors.dni.message
                : "Campo inválido"
            }
          />
        )}

        <CustomSelect
          label="Sexo"
          {...register("gender")}
          options={["Masculino", "Femenino"]}
          colorBorder="border-gray-primary "
        />

        <div className="flex pb-3 w-[450px] justify-between">
          {info && textTwo && <InfoText color={color} text={textTwo} />}
        </div>
      </section>
      <section className="w-full flex justify-between gap-5 ">
        <Button
          onClick={cleanForm}
          type="button"
          text="Limpiar"
          width="w-[200px]"
          claseButton="secondary"
          border
          borderColor="border-gray-secondary"
          height="h-10"
        />
        <Button
          type="submit"
          text={textButton}
          disabled={!formState.isValid}
          width="w-[200px]"
          height="h-10"
          claseButton="primary"
        />
      </section>
    </form>
  );
}
