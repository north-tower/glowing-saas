import useAdminId from '@/hooks/useAdminId';
import { ChatMembers, ChatMembersRef } from '@/lib/converters/ChatMembers'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import LoadingSpinner from './LoadingSpinner';

function ChatMembersBadges({chatId}: {chatId: string}) {
    const [members, loading, error] = useCollectionData<ChatMembers>(
        ChatMembersRef(chatId)
    );

    const adminId = useAdminId({ chatId });

    if (loading && !members) return <LoadingSpinner />;
    
  return (
    <div>ChatMembersBadges</div>
  )
}

export default ChatMembersBadges