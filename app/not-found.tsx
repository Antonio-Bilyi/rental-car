'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => router.push('/'), 3000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div>
            <h1>404 Page Not Found</h1>
            <p>Redirecting Home...</p>
        </div>
    )
};