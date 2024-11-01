import React from "react";
import {cn} from "@/lib/utils";

const TextArea = React.forwardRef<HTMLTextAreaElement, React.InputHTMLAttributes<HTMLTextAreaElement>>(({className, ...props}, ref) => {
    return(
        <textarea
            ref={ref}
            className={cn(className, 'w-full outline-none border px-4 py-2 border-grey/50 rounded-md focus:ring-1 focus:ring-primary')}
            {...props}
        />
    )
})

TextArea.displayName = 'TextArea'

export default TextArea;