/* eslint-disable @typescript-eslint/no-explicit-any */
import { categories } from "../../../../../mocks/categories";
import { products } from "../../../../../mocks/products";
import CardProd from "../../../components/CardProd";
import { Element } from "react-scroll";
import CategoryCard from "../../../components/CategoryCard";
import { Modal } from "../../../../app/components/Modal";
import CustomeButton from "../../../../components/CustomeButton";
import { IoCart } from "react-icons/io5";
import type { Product } from "./types";

export default function Products({
  openModalProd,
  categorySelected,
  handleCloseModal,
  handleOpenModal,
  prodSelected,
  handleSelectProd,
  handleAddToCart,
}: any) {
  return (
    <Element
      name="intro-1"
      className="flex flex-col gap-6 py-10 px-4 md:pt-0 bg-background"
    >
      <div className="w-full gap-4 flex flex-col p-2">
        <h1 className="text-2xl lg:text-3xl font-semibold text-colorTres lg:text-left">
          Nuestros Platos
        </h1>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                categoria={cat}
                onClick={handleOpenModal}
              />
            ))}
          </div>
        </div>

        {openModalProd && (
          <Modal
            buttonClose
            close={handleCloseModal}
            colorBg="bg-[#f9f9f9]"
            title={categorySelected?.label || ""}
          >
            <p className="text-colorCuatro font-medium text-sm">
              Seleccione un plato para agregarlo a su pedido
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full  overflow-y-auto  gap-4">
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

              <div className="absolute bottom-5 right-10">
                <CustomeButton
                  claseButton="primary"
                  Icon={IoCart}
                  text="Agregar al Pedido"
                  color="bg-btn-wp"
                  hover="hover:bg-btn-wp/90"
                  sizeText="text-base"
                  onClick={handleAddToCart}
                  disabled={!prodSelected}
                />
              </div>
            </div>
          </Modal>
        )}
      </div>{" "}
    </Element>
  );
}
