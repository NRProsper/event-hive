import API from "@/utils/axios";
import {EventRequest, EventResponse, EventsResponse} from "@/utils/types";

export const getAllEvents = async (page=1, limit=12): Promise<EventsResponse> => {
    const {data, status} = await API.get<{data: EventsResponse}>(`/events/?page=${page}&limit=${limit}`) ;
    return data as EventsResponse;
}

export const createEvent = async (eventData: EventRequest): Promise<EventResponse> => {
    const { data } = await API.post("/events", eventData);
    return data as EventResponse;
};


export const getEventBySlug = async (slug: string): Promise<EventResponse> => {
    const { data } = await API.get(`/events/${slug}`);
    return data as EventResponse;
};

export const updateEventBySlug = async (slug: string, eventData: object): Promise<EventResponse> => {
    const { data } = await API.put(`/events/${slug}`, eventData);
    return data as EventResponse;
};

export const deleteEventBySlug = async (slug: string) => {
    const { data } = await API.delete(`/events/${slug}`);
    return data;
};