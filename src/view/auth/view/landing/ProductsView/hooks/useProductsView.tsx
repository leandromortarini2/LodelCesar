import { useState } from "react";
import type { Category, Product } from "../types";

export default function useProductsView() {
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
    setOpenModalProd(false);
  }

  function handleSelectProd(prod: Product) {
    if (prodSelected?.id === prod.id) {
      setProdSelected(null);
    } else {
      setProdSelected(prod);
    }
  }

  return {
    openModalProd,
    categorySelected,
    handleOpenModal,
    handleCloseModal,
    prodSelected,
    setProdSelected,
    handleSelectProd,
  };
}
