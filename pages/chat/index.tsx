import Chat from "./Chat"
import Friend from "./List"

export default function ChatIndex() {
  return <div className="chat">
    <div className="chatLeft">
      <div>left title</div>
      <div>
        <Friend/>
      </div>
    </div>
    <div className="chatRight">
      <Chat/>
    </div>
  </div>
}
