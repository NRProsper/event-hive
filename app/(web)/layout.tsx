"use client"

import React from "react";
import Navigation from "@/components/navigation";
import Providers from "@/utils/providers";

export default function WebLayout({children}:{children: React.ReactNode}) {
    return(
        <>
            <Navigation />
            <Providers>
                <main>
                    {children}
                </main>
            </Providers>
        </>
    )
}