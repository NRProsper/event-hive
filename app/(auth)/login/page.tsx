import Button from "@/components/ui/button";
import Logo from "@/components/logo";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";

export default function Login() {
    return(
        <div className="h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center px-9 lg:px-12 xl:px-32 2xl:px-40 gap-20">
                <Logo />
                <h1 className="text-4xl font-bold text-center">Sign In to Event Hive</h1>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <div className="w-full">
                        <Label htmlFor="email" className="uppercase">Your email</Label>
                        <Input type="password" id="email" placeholder="Enter your email address"/>
                    </div>
                    <div className="w-full">
                        <Label htmlFor="venue" className="uppercase">Password</Label>
                        <Input id="venue" placeholder="Enter your password"/>
                    </div>
                    <Button className="text-center">Sign in</Button>
                </div>
            </div>
            <div
                className="relative px-9 lg:px-12 xl:px-32 2xl:px-40"
                style={{
                    backgroundImage: 'url("/login.png")',
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="relative h-full flex flex-col gap-3 items-center justify-center">
                    <h2 className='text-white text-3xl font-bold text-center'>Hello Friend</h2>
                    <p className="text-white mb-2 text-center">To keep connected with us provide us with your information </p>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}