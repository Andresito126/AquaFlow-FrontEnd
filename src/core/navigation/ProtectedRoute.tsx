import { Navigate, Outlet } from "react-router-dom";
import { isTokenExpired } from "../../features/users/Utils/authUtils";


export const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (!token || !userRole || isTokenExpired(token)) {
    localStorage.clear(); // Limpia sesión expirada
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
