import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);
        const skip = (page - 1) * limit;

        const bookings = await prisma.booking.findMany({
            skip,
            take: limit,
            include: { event: true },
            orderBy: {
                createdAt: 'desc',
            },
        });

        const totalBookings = await prisma.booking.count();
        const totalPages = Math.ceil(totalBookings / limit);

        if (bookings.length === 0) {
            return NextResponse.json({
                message: 'No bookings found',
                pagination: {
                    currentPage: page,
                    totalPages,
                    pageSize: limit,
                    totalBookings,
                },
            }, { status: 404 });
        }

        return NextResponse.json({
            bookings,
            pagination: {
                currentPage: page,
                totalPages,
                pageSize: limit,
                totalBookings,
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { eventId, name, email, seats, phone } = await request.json();

        const event = await prisma.event.findUnique({
            where: { id: eventId },
        });

        if (!event) {
            return NextResponse.json({ error: 'Event not found' }, { status: 404 });
        }

        if (event.seats < seats) {
            return NextResponse.json({ error: 'Not enough seats available' }, { status: 400 });
        }

        const booking = await prisma.booking.create({
            data: {
                eventId,
                name,
                email,
                seats,
                phone,
            },
        });

        await prisma.event.update({
            where: { id: eventId },
            data: { seats: event.seats - seats },
        });

        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}


export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = parseInt(searchParams.get('id') || '', 10);

        if (isNaN(id)) {
            return NextResponse.json({ error: 'Invalid booking ID' }, { status: 400 });
        }

        const deletedBooking = await prisma.booking.delete({
            where: { id },
        });

        return NextResponse.json(deletedBooking, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
    }
}