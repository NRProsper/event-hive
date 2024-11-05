import API from "@/utils/axios";

export const getAllBookings = async (page = 1, limit = 10) => {
    const { data } = await API.get(`/bookings?page=${page}&limit=${limit}`);
    return data;
};


export const createBooking = async (bookingData) => {
    const { data } = await API.post("/bookings", bookingData);
    return data;
};


export const getBookingById = async (id: number) => {
    const { data } = await API.get(`/bookings/${id}`);
    return data;
};


export const deleteBookingById = async (id: number) => {
    const { data } = await API.delete(`/bookings/${id}`);
    return data;
};