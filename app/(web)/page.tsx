import Container from "@/components/container";
import Image from "next/image";
import EventsGrid from "@/components/features/events-grid";

export default async function Home() {
    return (
        <div className="my-8">
            <Container>
                <div className="flex flex-col  lg:flex-row items-start justify-between gap-12 lg:gap-2">
                    <div className="max-w-2xl">
                        <h5 className=" text-sm text-black/60 mb-4 border border-primary inline-block py-1 px-3 rounded-full font-semibold ring ring-primary/30">Where Exceptional Events Come to Life</h5>
                        <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold leading-tight">Crafted for the <span
                            className="text-primary">Visionaries</span> and <span className="text-primary">Doers</span>
                        </h1>
                        <div className="flex items-center gap-5 mt-5">
                            <div className="p-5 bg-primary rounded-xl text-white">
                                <h4 className="text-3xl font-semibold mb-2">2K+</h4>
                                <p className="max-w-[108px] font-semibold">Total Events hosted</p>
                            </div>
                            <div className="p-5 bg-primary rounded-xl text-white">
                                <h4 className="text-3xl font-semibold mb-2">100+</h4>
                                <p className="max-w-[108px] font-semibold">Total Events live</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={'/home.png'}
                            alt={"Home Image"}
                            width={932}
                            height={450}
                        />
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-4xl font-semibold mb-8"><span className="text-primary">Events</span> around you</h2>
                    <EventsGrid />
                </div>

            </Container>
        </div>
    );
}
