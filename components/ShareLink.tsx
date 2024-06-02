import React, { Dispatch, SetStateAction } from 'react'
import { useToast } from './ui/use-toast';

function ShareLink({
    isOpen, chatId, setIsOpen
}: {
    isOpen: boolean, chatId: string, setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
 
    const { toast } = useToast();
    const host = window.location.host;

    const linkToChat = 
    process.env.NODE_ENV === "development" ?
    `https://${host}/chat/${chatId}` : 
     `https://${host}/chat/${chatId}`;

     async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(linkToChat);
            console.log("Tet copied to slipboard");

            toast({
                title: "Copied successfuly",
                description: "Share this to the person",
                className: "bg-green-600 text-white"
            });
        } catch(err) {
            console.error("Faild to copy text:", err);
        }
     }
  return (
    <div>ShareLink</div>
  )
}

export default ShareLink