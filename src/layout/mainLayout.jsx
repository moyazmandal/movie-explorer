import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">

        <Nav/>
        <main className="flex-1">
        <Outlet />
        </main>
        <Footer/>
        


    </div>
  )
}
