import { useState } from "react";
import type { Category, Product } from "../types";
import useLandingStore from "../../../../store/storeLanding";
import customeAlert from "../../../../../../utils/customeAlert";

export default function useProductsView() {
  const cart = useLandingStore((state) => state.cart);
  const setCart = useLandingStore((state) => state.setCart);

  const [openModalProd, setOpenModalProd] = useState(false);
  const [categorySelected, setCategorySelected] = useState<Category | null>(
    null,
  );
  const [prodSelected, setProdSelected] = useState<Product | null>(null);

  function handleOpenModal({ label, id }: Category) {
    setCategorySelected({ label, id });
    setOpenModalProd(true);
  }

  function handleCloseModal() {
    setProdSelected(null);
    setOpenModalProd(false);
  }

  function handleSelectProd(prod: Product) {
    if (prodSelected?.id === prod.id) {
      setProdSelected(null);
    } else {
      setProdSelected(prod);
    }
  }

  function handleAddToCart() {
    customeAlert({
      title: "¿Desea agregar al carrito?",
      icon: "warning",
      cancelButtonColor: "#cf2d2d",
      confirmButtonColor: "#3e9b4b",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([...cart, prodSelected as Product]);
        handleCloseModal();
        customeAlert({
          title: "Producto agregado al carrito",
          icon: "success",
          confirmButtonColor: "#3e9b4b",
          confirmButtonText: "Aceptar",
        });
      }
    });
  }

  return {
    openModalProd,
    categorySelected,
    handleOpenModal,
    handleCloseModal,
    prodSelected,
    setProdSelected,
    handleSelectProd,
    cart,
    setCart,
    handleAddToCart,
  };
}
