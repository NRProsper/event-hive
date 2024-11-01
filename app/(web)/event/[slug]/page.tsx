import Container from "@/components/container";
import Image from "next/image";
import BackButton from "@/components/back-button";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import BookingDialog from "@/components/features/booking-dialog";
import {getEventBySlug} from "@/utils/api/events";

export async function generateMetadata(props: {
    params: Promise<{slug: string}>;
}): Promise<Metadata> {
    const params = await props.params;
    const event = await getEventBySlug(params.slug);
    if (!event) return notFound();

    return {
        title: event.title,
        description: event.description
    }
}

export default async function Product({params}: {params: { slug: string }}) {

    const event = await getEventBySlug(params.slug);

    return (
        <div className="my-8">
            <Container>
                <div
                    className="relative h-[765px] lg:h-[595px] rounded-md overflow-hidden flex flex-col gap-10 lg:flex-row items-start lg:items-center justify-between py-10 px-10 xl:px-20"
                    style={{
                        backgroundImage: `url(${event.bannerUrl})`,
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    <BackButton />

                    <div className="relative top-16 lg:top-0 max-w-[590px]">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-5xl font-bold text-white leading-tight">{event.title}</h1>
                            <div>
                                <h2 className="text-4xl text-white mb-2">{event.location}</h2>
                                <p className="text-white text-sm">{event.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 bg-white rounded-[10px] md:min-w-[385px]">
                        <h3 className="text-2xl font-semibold mb-3">Date & Time</h3>
                        <p className="text-gray-600">{new Date(event.date).toDateString() + ', ' + event.time}</p>
                        <p className={`mt-2 font-semibold ${event.seats > 50 ? 'text-green-500' : event.seats > 0 ? 'text-yellow-500' : 'text-red-500'}`}>
                            Available seats: {event.seats}
                        </p>
                        <BookingDialog id={event.id} title={event.title} />
                    </div>
                </div>
                <div className="mt-10 px-10 xl:px-20 flex flex-col lg:flex-row items-start gap-20">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="">
                            <h4 className="text-2xl font-semibold text-e-black">Description</h4>
                            <p className="mt-2 text-grey">
                                {event.description}
                            </p>
                        </div>
                        <div className="">
                            <h4 className="text-2xl font-semibold text-e-black">Organizer Contact</h4>
                            <p className="mt-2 text-grey">Please go to {event.organizerUrl} and refer the FAQ section for
                                more detail</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                        <div>
                            <h4 className="text-2xl font-semibold text-e-black mb-2">Event Location</h4>
                            <Image
                                src="/map.png"
                                alt="Mapp"
                                height={260}
                                width={480}
                                className="w-full h-auto"
                            />
                            <p className="mt-3 text-grey">Dream world wide in {event.location}</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-e-black">Tags</h4>
                            <ul className="mt-3 flex gap-2 font-semibold">
                                {
                                    event.tags.map((tag, idx) => (
                                        <li className="capitalize" key={idx}>{tag}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}