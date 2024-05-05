import { features } from "process"

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away with anyone, anywhere",
    features: [
      "20 message Chat Linit in chats",
      "2 Participant linit in Chat",
      "3 Chat Rooms, limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "si_OnlcsLNQYbMVzV",
    href: "#",
    priceMonthly: "$5.66",
    description: "Unlock the Full Potential with Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia support in chats(coming soon)",
      "1-hour, dedicated support response time",
      "Early access to New Features",
    ],
  },
];

function PricingCards({ redirect } : { redirect: boolean } ) {
  return (
    <div>PricingCards</div>
  )
}

export default PricingCards