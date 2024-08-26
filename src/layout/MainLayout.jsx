import { Outlet } from "@tanstack/react-router"
import NavBar from "../components/NavBar"
import Inquires from "../components/Inquires"

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <Inquires />
    <Outlet />
    </>
  )
}

export default MainLayout