import ChatArea from "../component/ChatArea"
import SideMenu from "../component/SideMenu"

function TopPage() {
  return (
    <div className="w-screen h-screen flex flex-nowrap">
      <SideMenu></SideMenu>
      <ChatArea></ChatArea>
    </div>
  )
}

export default TopPage