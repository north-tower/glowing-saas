'use client'

import { Message, sortedMessagesRef } from '@/lib/converters/Message';
import { MessageCircleIcon } from 'lucide-react';
import { Session } from 'next-auth';
import React, { createRef, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatMessages({
    chatId, initialMessages,session
}: { chatId: string;
    initialMessages: Message[];
    session: Session | null;
 }) {
    const messagesEndRef = createRef<HTMLDivElement>();

    const [messages,loading,error] = useCollectionData<Message>(
        sortedMessagesRef(chatId),
        {
            initialValue: initialMessages,
        }
    );

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth"});
    }, [messages, messagesEndRef]);


  return (
    <div>
        {!loading && messages?.length === 0 && (
            <div className='flex flex-col justify-center  text-center items-center p-20
            rounded-xl space-y-2 bg-indigo-400 text-white font-extralight'>
                <MessageCircleIcon className='h-10 w-10' />
                <h2>
                    <span className='font-bold'>Invite a friend</span> & {" "}
                    <span className='font-bold'>
                        Send yout first message
                    </span>{" "}
                    below to get started!
                </h2>
                </div>
                
        )}
    </div>
  )
}

export default ChatMessages