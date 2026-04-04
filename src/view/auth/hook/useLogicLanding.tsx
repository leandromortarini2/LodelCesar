/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import customeAlert from "../../../utils/customeAlert";
import useLandingStore from "../store/storeLanding";
import type { RoutesNavBar } from "../../../interfaces/RoutesNavBar";

export default function useLogicLanding() {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useLandingStore((state) => state.cart);
  const setCart = useLandingStore((state) => state.setCart);

  const method = useForm({
    defaultValues: {
      usuario: "",
      operador: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  function handleClose() {
    setIsOpen(!isOpen);
  }

  function handleRedirectSocial(route: RoutesNavBar) {
    customeAlert({
      title: `Serás redirigido a ${route?.text}`,
      text: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32B16E",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace(route.url);
      }
    });
  }

  function updateQuantity(id: number, delta: number) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQty = (item.cantidad || 1) + delta;
        return { ...item, cantidad: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }

  const totalCart = cart.reduce(
    (acc, item) => acc + Number(item.precio) * (item.cantidad || 1),
    0,
  );

  function onDeleteProdCart(id: number) {
    customeAlert({
      title: "¿Desea eliminar el producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32B16E",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      }
    });
  }

  function handleSubmitCart() {
    if (cart.length === 0) return;

    let message = `* Nuevo Pedido - Del Cesar\n`;
    message += `--------------------------\n\n`;

    cart.forEach((item) => {
      const categoriaMostrada =
        item.categoria === "Sanguche de Milanesa" && "Sanguche de Milanesa";

      const subtotal = Number(item.precio) * (item.cantidad || 1);

      message += `-  ${categoriaMostrada ? `*${categoriaMostrada}* (${item.nombre})` : `*${item.nombre}*`} \n`;
      if (item.descripcion) message += `- Descripcion: ${item.descripcion}\n`;
      message += `- Precio unit: $${item.precio}\n`;
      message += `- Cantidad: ${item.cantidad || 1}\n`;
      message += `- Subtotal: *$${subtotal}*\n`;
      message += `\n`;
      message += `--------------------------\n`;
    });

    message += `*TOTAL A PAGAR: $${totalCart}*\n\n`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "5491165149673";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  }

  return {
    handleSubmitCart,
    handleClose,
    isOpen,
    method,
    handleRedirectSocial,
    customeAlert,
    cart,
    updateQuantity,
    totalCart,
    onDeleteProdCart,
  };
}
