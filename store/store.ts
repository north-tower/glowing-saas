import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription : Subscription | null) => set({ subscription }),
}))