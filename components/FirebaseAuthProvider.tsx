'use client';


import { signInWithCustomToken } from "firebase/auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { auth } from "@/firebase";


async function syncFirebaseAuth(session: Session) {
    if(session && session.firebaseToken) {
        try {
            await signInWithCustomToken(auth, session.firebaseToken)
        } catch (error) {
            console.log("Error siging in with custom tokens:", error)
        }
    } else {
        auth.signOut();
    }
}

function FirebaseAuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const {data: session}  = useSession();
    useEffect(() => {
        if (!session) return;

        syncFirebaseAuth(session);
    }, [session])
  return (
    <>{children}</>
  )
}

export default FirebaseAuthProvider