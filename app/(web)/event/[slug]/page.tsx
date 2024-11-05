import {Metadata} from "next";
import {notFound} from "next/navigation";
import {getEventBySlug} from "@/utils/api/events";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import Event from "@/app/(web)/event/event";

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

export default async  function EventPage(props: {
    params: Promise<{slug: string}>;
}) {
    const params = await props.params;

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['event', params.slug],
        queryFn: () => getEventBySlug(params.slug)
    })

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Event slug={params.slug} />
        </HydrationBoundary>
    )

}