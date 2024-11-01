'use client'

import Container from "@/components/container";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Button from "@/components/ui/button";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createEvent} from "@/utils/api/events";

const eventSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    slug: z.string().min(1, { message: "Slug is required" }),
    location: z.string().min(1, { message: "Venue is required" }),
    date: z.string().min(1, { message: "Date is required" }),
    time: z.string().min(1, { message: "Time is required" }),
    organizer: z.string().min(1, { message: "Organizer is required" }),
    organizerUrl: z.string({ message: "Invalid URL" }).optional(),
    seats: z.number().min(1, { message: "At least one seat is required" }),
    tags: z.string().optional(),
    bannerUrl: z.string().url({ message: "Invalid URL" }).optional(),
    description: z.string().min(1, { message: "Description is required" }),
});

type EventFormData = z.infer<typeof eventSchema>;

export default function CreateEvent() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<EventFormData>({
        resolver: zodResolver(eventSchema),
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputTitle = e.target.value;
        setValue("title", inputTitle);
        setValue("slug", generateSlug(inputTitle));
    };

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with hyphens
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars
            .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
            .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
    };

    const onSubmit = async (data: EventFormData) => {
        try{
            const tagsArray = data.tags ? data.tags.split(",").map(tag => tag.trim()) : [];
            const isoDate = new Date(data.date).toISOString() //This was the error🥱
            const eventData = {
                title: data.title,
                slug: data.slug,
                description: data.description,
                date: isoDate,
                time: data.time,
                location: data.location,
                organizer: data.organizer,
                organizerUrl: data.organizerUrl,
                seats: data.seats,
                tags: tagsArray,
                bannerUrl: data.bannerUrl,
            };
            const response = await createEvent(eventData);
            alert('Event created')
        }catch (error) {
            console.log(error)
        }
    };


    return (
        <div className="my-10">
            <Container>
                <div className="max-w-[816px] mx-auto">
                    <h1 className="text-4xl font-bold text-center">Create Event</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-4">
                        <div>
                            <Label htmlFor="title">Event Title</Label>
                            <Input
                                id="title"
                                placeholder="Enter Event Title"
                                {...register("title")}
                                onChange={handleTitleChange}
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="slug">Event Slug</Label>
                            <Input
                                id="slug"
                                readOnly
                                {...register("slug")}
                            />
                            {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="venue">Event Venue</Label>
                            <Input
                                id="venue"
                                placeholder="Enter Event Venue"
                                {...register("location")}
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="date">Event Date</Label>
                                <Input
                                    id="date"
                                    type="datetime-local"
                                    {...register("date")}
                                />
                                {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="time">Event Time</Label>
                                <Input
                                    id="time"
                                    type="time"
                                    {...register("time")}
                                />
                                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="organizer">Organizer Name</Label>
                            <Input
                                id="organizer"
                                placeholder="Enter Organizer Name"
                                {...register("organizer")}
                            />
                            {errors.organizer && <p className="text-red-500 text-sm">{errors.organizer.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="organizerUrl">Organizer URL</Label>
                            <Input
                                id="organizerUrl"
                                placeholder="Enter Organizer URL"
                                {...register("organizerUrl")}
                            />
                            {errors.organizerUrl &&
                                <p className="text-red-500 text-sm">{errors.organizerUrl.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="seats">Available Seats</Label>
                            <Input
                                id="seats"
                                type="number"
                                placeholder="Enter Number of Available Seats"
                                {...register("seats", {valueAsNumber: true})}
                            />
                            {errors.seats && <p className="text-red-500 text-sm">{errors.seats.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="tags">Tags (comma separated)</Label>
                            <Input
                                id="tags"
                                placeholder="Enter Event Tags"
                                {...register("tags")}
                            />
                        </div>
                        <div>
                            <Label htmlFor="bannerUrl">Event Banner URL</Label>
                            <Input
                                id="bannerUrl"
                                placeholder="Event Banner URL Here"
                                {...register("bannerUrl")}
                            />
                            {errors.bannerUrl && <p className="text-red-500 text-sm">{errors.bannerUrl.message}</p>}
                        </div>
                        <h1 className="text-4xl font-bold text-center mt-10">Event Description</h1>
                        <div>
                            <TextArea
                                id="description"
                                placeholder="Enter Event Description"
                                {...register("description")}
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                        </div>
                        <Button type="submit" className="mt-6">
                            Create Event
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
}
