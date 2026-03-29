import { useEffect } from "react";
import { useConfigStore } from "../store/storeConfig";
import { routeDetected } from "../utils/routeDetected";
import { useLocation } from "react-router-dom";

export default function useUpdateEnvironment() {
  const configActions = useConfigStore();
  const location = useLocation();

  useEffect(() => {
    const config = routeDetected();

    configActions.setCode(config.code ?? 0);
    configActions.setEntorno(config.entorno ?? "desarrollo");
    configActions.setModo(config.modo ?? "");
    configActions.setHostname(config.hostname ?? "");
    configActions.setMessage(config.menssage ?? "");
    configActions.setEntornoApi(config.entornoApi ?? "");
    configActions.setModoApi(config.modoApi ?? "");
  }, [location.pathname]);
  return null;
}
