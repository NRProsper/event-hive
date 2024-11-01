import Link from "next/link";

export default function Logo() {
    return(
        <Link href={"/"} className="text-3xl md:text-[2.5rem] font-bold text-e-black">
            <span className="pe-2">Event</span>
            <span className="text-primary">Hive</span>
        </Link>
    )
}