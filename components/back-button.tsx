'use client'

import {FaArrowLeft as ArrowLeft} from "react-icons/fa6";
import Button from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function BackButton(){
    const router = useRouter();

    return(
        <Button
            className="absolute top-5"
            onClick={() => router.back()}
        >
            <ArrowLeft size={20} />
            <span>Back</span>
        </Button>
    )
}