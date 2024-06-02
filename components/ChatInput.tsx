'use client'

import { useSession } from "next-auth/react"
import { Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { Button } from "./ui/button"
import { User, messagesRef } from "@/lib/converters/Message"
import { addDoc, serverTimestamp } from "firebase/firestore"

const formSchema = z.object({
    input: z.string().max(1000),
})

function ChatInput({chatId}: {chatId: string}) {
    const { data: session } = useSession();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>){
        if (values.input.length === 0){
            return;
        }

        if (!session?.user){
            return;
        }

        const userToStore: User = {
            id: session.user.id!,
            name: session.user.name!,
            email: session.user.email!,
            image: session.user.image || "",
        };

        addDoc(messagesRef(chatId), {
            input: values.input,
            timestamp: serverTimestamp(),
            user: userToStore,
        });

        form.reset();

    }


  return (
    <div className="sticky bottom-0">
        <Form {...form}>
            <form className="flex space-x-2 p-2 rounded-t-xl max-w-4xl
            mx-auto bg-white border dark:bg-slate-800" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="input"
                render={({field }) => (
                    <FormItem className="flex-1">
                        <FormControl>
                            <Input className="border-none bg-transparent dark:placeholder:text-white/70"
                            placeholder="Enter message in any language..." {...field} />

                        </FormControl>
                    </FormItem>
                )}
                />
                <Button type="submit" className="bg-violet-600 text-white">
                    Send
                </Button>

                
            </form>
        </Form>

    </div>
  )
}

export default ChatInput