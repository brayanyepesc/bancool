import { CreditCard, EuroIcon, PersonStanding, Settings } from "lucide-react";

export const sidebarItems = [
    {
        id: 1,
        icon: CreditCard,
        text: "Account",
        link: "/bank/account",
        active: true,
    },
    {
        id: 2,
        icon: EuroIcon,
        text: "Operations",
        link: "/bank/operations",
        active: false,
    },
    {
        id: 3,
        icon: PersonStanding,
        text: "Profile",
        active: false,
        link: "/bank/profile"
    },
    {
        id: 4,
        icon: Settings,
        text: "Configuration",
        active: false,
        link: "/bank"
    }
]