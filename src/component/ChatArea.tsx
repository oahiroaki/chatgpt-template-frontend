import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"

function ChatArea() {
  return (
    <div className="w-full h-full bg-gray-800">
      <ChatMessages></ChatMessages>
      <ChatInput></ChatInput>
    </div>
  )
}

export default ChatArea