import { Route, Routes } from "react-router-dom";
import { routes } from "./view/Routes";
import type { AppRoute } from "./interfaces/Routes";
import { useCampaign } from "./themes/useCampaign";
function renderRoutes(routeList: AppRoute[]) {
  return routeList.map(({ path, element, children }) => (
    <Route key={path} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
}

export default function App() {
  useCampaign();
  return <Routes>{renderRoutes(routes)}</Routes>;
}
