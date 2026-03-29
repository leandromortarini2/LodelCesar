import { useState, useEffect } from "react";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import Dropzone from "react-dropzone";
import CustomeButton from "../../../../components/CustomeButton";

interface SelectorDeArchivosProps {
  state: File | null;
  setState: (arg: File | null) => void;
}

export default function DropzoneComponent({
  state,
  setState,
}: SelectorDeArchivosProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!state) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(state);
    setPreview(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [state]);

  function handleDrop(acceptedFiles: File[]) {
    const uploaded = acceptedFiles[0];
    console.log("seleccion de archivo:", uploaded);
    setState(uploaded);
  }

  return (
    <section className="w-full flex justify-center flex-col items-center gap-6">
      <Dropzone
        onDrop={handleDrop}
        accept={{
          "application/pdf": [".pdf", ".xls", ".xlsx"],
          "image/*": [".jpg", ".png"],
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div className=" p-3 border border-gray-300 rounded bg-blue-50 w-full">
            {state ? (
              <div className="flex flex-col items-center justify-start relative  ">
                <button
                  type="button"
                  className="absolute top-0 right-0 p-1 text-gray-500 hover:text-red-600"
                  title="Eliminar archivo"
                  onClick={() => setState(null)}
                >
                  <IoTrashOutline className="text-xl" />
                </button>
                <p className=" font-semibold py-1">{state.name}</p>
                {state.type.startsWith("image/") && preview && (
                  <img src={preview} alt="Preview" className="border w-36" />
                )}
              </div>
            ) : (
              <div
                {...getRootProps()}
                className="flex flex-col items-center justify-center py-5  border border-gray-400 border-dashed rounded cursor-pointer"
              >
                <IoCloudUploadOutline className="text-3xl text-gray-500 lg:text-3xl" />
                <input {...getInputProps()} />
                <p className="text-xs text-center text-gray-500 ">
                  Arrastre y suelte un archivo aquí, o haga clic para
                  seleccionarlo.
                </p>
              </div>
            )}
          </div>
        )}
      </Dropzone>
      <p className="text-gray-500 font-medium text-xs">
        Archivos permitidos: .pdf, .jpg, .png
      </p>
      <CustomeButton
        text="Subir Archivo"
        height="h-10"
        width="w-[150px]"
        sizeText="text-base"
        claseButton="primary"
      />
    </section>
  );
}
