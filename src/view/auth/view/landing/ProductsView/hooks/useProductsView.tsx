/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import type { Category, Product } from "../types";
import useLandingStore from "../../../../store/storeLanding";
import customeAlert from "../../../../../../utils/customeAlert";
import { categories } from "../../../../../../mocks/categories";
import { scroller } from "react-scroll";

export default function useProductsView() {
  const cart = useLandingStore((state) => state.cart);
  const setCart = useLandingStore((state) => state.setCart);

  const [openModalProd, setOpenModalProd] = useState(false);
  const [categorySelected, setCategorySelected] = useState<Category | null>(
    null,
  );
  const [prodSelected, setProdSelected] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const redirectProducts = () => {
    scroller.scrollTo("intro-1", {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  const handleOpenModal = useCallback(({ label, id }: Category) => {
    setCategorySelected({ label, id });
    setOpenModalProd(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setProdSelected(null);
    setOpenModalProd(false);
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    const term = searchTerm.toLowerCase().trim();

    const foundCategory = categories.find(
      (cat) =>
        cat.label.toLowerCase().includes(term) ||
        cat.id.toLowerCase().includes(term),
    );

    if (foundCategory) {
      redirectProducts();
      setCategorySelected(foundCategory);
      handleOpenModal(foundCategory);
      return;
    }

    // const foundProduct = products.find((prod) =>
    //   prod.nombre.toLowerCase().includes(term),
    // );

    // if (foundProduct) {
    //   const parentCategory = categories.find(
    //     (cat) => cat.id === foundProduct.categoria,
    //   );
    //   if (parentCategory) {
    //     setCategorySelected(parentCategory);
    //     setProdSelected(foundProduct);
    //     setOpenModalProd(true);
    //     redirectProducts();
    //   }
    //   return;
    // }

    // customeAlert({
    //   title: "Sin resultados",
    //   icon: "info",
    //   text: "Intenta con otro plato",
    // });
  };

  const handleCleanSearch = () => setSearchTerm("");

  function handleSelectProd(prod: Product) {
    setProdSelected((prev) => (prev?.id === prod.id ? null : prod));
  }

  function handleAddToCart() {
    if (!prodSelected) return;

    customeAlert({
      title: "¿Desea agregar al carrito?",
      icon: "warning",
      cancelButtonColor: "#cf2d2d",
      confirmButtonColor: "#3e9b4b",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const existingProd = cart.find((item) => item.id === prodSelected.id);
        if (existingProd) {
          setCart(
            cart.map((item) =>
              item.id === prodSelected.id
                ? { ...item, cantidad: (item.cantidad || 1) + 1 }
                : item,
            ),
          );
          customeAlert({
            title: "Producto agregado al carrito",
            icon: "success",
            confirmButtonColor: "#3e9b4b",
          });
        } else {
          setCart([...cart, { ...prodSelected, cantidad: 1 }]);
          customeAlert({
            title: "Producto agregado al carrito",
            icon: "success",
            confirmButtonColor: "#3e9b4b",
          });
        }
        handleCloseModal();
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
    handleAddToCart,
    searchTerm,
    setSearchTerm,
    handleSearch,
    handleCleanSearch,
  };
}
