import type { Metadata } from "next";
import { Sidebar } from "../components/organisms";

export const metadata: Metadata = {
    title: "Bancool",
    description: "The best digital bank in the world",
};

export default function BankLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex">
            <Sidebar />
            {children}
        </main>
    );
}
