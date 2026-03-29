import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectedRoute = () => {
  const isAuthenticated = Cookies.get("accessToken");

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
