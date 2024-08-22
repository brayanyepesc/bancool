import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Bancool Authentication",
    description: "Login or register to access your account",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full h-screen bg-white overflow-hidden">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-10">
                {children}
                <div className="w-full h-full">
                    <Image src='/images/LoginImage.webp' width={500} height={500} alt="Login Image" className="w-full h-full bg-cover" />
                </div>
            </div>
        </main>
    );
}
