import { IoMdSearch } from "react-icons/io";
import { MdCleaningServices } from "react-icons/md";
import { type RefObject, useEffect } from "react";
import CustomeButton from "../../components/CustomeButton";

interface SearchProps {
  inputRef?: RefObject<HTMLInputElement | null>;
  handleOnSearch: () => void;
  handleClean?: () => void;
  isSearching: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  buttonClean?: boolean;
  placeholder?: string;
}

export default function Search({
  inputRef,
  isSearching,
  handleOnSearch,
  handleClean,
  onChange,
  inputName,
  buttonClean,
  placeholder,
}: SearchProps) {
  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div className="flex items-center gap-1  rounded-lg">
      <input
        ref={inputRef}
        type="search"
        name="search"
        className={`focus:outline-none w-[250px] h-10 border bg-white text-default-text border-gray-secondary p-2 rounded placeholder:text-gray-primary disabled:bg-gray-200`}
        placeholder={placeholder || "Buscar..."}
        onChange={onChange}
        value={inputName}
        onKeyDown={(e) => e.key === "Enter" && handleOnSearch()}
      />
      <CustomeButton
        claseButton="secondary"
        height="h-10"
        onClick={handleOnSearch}
        Icon={IoMdSearch}
        color="text-colorTres"
      />{" "}
      {buttonClean && (
        <CustomeButton
          height="h-10"
          claseButton="primary"
          onClick={handleClean}
          disabled={!isSearching}
          Icon={MdCleaningServices}
          color="bg-red-600"
          hover="hover:bg-red-500"
        />
      )}
    </div>
  );
}
