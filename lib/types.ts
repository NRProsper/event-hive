export type EventCreateData = {
    title: string;
    slug: string;
    venue: string;
    date: string;
    time: string;
    organizer: string;
    organizerUrl: string;
    seats: number;
    tags: string[];
    bannerUrl: string;
    description: string;
};


export type EventResponseData = {
    id: number;
    title: string;
    slug: string;
    venue: string;
    date: string;
    time: string;
    organizer: string;
    organizerUrl: string;
    seats: number;
    tags: string[];
    bannerUrl: string;
    description: string;
    createdAt: string;
    updatedAt: string;
};

export type PaginationInfo = {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalEvents: number;
};


export type PaginatedEventsResponse = {
    events: EventResponseData[];
    pagination: PaginationInfo;
};
