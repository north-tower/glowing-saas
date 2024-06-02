import { authOptions } from "@/auth"
import { getServerSession } from "next-auth"

async function ChatPage() {
  const session = await getServerSession(authOptions)
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage