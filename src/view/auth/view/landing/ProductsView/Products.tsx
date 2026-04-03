import { categories } from "../../../../../mocks/categories";
import { products } from "../../../../../mocks/products";
import CardProd from "../../../components/CardProd";
import { Element } from "react-scroll";
import CategoryCard from "../../../components/CategoryCard";
import useProductsView from "./hooks/useProductsView";
import { Modal } from "../../../../app/components/Modal";
import CustomeButton from "../../../../components/CustomeButton";
import { IoCart } from "react-icons/io5";
import type { Product } from "./types";

export default function Products() {
  const {
    openModalProd,
    categorySelected,
    handleOpenModal,
    handleCloseModal,
    prodSelected,
    handleSelectProd,
  } = useProductsView();
  console.log(prodSelected);
  return (
    <div className="w-full p-2">
      <Element name="intro-1" className="flex flex-col py-10 md:pt-0 gap-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-colorTres lg:text-left">
          Nuestros Platos
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              categoria={cat}
              onClick={handleOpenModal}
            />
          ))}
        </div>

        {openModalProd && (
          <Modal
            buttonClose
            close={handleCloseModal}
            colorBg="bg-[#f9f9f9]"
            title={categorySelected?.label || ""}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 relative  overflow-y-auto max-h-144 gap-4">
              {products.map(
                (item, index) =>
                  item.categoria === categorySelected?.id && (
                    <CardProd
                      key={index}
                      producto={item}
                      onClick={handleSelectProd}
                      prodSelected={prodSelected as Product}
                    />
                  ),
              )}

              {prodSelected && (
                <div className="absolute bottom-4 right-0">
                  <CustomeButton
                    claseButton="primary"
                    Icon={IoCart}
                    text="Agregar al Pedido"
                    color="bg-success"
                    sizeText="text-base"
                  />
                </div>
              )}
            </div>
          </Modal>
        )}
      </Element>
    </div>
  );
}
