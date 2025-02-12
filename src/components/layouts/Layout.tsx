import { ReactElement } from "react"
import Header from "../Header"
import Sidebar from "../Sidebar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

 interface Props {
    children?: ReactElement
} 
const Layout = ({children}:Props) => {
    return (
        <div className="relative">
        <Header/>
          <div className=" m-3 font-inter flex md:gap-20 ">
      <Sidebar/>
      <div className=" w-full">
        {children}
        <Outlet/>
      <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
        </div>
    )
}

export default Layout
