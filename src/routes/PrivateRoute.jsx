import authService from "../utils/authService"
import { Unauthorized } from "../pages/Unauthorized"
import { Outlet } from "react-router-dom"

export function PrivateRoute() {

  if (!authService.isAuthenticated()) {
      return (
        <Unauthorized />
      )
  }
  return <Outlet />
  
}