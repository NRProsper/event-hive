import React from "react";

export default function Container({className, children}: {className?: string, children: React.ReactNode}) {
    return(
        <div className={`container mx-auto px-8 ${className}`}>
            {children}
        </div>
    )
}