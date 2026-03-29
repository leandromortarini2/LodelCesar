/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomeInput from "../../../components/input/CustomeInput";
import ErrorForm from "../ErrorForm";
import CustomeButton from "../../../components/CustomeButton";
import { IoMdSearch } from "react-icons/io";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import useHandleModal from "../../hook/useHandleModal";
import { Modal } from "../Modal";
import SearchLocality from "./SearchLocality";

interface Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  nameLocalidad: string;
  nameCpostal: string;
  nameProvincia: string;
  label?: string;
}

export default function LocalityComponent({
  register,
  errors,
  nameLocalidad,
  nameCpostal,
  nameProvincia,
  label = "Localidad",
}: Props) {
  const { isOpen, openModal, closeModal } = useHandleModal();

  return (
    <>
      <div>
        <div className="flex gap-3 justify-start w-[400px] items-end">
          <div className="flex flex-col ">
            <CustomeInput
              label={`${label} *`}
              type="text"
              disabled
              colorBorder="border-gray-primary"
              width="w-[285px]"
              height="h-10"
              {...register(nameLocalidad, {
                required: "La localidad es obligatoria",
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 caracteres",
                },
              })}
            />
          </div>

          <CustomeButton
            onClick={openModal}
            claseButton="primary"
            Icon={IoMdSearch}
            height="h-10"
          />
        </div>
        {isOpen && (
          <Modal close={closeModal} buttonClose modalWidth="w-[1000px]">
            <SearchLocality
              context={nameLocalidad}
              handleCloseModalInput={closeModal}
            />
          </Modal>
        )}
        {errors?.[nameLocalidad] && (
          <ErrorForm
            message={
              typeof errors[nameLocalidad]?.message === "string"
                ? errors[nameLocalidad]?.message
                : "Campo inválido"
            }
          />
        )}
      </div>

      <div className="flex flex-col w-[110px]">
        <CustomeInput
          label="Código Postal *"
          type="text"
          disabled
          colorBorder="border-gray-primary"
          width="w-[110px]"
          height="h-10"
          {...register(nameCpostal, {
            required: "El código postal es obligatorio",
          })}
        />

        {errors?.[nameCpostal] && (
          <ErrorForm
            message={
              typeof errors[nameCpostal]?.message === "string"
                ? errors[nameCpostal]?.message
                : "Campo inválido"
            }
          />
        )}
      </div>

      <div className="flex flex-col w-40">
        <CustomeInput
          label="Provincia *"
          type="text"
          disabled
          colorBorder="border-gray-primary"
          height="h-10"
          width="w-[160px]"
          {...register(nameProvincia, {
            required: "La provincia es obligatoria",
          })}
        />

        {errors?.[nameProvincia] && (
          <ErrorForm
            message={
              typeof errors[nameProvincia]?.message === "string"
                ? errors[nameProvincia]?.message
                : "Campo inválido"
            }
          />
        )}
      </div>
    </>
  );
}
