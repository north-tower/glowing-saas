import { db } from "@/firebase"
import {
    DocumentData,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    collection,
    collectionGroup,
    doc,
    query,
    where,
} from "firebase/firestore";

export interface ChatMembers {
    userId: string;
    email: string;
    timestamp: Date | null;
    isAdmin: boolean;
    chatId: string;
    image: string;
}

const chatMembersConverter: FirestoreDataConverter<ChatMembers> = {
    toFirestore: function (member: ChatMembers): DocumentData {
        return {
            userId: member.userId,
            email: member.email,
            timestamp: member.timestamp,
            isAdmin: !!member.isAdmin,
            chatId: member.chatId,
            image: member.image,
        }
    }, 
    fromFirestore: function ( snapshot: QueryDocumentSnapshot, 
        options: SnapshotOptions ) : ChatMembers {
        const data = snapshot.data(options);

        return {
            userId: snapshot.id,
            email: data.email,
            timestamp: data.timestamp,
            isAdmin: data.isAdmin,
            chatId: data.chatId,
            image: data.image
        }
    }
}

export const addChatRef = ( chatId: string, userId: string) => 
    doc(db, "chats", chatId, "members", userId).withConverter(
        chatMembersConverter
    )