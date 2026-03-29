import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import FormAddNewPerson from "./components/FormAddNewPerson";
import getLocality from "../../service/getLocality";
import CustomeTitle from "../../components/CustomeTitle";
import { useEffect } from "react";
import { useLocalidadStore } from "../../store/storeLocalities";
import { useConfigStore } from "../../store/storeConfig";

export default function PersonManagement() {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      dni: "",
      sex: "masculino",
      nationality: "",
      address: "",
      localidad: "",
      cpostal: "",
      nprovincia: "",
      codarea: "",
      telefono: "",
      telFijo: "",
      company: "",
      companyAddress: "",
      companyCpostal: "",
      companyLocalidad: "",
      companyNprovincia: "",
      companyCodarea: "",
      companyTelefono: "",
    },
  });

  const { localitiesByContext, setDataTabla, resetContext } = useLocalidadStore(
    (state) => state,
  );

  const { entornoApi, modoApi } = useConfigStore((state) => state);

  const { data: locality } = useQuery({
    queryKey: ["obtenerLocalidades", entornoApi, modoApi],
    queryFn: () =>
      getLocality({
        entornoApi: entornoApi,
        modoApi: modoApi,
        empresa: "20",
      }),
    enabled: !!entornoApi && !!modoApi,
  });

  useEffect(() => {
    if (locality) {
      setDataTabla(locality?.data);
    }
  }, [locality, setDataTabla]);

  useEffect(() => {
    const contexts = ["localidad", "companyLocalidad"];

    contexts.forEach((ctx) => {
      const data = localitiesByContext[ctx];

      if (data && data.nombre && data.nprovincia && data.cpostal) {
        if (ctx === "localidad") {
          methods.setValue("localidad", data.nombre, {
            shouldValidate: true,
            shouldDirty: true,
          });
          methods.setValue("nprovincia", data.nprovincia, {
            shouldValidate: true,
            shouldDirty: true,
          });
          methods.setValue("cpostal", data.cpostal, {
            shouldValidate: true,
            shouldDirty: true,
          });
        } else if (ctx === "companyLocalidad") {
          methods.setValue("companyLocalidad", data.nombre, {
            shouldValidate: true,
            shouldDirty: true,
          });
          methods.setValue("companyNprovincia", data.nprovincia, {
            shouldValidate: true,
            shouldDirty: true,
          });
          methods.setValue("companyCpostal", data.cpostal, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }

        requestAnimationFrame(() => {
          resetContext(ctx);
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localitiesByContext, resetContext]);

  return (
    <section className="w-full p-10 flex justify-center items-center ">
      <div className="p-10 flex flex-col items-center gap-5 bg-white rounded-2xl">
        <CustomeTitle title="Cargar nueva persona" type="h2" font="bold" />
        <FormProvider {...methods}>
          <FormAddNewPerson />
        </FormProvider>
      </div>
    </section>
  );
}
