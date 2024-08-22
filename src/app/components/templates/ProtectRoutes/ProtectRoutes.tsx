'use client'
import { useAuthentication } from "@/app/hooks/useAuthentication";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading } from "../../atoms";

export const ProtectRoutes = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [loading, setLoading] = useState(true);
    const isAuthenticated = useAuthentication();
    const router = useRouter();
    useEffect(() => {
        if (isAuthenticated === false) {
            router.push('/auth/login');
        } else {
            setLoading(false);
        }
    }, [isAuthenticated, router]);

    if (loading) {
        return (<Loading />);
    }
    return (
        <>{children}</>
    )
}