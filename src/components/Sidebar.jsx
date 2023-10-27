import authService from "../utils/authService"
import {BiSolidDashboard, BiBookAdd, BiTable, BiLogOut} from "react-icons/bi"

const Sidebar = ({open}) => {
  return (
    <>
      <aside className={`fixed left-0 top-0 w-64 h-full bg-primary p-4 ${open ? '-translate-x-0' : '-translate-x-full'}`}>
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-400">
          <img src="https://placehold.co/32x32" alt="" />
          <span className="text-lg font-bold text-white ml-3">Logo</span>
        </a>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="/dashboard/admin" className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md">
              <BiSolidDashboard />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="/dashboard/add" className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md">
              <BiBookAdd />
              <span>Add Book</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="/dashboard/table" className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md">
              <BiTable />
              <span>Table Book</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="" className="flex items-center py-2 px-4 text-gray-300 hover:text-gray-100 gap-2 hover:bg-gray-950 rounded-md">
              <BiLogOut />
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar