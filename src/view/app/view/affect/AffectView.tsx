import CardDNI from "../../components/CardDNI";
import CustomeTitle from "../../components/CustomeTitle";
import FormDNI from "../../components/FormDNI";
import { Modal } from "../../components/Modal";
import DniSearchResult from "../../components/DniSearchResult";
import ArchiveActions from "./components/ArchiveActions";
import DropzoneComponent from "../disaffect/components/DropzoneComponent";
import useAffect from "./hook/useAffect";
import { FormProvider } from "react-hook-form";
import { dataPerson } from "../../mock/dataPerson";

export default function AffectView() {
  const {
    fileForm,
    isOpen,
    method,
    upArchive,
    dni,
    sexo,
    cuil,
    handleCleanForm,
    setFileForm,
    closeModal,
    openModalArchive,
    closeModalArchive,
    handleAffectation,
    onSubmit,
  } = useAffect();

  return (
    <section className="w-full h-screen flex flex-col gap-10  items-center bg-white">
      <ArchiveActions openModalArchive={openModalArchive} />
      <FormProvider {...method}>
        <div className="text-center space-y-1">
          <CustomeTitle
            title="Afectación de clientes en linea"
            type="h1"
            font="semibold"
          />
          <CustomeTitle
            color="text-tertiary"
            title="Las modificaciones realizadas serán bajo responsabilidad del operador."
            type="h4"
            font="semibold"
          />
        </div>
        <CardDNI
          textOne="Gestiona de forma rápida la afectación de un cliente."
          textTwo="Ingresa el DNI y accede al informe correspondiente."
        >
          {" "}
          <FormDNI
            info={true}
            textButton={"Procesar"}
            text={"Ingresa solo números, sin puntos ni espacios."}
            textTwo={"Ingresa un mínimo de 7 y un máximo de 8 caracteres."}
            cleanForm={handleCleanForm}
            onSubmit={onSubmit}
          />
        </CardDNI>
        {isOpen && (
          <Modal close={closeModal} buttonClose>
            <DniSearchResult
              handleModal={closeModal}
              typeButton={"Procesar"}
              data={dataPerson}
              dni={dni}
              sexo={sexo}
              cuil={cuil}
              handleAffectation={handleAffectation}
            />
          </Modal>
        )}{" "}
        {upArchive && (
          <Modal
            title="Seleccione o arrastre el archivo"
            close={closeModalArchive}
            modalWidth="w-[500px]"
            buttonClose
          >
            <DropzoneComponent state={fileForm} setState={setFileForm} />
          </Modal>
        )}
      </FormProvider>
    </section>
  );
}
