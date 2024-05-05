import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from "./firebase-admin";
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        jwt: async ({ user , token }) => {
            if(user) {
                token.sub = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: 'jwt',
    },
    adapter: FirestoreAdapter(adminDb),
   
} satisfies NextAuthOptions;