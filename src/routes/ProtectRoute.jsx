import { Navigate, Outlet } from "react-router-dom";
import authService from "../utils/authService";

export function ProtectRoute() {
  if (authService.isAuthenticated()) return <Navigate to="/dashboard/main" />
  return <Outlet />
}
