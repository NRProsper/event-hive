import API from "@/utils/axios";
import {EventCreateData} from "@/lib/types";

export const getAllEvents = async (page=1, limit=12) => {
    const {data} = await API.get(`/events/?page=${page}&limit=${limit}`);
    return data
}

export const createEvent = async (eventData: EventCreateData) => {
    const { data } = await API.post("/events", eventData);
    return data;
};


export const getEventBySlug = async (slug: string) => {
    const { data } = await API.get(`/events/${slug}`);
    return data;
};

export const updateEventBySlug = async (slug: string, eventData: object) => {
    const { data } = await API.put(`/events/${slug}`, eventData);
    return data;
};

export const deleteEventBySlug = async (slug: string) => {
    const { data } = await API.delete(`/events/${slug}`);
    return data;
};