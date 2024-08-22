import { useState } from "react";

function ChatInput() {
  const [chatMessage, setChatMessage] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatMessage(event.target.value)
  }

  return (
    <div>
      <textarea className="resize-none rounded-md" onChange={handleChange} value={chatMessage}>
      </textarea>
    </div>
  )
}

export default ChatInput