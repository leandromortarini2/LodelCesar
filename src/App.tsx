import { Route, Routes } from "react-router-dom";
import { routes } from "./view/Routes";
import type { AppRoute } from "./interfaces/Routes";
import useUpdateEnvironment from "./view/app/hook/useUpdateEnvironment";
import { useConfigStore } from "./view/app/store/storeConfig";

function renderRoutes(routeList: AppRoute[]) {
  return routeList.map(({ path, element, children }) => (
    <Route key={path} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
}

export default function App() {
  useUpdateEnvironment();

  const { entornoApi } = useConfigStore();

  if (!entornoApi) {
    return (
      <div className="flex h-screen items-center justify-center">
        Cargando configuración...
      </div>
    );
  }
  return <Routes>{renderRoutes(routes)}</Routes>;
}
