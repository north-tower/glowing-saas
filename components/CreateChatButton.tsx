"use client"

import React from 'react'
import { MessageSquarePlusIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'


function CreateChatButton() {
    const router = useRouter();
    
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