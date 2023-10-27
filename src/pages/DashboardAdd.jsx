import {useState} from "react"
import Sidebar from "../components/Sidebar"
import {BiMenu} from "react-icons/bi"
import AddBook from "../components/Admin/AddBook";

const DashboardAdd = () => {
    const [open, setOpen] = useState(true);
  return (
    <>
        <Sidebar open={open} />
        <main className={`w-[cal(100%-256px)] bg-gray-50 min-h-screen ${open ? 'ml-64' : 'ml-0'}`}>
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
            <div className="p-6 max-w-3xl mx-auto">
                <h2 className="section-title">Add Dashboard</h2>
                <AddBook />
            </div>
        </main>
    </>
  )
}

export default DashboardAdd