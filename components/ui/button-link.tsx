import Link from "next/link";
import React, {AnchorHTMLAttributes, FC} from "react";
import {VariantProps} from "class-variance-authority";
import {ButtonVariant} from "@/components/ui/button";
import { Url } from "next/dist/shared/lib/router/router";
import {cn} from "@/lib/utils";


interface LinkProps extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof ButtonVariant> {
    href: Url
}

const ButtonLink:FC<LinkProps> = React.forwardRef<HTMLAnchorElement, LinkProps>(({className, variant, href, ...props}, ref) => {
    return(
        <Link
            ref={ref}
            href={href}
            {...props}
            className={cn(className, ButtonVariant({ variant }))}
        />
    )
})

ButtonLink.displayName = 'ButtonLink'


export default ButtonLink;