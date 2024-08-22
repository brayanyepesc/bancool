'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading } from "../../atoms";
import { useStore } from "@/app/store/useStore";

export const ProtectRoutes = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [loading, setLoading] = useState(true);
    const { isAuthenticated } = useStore();
    const [authChecked, setAuthChecked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (authChecked) {
            if (!isAuthenticated) {
                router.push('/auth/login');
            } else {
                setLoading(false);
            }
        } else {
            setAuthChecked(true);
        }
    }, [isAuthenticated, authChecked, router]);

    if (loading || !authChecked) { 
        return (<Loading />);
    }

    return (
        <>{children}</>
    )

}