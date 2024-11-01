import React, {HTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

interface ButtonProps extends
    HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

type defaultVariant = {
    variant: 'primary',
}


export const ButtonVariant = cva(
    'px-10 py-[15px] rounded-[5px] flex items-center justify-center gap-3', {
    variants: {
        variant: {
            primary: 'bg-primary text-white',
            neutral: 'bg-white text-e-black'
        }
    },
    defaultVariants: {
        variant: 'primary'
    } as defaultVariant
})

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, ...props}, ref) => {
    return(
        <button
            ref={ref}
            className={cn(ButtonVariant({variant}), className)}
            {...props}
        />
    )
})

Button.displayName = 'Button'


export default Button;