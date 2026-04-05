import LandingPage from "./auth/view/landing/LandingPage";
import type { AppRoute } from "../interfaces/Routes";

export const routes: AppRoute[] = [{ path: "/", element: <LandingPage /> }];
