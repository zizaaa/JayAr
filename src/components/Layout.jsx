import { Outlet } from "react-router-dom"
import Nav from "./Nav"

const Layout = () => {
  return (
    <div className="flex lg:flex-row flex-col h-full items-center justify-between lg:gap-0 gap-10">
        <div className="lg:w-[35rem] w-full lg:h-full h-auto pt-20 lg:pb-20 pb-0 lg:ps-20 px-10 lg:pe-0 pe-10 overflow-hidden">
            <Nav/>
        </div>
        <div className="lg:py-20 py-0 pe-10 lg:ps-0 h-full ps-10 flex-1 flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout