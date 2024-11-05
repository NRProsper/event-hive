import {useQuery} from "@tanstack/react-query";
import {getAllEvents, getEventBySlug} from "@/utils/api/events";

export const useEvents = (page = 1, limit = 12) => {
    return useQuery({
        queryKey: ['events', page, limit],
        queryFn: () => getAllEvents(page, limit)
    })
}

export const useEvent = (slug: string) => {
    return useQuery({
        queryKey: ['event', slug],
        queryFn: () => getEventBySlug(slug)
    })
}