type LoginRequest = {
    email: string;
    password: string;
};


export async function POST(req: Request) {
    const {email, password}: LoginRequest = await req.json();
}