/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Titulo from "./components/Titulo";
import ContenidoLegal from "./components/ContenidoLegal";
import FormDNI from "../../components/FormDNI";
import CardDNI from "../../components/CardDNI";
import { Modal } from "../../components/Modal";
import { useRecordStatusStore } from "../../store/useRecordStatusStore";
import useHandleModal from "../../hook/useHandleModal";
import { calculateCUIL } from "../../utils/fnTransformDni";
import type { ICalculateCuil } from "../../interface/ICalculateCuil";
import CustomeButton from "../../../components/CustomeButton";
import CustomeTitle from "../../components/CustomeTitle";

export default function DashboardView() {
  const { setStatus } = useRecordStatusStore((store) => store);
  const { isOpen, openModal, closeModal } = useHandleModal();

  const methods = useForm<ICalculateCuil>({
    defaultValues: {
      dni: "",
      gender: "Masculino",
    },
  });

  const onFormSubmit = (data: ICalculateCuil) => {
    const cuilGererado = calculateCUIL(data.dni, data.gender);
    console.log("CUIL en Dashboard:", cuilGererado);

    setStatus("C");
    openModal();
  };

  useEffect(() => {
    if (!isOpen) {
      methods.reset();
    }
  }, [isOpen, methods]);

  function handleCleanForm() {
    methods.reset();
  }

  return (
    <section className="w-full h-screen flex flex-col gap-5 items-center bg-white">
      <Titulo />

      <FormProvider {...methods}>
        <CardDNI
          textOne="Consulta de manera rápida el estado crediticio de cualquier persona."
          textTwo="Ingresa el DNI y accede al informe correspondiente."
        >
          <FormDNI
            info={true}
            textButton={"Consultar"}
            text={"Ingresá solo números, sin puntos ni espacios."}
            textTwo={"Ingresa un mínimo de 7 y un máximo de 8 caracteres."}
            onSubmit={onFormSubmit}
            cleanForm={handleCleanForm}
          />
        </CardDNI>
      </FormProvider>

      {isOpen && (
        <Modal close={closeModal} buttonClose>
          <section className="w-full space-y-5">
            <div className="space-y-1">
              <CustomeTitle
                title="Personales Encontrada"
                type="h2"
                font="semibold"
                color="text-secondary"
              />
              <CustomeTitle
                title="Aquí podrás realizar la afectación de la persona"
                type="h5"
                font="regular"
              />
            </div>
            <hr className="h-1 text-gray-primary" />
            <article className="flex flex-col gap-5 w-full">
              <hr className="h-1 text-gray-primary" />

              <div className="flex gap-5 justify-between">
                <CustomeButton
                  text="Cancelar"
                  claseButton="secondary"
                  border
                  borderColor="border-gray-200"
                  height="h-[40px]"
                />
                <CustomeButton
                  text="buscar"
                  claseButton="primary"
                  height="h-[40px]"
                  width="w-32"
                />
              </div>
            </article>
          </section>
        </Modal>
      )}

      <ContenidoLegal />
    </section>
  );
}
