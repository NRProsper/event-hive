import React from "react";
import {cn} from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({className, ...props}, ref) => {
    return(
        <input
            ref={ref}
            className={cn('w-full outline-none border px-4 py-2 border-grey/50 rounded-md focus:ring-1 focus:ring-primary', className)}
            {...props}
        />
    )
})


Input.displayName = 'Input'

export default Input;