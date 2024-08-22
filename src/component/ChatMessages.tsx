import { useState } from "react"
import ChatMessage from "../model/ChatMessage"
import ChatMessageCard from "./ChatMessageCard"

function ChatMessages() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: "user",
      content: "test"
    }
  ])

  return (
    <div>
      {chatMessages.map(chatMessage => <ChatMessageCard chatMessage={chatMessage} />)}
    </div>
  )
}

export default ChatMessages