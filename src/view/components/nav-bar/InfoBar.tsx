import CartButton from "./LoginButton";
import Search from "../../app/components/Search";

export default function InfoBar({
  handleDrawer,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleCleanSearch,
}: {
  handleDrawer: () => void;
  searchTerm: string;
  setSearchTerm: any;
  handleSearch: any;
  handleCleanSearch: any;
}) {
  return (
    <section className="w-full h-14 bg-colorUno flex justify-between items-center px-3 text-white text-xs ">
      <Search
        inputName={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        handleOnSearch={handleSearch}
        handleClean={handleCleanSearch}
        isSearching={searchTerm?.length > 0}
      />
      <div className="flex justify-end">
        <CartButton handleDrawer={handleDrawer} />
      </div>
    </section>
  );
}
