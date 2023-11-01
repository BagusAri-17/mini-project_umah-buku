import authService from "../utils/authService"
import Logo from "../assets/logo/logo-white.png"
import {BiSolidDashboard, BiBookAdd, BiTable, BiLogOut} from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const Sidebar = ({open}) => {

  const navigate = useNavigate();

  const handleOut = async () => {
    try {
      await authService.logOut();
			navigate("/login");
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <>
      <aside className={`fixed left-0 top-0 w-44 md:w-60 lg:w-64 h-full bg-primary p-4 ${open ? '-translate-x-0' : '-translate-x-full'}`}>
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-400">
          <img className="w-40 mx-auto" src={Logo} alt="" />
        </a>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="/dashboard/main" className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md">
              <BiSolidDashboard />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="/dashboard/add" className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md">
              <BiBookAdd />
              <span>Tambah Buku</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="/dashboard/table" className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md">
              <BiTable />
              <span>List Buku</span>
            </a>
          </li>
          <li className="mb-2">
            <button onClick={handleOut} className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md w-full">
              <BiLogOut />
              <span>Keluar</span>
            </button>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar