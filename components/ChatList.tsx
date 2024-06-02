import React from 'react'
import { authOptions } from '@/auth'
import { getDocs } from 'firebase/firestore'
import { getServerSession } from 'next-auth'
import { chatMembersCollectionGroupRef } from '@/lib/converters/ChatMembers';

async function ChatList() {
    const session = await getServerSession(authOptions);

    const chatsSnapshot = await getDocs(
      chatMembersCollectionGroupRef(session?.user.id!)
    )

  return (
    <div>ChatList</div>
  )
}

export default ChatList