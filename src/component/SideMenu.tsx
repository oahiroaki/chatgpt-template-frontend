import { PiSidebar } from "react-icons/pi"
import { FiEdit } from "react-icons/fi"

function SideMenu() {
  return (
    <div className="w-64 h-screen bg-gray-900">
      <div className="text-white w-full h-8 flex flex-nowrap items-center justify-between p-4">
        <div><PiSidebar className="w-6 h-6"/></div>
        <div><FiEdit className="w-6 h-6" /></div>
      </div>
    </div>
  )
}

export default SideMenu