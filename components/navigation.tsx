import Container from "@/components/container";
import Logo from "@/components/logo";
import ButtonLink from "@/components/ui/button-link";

export default function Navigation() {
    return(
        <header>
            <Container>
                <nav className="flex items-center justify-between py-5">
                    <Logo />
                    <div className='flex items-center gap-2'>
                        <ButtonLink href="/login" variant="primary" className="hidden md:inline-flex">Login</ButtonLink>
                    </div>
                </nav>
            </Container>
        </header>
    )
}