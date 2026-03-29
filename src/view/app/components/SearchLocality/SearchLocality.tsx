import SearchLocalityHeader from "./SearchLocalityHeader";
import SearchLocalityTable from "./SearchLocalityTable";

interface Props {
  handleCloseModalInput: () => void;
  context: string;
}

export default function SearchLocality({
  handleCloseModalInput,
  context,
}: Props) {
  return (
    <div className="w-full h-[300px] flex flex-col gap-5 my-5">
      <SearchLocalityHeader
        context={context}
        handleCloseModalInput={handleCloseModalInput}
      />
      <SearchLocalityTable />
    </div>
  );
}
