import {z} from "zod";

export const eventSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255, 'Title too long'),
    slug: z.string().optional(),
    description: z.string().min(1, 'Description is required'),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), { message: 'Invalid date format' }),
    time: z.string().optional(),
    location: z.string().optional(),
    organizer: z.string().optional(),
    organizerUrl: z.string().url().optional(),
    seats: z.number().int().positive(),
    tags: z.array(z.string()).optional(),
    bannerUrl: z.string().url().optional(),
});