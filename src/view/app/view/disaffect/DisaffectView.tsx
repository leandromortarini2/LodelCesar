import HeaderComponent from "./components/HeaderComponent";
import CustomeTable from "../../components/CustomeTable";
import Loader from "../../../components/Loader";
import { Modal } from "../../components/Modal";
import DropzoneComponent from "./components/DropzoneComponent";
import useDisaffect from "./hook/useDisaffect";
import FooterSection from "./components/FooterSection";

export default function DisaffectView() {
  const {
    dataSearch,
    isSearching,
    isLoading,
    totalPages,
    currentData,
    handlePageChange,
    isOpen,
    openModal,
    closeModal,
    handleOnSearch,
    handleClean,
    onChange,
    tableConfig,
    fileForm,
    setFileForm,
    currentPage,
  } = useDisaffect();

  return (
    <>
      <section className="w-full min-h-screen p-6 gap-6 flex flex-col justify-start items-center">
        <HeaderComponent
          isSearching={isSearching}
          handleOnSearch={handleOnSearch}
          handleClean={handleClean}
          onChange={onChange}
          inputName={dataSearch.search}
        />
        {isLoading ? (
          <div className="h-[530px]  flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {" "}
            <div className="w-full h-[530px] ">
              <CustomeTable data={currentData} config={tableConfig} />
            </div>
            <FooterSection
              openModal={openModal}
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          </>
        )}
      </section>
      {isOpen && (
        <Modal
          title="Seleccione o arrastre el archivo"
          close={closeModal}
          modalWidth="w-[500px]"
          buttonClose
        >
          <DropzoneComponent state={fileForm} setState={setFileForm} />
        </Modal>
      )}
    </>
  );
}
