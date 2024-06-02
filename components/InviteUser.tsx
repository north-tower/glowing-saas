'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription,
    DialogHeader,DialogTitle,DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod"
import { useSession } from "next-auth/react";
import { useToast } from "./ui/use-toast";
import useAdminId from "@/hooks/useAdminId";
import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlusCircleIcon } from "lucide-react";


const formSchema = z.object({
    email: z.string().email("Please enter a valid email address")
})

function InviteUser({ chatId }: { chatId: string}) {
    const { data: session } = useSession();
    const { toast } = useToast();
    const adminId = useAdminId({ chatId });
    const subscription = useSubscriptionStore((state) => state.subscription);
    const router = useRouter();

    const [opem , setOpen] = useState(false);
    const [openInviteLink, setOpenInviteLink] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });
  return (
    adminId === session?.user.id && (
        <>
        <Dialog open={open} asOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircleIcon className="mr-1" />
                    Add User To Chat
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add user to chat</DialogTitle>
                    <DialogDescription>
                        Simply enter another users email address to invite them to this chat!{" "}
                        <span className="text-indigo-600 font-bold">
                            (Note: they must be registered)
                        </span>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        
        </>
    )
  )
}

export default InviteUser