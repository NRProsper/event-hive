import Image from "next/image";
import Link from "next/link";
import {getAllEvents} from "@/utils/api/events";

export default async function EventsGrid() {
    const data = await getAllEvents();
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-[30px]">
            {
                data.events.map((event, idx) => (
                    <div key={idx} className="group rounded-xl shadow-xl hover:shadow-2xl p-6 border border-gray-300">
                        <Link href={`/event/${event.slug}`}>
                            <div className="relative overflow-hidden rounded-md">
                                <Image
                                    src={event.bannerUrl}
                                    alt="Event Image"
                                    width={347}
                                    height={240}
                                    className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                                />
                                <span
                                    className="absolute top-2 left-2 text-primary uppercase bg-white rounded-md py-[5px] px-[10px] text-sm">Free</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h2 className="mt-5 font-[500] text-lg hover:underline">{event.title}</h2>
                                <p className="text-primary">{new Date(event.date).toDateString() + ', ' + event.time}</p>
                                <p className='text-gray-600'>{event.location}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}