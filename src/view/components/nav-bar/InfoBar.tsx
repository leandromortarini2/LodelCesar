import CartButton from "./LoginButton";
import Search from "../../app/components/Search";

export default function InfoBar({
  handleDrawer,
}: {
  handleDrawer: () => void;
  openModal?: () => void;
  closeModal?: () => void;
  isOpen?: boolean;
}) {
  return (
    <section className="w-full  h-14 bg-colorUno flex justify-between items-center px-3 text-white text-xs ">
      <Search
        handleOnSearch={() => {}}
        onChange={() => {}}
        inputName={""}
        isSearching
      />
      <div className="flex justify-end ">
        <CartButton handleDrawer={handleDrawer} />
      </div>
    </section>
  );
}
