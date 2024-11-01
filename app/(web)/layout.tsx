import React from "react";
import Navigation from "@/components/navigation";

export default function WebLayout({children}:{children: React.ReactNode}) {
    return(
        <>
            <Navigation />
            {children}
        </>
    )
}