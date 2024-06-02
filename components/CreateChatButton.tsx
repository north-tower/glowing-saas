"use client"

import React, { useState } from 'react'
import { MessageSquarePlusIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useToast } from './ui/use-toast'
import { useSubscriptionStore } from '@/store/store'


function CreateChatButton({ isLarge}: { isLarge?: boolean}) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription)

    
    
    const createNewChat = async () => {
        router.push(`/chat/abc`);
    }
  return (
    <Button variant={"ghost"}>
        <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlusIcon />
        </Button>
    </Button>
  )
}

export default CreateChatButton