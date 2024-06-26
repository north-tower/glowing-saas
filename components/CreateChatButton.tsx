"use client"

import React, { useState } from 'react'
import { MessageSquarePlusIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useToast } from './ui/use-toast'
import { useSubscriptionStore } from '@/store/store'
import LoadingSpinner from './LoadingSpinner'
import { serverTimestamp, setDoc } from 'firebase/firestore'
import { addChatRef } from '@/lib/converters/ChatMembers'
import { v4 as uuidv5} from 'uuid';

function CreateChatButton({ isLarge}: { isLarge?: boolean}) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription)

    
    
    const createNewChat = async () => {
      if (!session?.user.id) return;

      setLoading(true);
      toast({
        title: "Creating New Chat...",
        description: "Hold tight while we create your new chat...",
        duration: 3000,
      });


      const chatId = uuidv5()

      await setDoc(addChatRef(chatId, session.user.id), {
        userId: session.user.id!,
        email: session.user.email!,
        timestamp: serverTimestamp(),
        isAdmin: true,
        chatId: chatId,
        image: session.user.image || "",
      }).then(() => {
        toast({
          title: "Success",
          description: "Your chat has been created",
          className: "bg-green-600 text-white",
          duration: 2000,
        });
        router.push(`/chat/${chatId}`);
      }).catch(() => {
        toast({
          title: "Error",
          description: "There was an error creating your chat",
          variant: "destructive",
        })
      }).finally(() => {
        setLoading(false)
      })
        
    }

  if (isLarge)
    return(
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? <LoadingSpinner /> : "Create a New Chat"}
        </Button>
      </div>
  )
  return (

        <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlusIcon />
        </Button>
  
  )
}

export default CreateChatButton

