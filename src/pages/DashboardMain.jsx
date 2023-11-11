import { Helmet } from "react-helmet";
import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { BiMenu } from "react-icons/bi"

const DashboardMain = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <>
      <Helmet>
          <title>Dashboard - Main</title>
          <meta name="description" content="Dashboard Main" />
      </Helmet>
      <Sidebar open={open} />
      <main className={`w-[cal(100%-176px)] md:w-[cal(100%-240px)] lg:w-[cal(100%-256px)] bg-gray-50 min-h-screen ${open ? "ml-44 md:ml-60 lg:ml-64" : "ml-0"}`}>
            <div className="py-2 px-4 bg-white flex items-center gap-2 shadow-md shadow-black/5">
                <button type="button" className="text-lg text-gray-600">
                    <BiMenu size={24} onClick={() => {setOpen(!open)}} />
                </button>
                <ul className="flex items-center">
                    <li>
                        <a href="#" className="text-primary text-lg">Dashboard</a>
                    </li>
                </ul>
            </div>
            <div className="p-6">
                <h2 className="section-title">Main Dashboard</h2>
            </div>
      </main>
    </>
  )
}

export default DashboardMain;