import { ChatMembers, ChatMembersRef } from '@/lib/converters/ChatMembers'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function ChatMembersBadges({chatId}: {chatId: string}) {
    const [members, loading, error] = useCollectionData<ChatMembers>(
        ChatMembersRef(chatId)
    )
  return (
    <div>ChatMembersBadges</div>
  )
}

export default ChatMembersBadges