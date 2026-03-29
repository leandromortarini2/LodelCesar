/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaEraser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useLoaderStore } from "../../store/storeLoader";
import { useLocalidadStore } from "../../store/storeLocalities";
import CustomeButton from "../../../components/CustomeButton";
import CustomeInput from "../../../components/input/CustomeInput";

interface Props {
  handleCloseModalInput: () => void;
  context: string;
}

export default function SearchLocalityHeader({
  handleCloseModalInput,
  context,
}: Props) {
  const loader = useLoaderStore((s) => s.loader);
  const setLoader = useLoaderStore((s) => s.setLoader);
  const loaderKey = useLoaderStore((s) => s.loaderKey);
  const setLoaderKey = useLoaderStore((s) => s.setLoaderKey);

  const localidadRef = useRef<HTMLInputElement>(null);
  const provinciaRef = useRef<HTMLInputElement>(null);
  const backupDataRef = useRef<any[]>([]);

  const [inputs, setInputs] = useState({ localidad: "", provincia: "" });

  const {
    dataTabla,
    setDataTabla,
    setLocalityByContext,
    dataTablaSeleccionada,
    isSearched,
    setIsSearched,
    setLastSearchTerm,
  } = useLocalidadStore((s) => s);

  useEffect(() => {
    if (
      dataTabla &&
      dataTabla.length > 0 &&
      backupDataRef.current.length === 0
    ) {
      backupDataRef.current = [...dataTabla];
    }
  }, [dataTabla]);

  useEffect(() => {
    localidadRef.current?.focus();
  }, []);

  const handleReset = () => {
    setInputs({ localidad: "", provincia: "" });
    if (backupDataRef.current.length > 0) setDataTabla(backupDataRef.current);
    setIsSearched(false);
    setLastSearchTerm("");
    localidadRef.current?.focus();
  };

  const handleSearch = () => {
    if (isSearchDisabled) return;

    setLoader(true);
    setLoaderKey("search-localities");

    const term =
      inputs.localidad + (inputs.provincia ? ` - ${inputs.provincia}` : "");
    setLastSearchTerm(term);

    setTimeout(() => {
      setLoaderKey(String(Date.now()));
      const source =
        backupDataRef.current.length > 0 ? backupDataRef.current : dataTabla;
      const dataFiltered = source?.filter((item: any) => {
        const matchLoc = (item?.nombre ?? "")
          .toLowerCase()
          .includes(inputs.localidad.toLowerCase());
        const matchProv = (item?.nprovincia ?? "")
          .toLowerCase()
          .includes(inputs.provincia.toLowerCase());
        return matchLoc && matchProv;
      });

      setDataTabla(dataFiltered || []);
      setIsSearched(true);
      setLoader(false);
    }, 500);
  };

  const hasInputText =
    inputs.localidad.trim().length > 0 || inputs.provincia.trim().length > 0;
  const isSearchDisabled =
    !hasInputText ||
    isSearched ||
    (loader && loaderKey === "search-localities");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget.name === "localidad") provinciaRef.current?.focus();
      else if (e.currentTarget.name === "provincia") handleSearch();
    }
  };

  return (
    <div className="w-full h-24 flex items-center justify-between gap-4 px-6 bg-white border-b border-gray-200">
      <div className="flex items-end gap-3">
        <CustomeInput
          label="Localidad"
          name="localidad"
          ref={localidadRef}
          value={inputs.localidad}
          onChange={(e: any) => {
            setInputs({ ...inputs, localidad: e.target.value });
            setIsSearched(false);
          }}
          onKeyDown={handleKeyDown}
          width="w-48"
          type="text"
        />
        <CustomeInput
          label="Provincia"
          name="provincia"
          ref={provinciaRef}
          value={inputs.provincia}
          onChange={(e: any) => {
            setInputs({ ...inputs, provincia: e.target.value });
            setIsSearched(false);
          }}
          onKeyDown={handleKeyDown}
          width="w-48"
          type="text"
        />
        <div className="pb-[2px] flex gap-2">
          <CustomeButton
            claseButton="iconButton"
            Icon={IoSearchSharp}
            onClick={handleSearch}
            disabled={isSearchDisabled}
            color={isSearchDisabled ? "text-gray-300" : "text-blue-600"}
            border
          />
          <CustomeButton
            claseButton="iconButton"
            Icon={FaEraser}
            onClick={handleReset}
            disabled={!isSearched}
            color={!isSearched ? "text-gray-200" : "text-red-500"}
            border
          />
        </div>
      </div>
      <div className="pb-[2px]">
        <CustomeButton
          claseButton="primary"
          text="Seleccionar"
          Icon={FaCheck}
          onClick={() => {
            if (dataTablaSeleccionada) {
              setLocalityByContext(context, dataTablaSeleccionada);
              if (backupDataRef.current.length > 0)
                setDataTabla(backupDataRef.current);
              handleCloseModalInput();
            }
          }}
          disabled={!dataTablaSeleccionada}
          width="w-40"
          color="bg-green-600"
        />
      </div>
    </div>
  );
}
