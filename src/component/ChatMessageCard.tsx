import ChatMessage from "../model/ChatMessage"
import { AiOutlineRobot } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"

interface ChatMessageCardProps {
  chatMessage: ChatMessage
}

function ChatMessageCard(props: ChatMessageCardProps) {
  return (
    <div className="flex">
      <div className="">
        {props.chatMessage.role === "assistant" ? <AiOutlineRobot /> : <FaRegUser />}        
      </div>
      <div className="bg-white py-2 px-4 shadow rounded-xl">
        {props.chatMessage.content}
      </div>
    </div>
  )
}

export default ChatMessageCard