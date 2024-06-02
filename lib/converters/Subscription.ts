import { db } from "@/firebase"

import { Subscription } from "@/types/Subscription"
import {
    DocumentData, FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions, collection
} from "firebase/firestore"

const subscriptionConverter: FirestoreDataConverter<Subscription> = {
    toFirestore: function (subscription: Subscription): DocumentData {
        return {
            ...subscription
        }
    }, 
    fromFirestore: function ( snapshot: QueryDocumentSnapshot, options: SnapshotOptions ) : Subscription {
        const data = snapshot.data(options);

        const sub: Subscription = {
            id: snapshot.id,
            role: data.role,
            price: data.price,
            amount: data.amount,
            status: null
        }

        return sub;
    }
}
export const subscriptionRef = (userId: string) => 
    collection(db, "customers", userId, "subscriptions").withConverter(
        subscriptionConverter
    );