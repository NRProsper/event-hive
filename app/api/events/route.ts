import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {eventSchema} from "@/app/api/events/schema";
import {z} from "zod";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);
        const skip = (page - 1) * limit;

        const events = await prisma.event.findMany({
            skip,
            take: limit,
            orderBy: {
                date: 'asc',
            },
        });

        const totalEvents = await prisma.event.count();
        const totalPages = Math.ceil(totalEvents / limit);


        if (events.length === 0) {
            return NextResponse.json({
                message: 'No events found',
                pagination: {
                    currentPage: page,
                    totalPages,
                    pageSize: limit,
                    totalEvents,
                },
            }, { status: 404 });
        }

        return NextResponse.json({
            events,
            pagination: {
                currentPage: page,
                totalPages,
                pageSize: limit,
                totalEvents,
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try{
        const data = await request.json();
        console.log(data)
        const validatedData = eventSchema.parse(data);
        const newEvent = await prisma.event.create({data: validatedData});
        return NextResponse.json(newEvent, { status: 201 });
    }catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
    }
}