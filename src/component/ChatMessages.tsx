import { useState } from "react"

interface ChatMessage {
  content: string
  role: string
}


function ChatMessages() {
  const chatMessages = useState<ChatMessage[]>([
    {
      role: "user",
      content: "test"
    }
  ])

  return (
    <div>
      {chatMessages.map((chatMessage) => {
        return <ChatMessage chatMessage={chatMessage} />
      }}
    </div>
  )
}

export default ChatMessages