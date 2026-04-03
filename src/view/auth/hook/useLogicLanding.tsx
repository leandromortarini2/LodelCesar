/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import customeAlert from "../../../utils/customeAlert";
import useLandingStore from "../store/storeLanding";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login";
import Cookies from "js-cookie";
import { useConfigStore } from "../../app/store/storeConfig";
import type { RoutesNavBar } from "../../../interfaces/RoutesNavBar";

export default function useLogicLanding() {
  const [isOpen, setIsOpen] = useState(false);

  const { setDisabled } = useLandingStore();
  const { entornoApi, modoApi } = useConfigStore((state) => state);

  const navigate = useNavigate();

  const method = useForm({
    defaultValues: {
      usuario: "",
      operador: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    watch,
    formState: { isValid },
  } = method;

  const usuario = watch("usuario");
  const operador = watch("operador");
  const password = watch("password");

  const auth = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      Cookies.set("accessToken", data.data.token, { expires: 1 });
      navigate("/dashboard", { replace: true });
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || error.message || "Error desconocido";
      customeAlert({
        title: "Credenciales incorrectas",
        text: errorMessage,
        icon: "warning",
      });
    },
  });

  const handleLogin = async () => {
    const payload = {
      usuario,
      password,
      entornoApi,
      operador,
      _m: modoApi,
      _e: "000030",
    };

    await auth.mutateAsync(payload);
  };

  useEffect(() => {
    if (isValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isValid, operador, setDisabled]);

  function handleDrawer() {
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

  return {
    handleLogin,
    handleDrawer,
    isOpen,
    method,
    handleRedirectSocial,
    customeAlert,
  };
}
