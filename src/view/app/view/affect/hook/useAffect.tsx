import { useEffect, useState } from "react";
import useHandleModal from "../../../hook/useHandleModal";
import { useForm } from "react-hook-form";
import { calculateCUIL } from "../../../utils/fnTransformDni";
import type { ICalculateCuil } from "../../../interface/ICalculateCuil";
import { useAffectStore } from "../store/AffectStore";
import type {
  IAffectation,
  IPayloadAffect,
} from "../../../interface/IAffectation";
import { affectationPerson } from "../services/affectationPerson";
import { useMutation } from "@tanstack/react-query";
import { useConfigStore } from "../../../store/storeConfig";

export default function useAffect() {
  const [fileForm, setFileForm] = useState<File | null>(null);
  const [cuil, setCuil] = useState("");
  const { isOpen, openModal, closeModal } = useHandleModal();
  const { dataPerson, setDataPerson } = useAffectStore();
  const {
    isOpen: upArchive,
    openModal: openModalArchive,
    closeModal: closeModalArchive,
  } = useHandleModal();
  const { entornoApi, modoApi } = useConfigStore((state) => state);

  const method = useForm<ICalculateCuil>({
    defaultValues: {
      dni: "",
      gender: "Masculino",
    },
  });

  const dni = method.watch("dni");
  const sexo = method.watch("gender");

  const affectPerson = useMutation({
    mutationFn: (payload: IPayloadAffect) =>
      affectationPerson(
        { empresa: "000034", modoApi, entornoApi },
        "afectaciones",
        payload.afectaciones,
      ),
    onSuccess: () => {
      console.log("Guardado con éxito");
      closeModal();
    },
    onError: (error) => console.error("Error al guardar:", error),
  });
  useEffect(() => {
    if (!isOpen) {
      method.setValue("dni", "");
      method.setValue("gender", "Masculino");
    }
  }, [isOpen]);

  function handleCleanForm() {
    method.setValue("dni", "");
    method.setValue("gender", "Masculino");
  }

  const onSubmit = (data: ICalculateCuil) => {
    const cuil = calculateCUIL(data.dni, data.gender);
    setCuil(cuil);

    const sexoMapped = data.gender === "Masculino" ? "M" : "F";

    if (dataPerson) {
      setDataPerson({
        ...dataPerson,
        dni: data.dni,
        sexo: sexoMapped,
      } as IAffectation);
    }

    openModal();
  };
  const handleAffectation = () => {
    if (!dataPerson) return;

    const payload: IPayloadAffect = {
      tabla: "afectaciones",
      afectaciones: [dataPerson],
    };

    affectPerson.mutate(payload);
  };

  return {
    fileForm,
    isOpen,
    upArchive,
    method,
    dni,
    sexo,
    cuil,
    handleCleanForm,
    setFileForm,
    openModal,
    closeModal,
    openModalArchive,
    closeModalArchive,
    onSubmit,
    handleAffectation,
  };
}
