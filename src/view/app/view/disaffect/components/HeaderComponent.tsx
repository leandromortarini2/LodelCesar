import React from "react";
import Search from "../../../components/Search";
import Tooltip from "../../../../components/Tooltip";
import CustomeTitle from "../../../components/CustomeTitle";

interface Props {
  handleOnSearch: () => void;
  handleClean: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  isSearching: boolean;
}

export default function HeaderComponent({
  handleOnSearch,
  handleClean,
  onChange,
  inputName,
  isSearching,
}: Props) {
  const title = "Desafectaciones de clientes en línea";
  return (
    <section className="w-full   flex justify-between  items-center">
      <div className="flex gap-2 items-center">
        <CustomeTitle title={title} type="h2" font="semibold" />
        <Tooltip
          width="w-72"
          text="Los cambios que se realizaren serán bajo su exclusiva responsabilidad"
        />
      </div>
      <Search
        handleOnSearch={handleOnSearch}
        handleClean={handleClean}
        onChange={onChange}
        inputName={inputName}
        isSearching={isSearching}
        buttonClean
      />
    </section>
  );
}
