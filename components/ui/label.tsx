import React from "react";
import {cn} from "@/lib/utils";

export default function Label(
    {htmlFor, children, className}: {htmlFor:string, children: React.ReactNode, className?:string}
) {
    return(
        <label htmlFor={htmlFor} className={cn('block text-e-black text-sm capitalize mb-2', className)}>
            {children}
        </label>
    )
}