
export type EventResponse = {
    id : number,
    title : string,
    slug : string,
    description : string,
    date : string,
    time : string,
    location :string,
    organizer : string,
    organizerUrl ?: string,
    seats : string,
    tags : string[],
    bannerUrl ?: string,
    createdAt : string,
    updatedAt : string,
}


export type EventRequest = {
    id : number,
    title : string,
    slug : string,
    description : string,
    date : string,
    time : string,
    location :string,
    organizer : string,
    organizerUrl ?: string,
    seats : string,
    tags : string[],
    bannerUrl ?: string,
}

type Pagination = {
    currentPage: number,
    totalPages: number,
    pageSize: number,
    totalEvents: number
}

export type EventsResponse = {
    events: Event[],
    pagination: Pagination
}