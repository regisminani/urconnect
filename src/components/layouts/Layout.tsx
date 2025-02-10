import { ReactElement } from "react"
import Header from "../Header"
import Sidebar from "../Sidebar"
import { Outlet } from "react-router-dom"

 interface Props {
    children?: ReactElement
} 
const Layout = ({children}:Props) => {
    return (
        <div className="m-3 font-inter flex sm:gap-20 ">
      <Sidebar/>
      <div className=" w-full">
        <Header/>
        {children}
        <Outlet/>
      </div>
    </div>
    )
}

export default Layout
