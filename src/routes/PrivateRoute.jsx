import { Outlet } from "react-router-dom"
import authService from "../utils/authService"
import {Unauthorized} from "../pages/Unauthorized"

export function PrivateRoute() {

  if (!authService.isAuthenticated()) {
      return (
        <Unauthorized />
      )
  }
  return <Outlet />
  
}