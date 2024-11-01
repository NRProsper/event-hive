import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        const event = await prisma.event.findUnique({ where: { slug: params.slug } });
        if (!event) {
            return NextResponse.json({ error: 'Event not found' }, { status: 404 });
        }
        return NextResponse.json(event);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
    }
}



export async function PUT(request: Request, { params }: { params: { slug: string } }) {
    try {
        const data = await request.json();
        const updatedEvent = await prisma.event.update({
            where: { slug: params.slug },
            data,
        });
        return NextResponse.json(updatedEvent);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
    }
}


export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
    try {
        await prisma.event.delete({ where: { slug: params.slug } });
        return NextResponse.json({ message: 'Event deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
    }
}