'use client'

import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import React, {useState} from "react";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {createBooking} from "@/utils/api/bookings";
import toast from "react-hot-toast";
import {EventResponse} from "@/utils/types";

const bookingSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
    seats: z.number().min(1, { message: "At least 1 seat must be booked" }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingDialog({event, refetch}: {event: EventResponse, refetch: () => void}) {
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    });
    const onSubmit = async (data: BookingFormData) => {
        try{
            const bookingData = { ...data, eventId: event.id }
            await createBooking(bookingData);
            toast.success("Booking successful!");
            refetch()
            setIsOpen(false);
        }catch (e) {
            toast.error("Booking failed. Please try again.");
        }
    };

    return(
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className="px-10 mt-2 py-[15px] rounded-[5px] flex items-center justify-center gap-3 bg-primary text-white w-full">
                Book Now
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-e-black font-semibold text-xl text-center capitalize">Fill in to book {event.title}</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="Enter your full name"
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            {...register("phone")}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="seats">Number of Seats</Label>
                        <Input
                            id="seats"
                            type="number"
                            min={1}
                            {...register("seats", {valueAsNumber: true})}
                        />
                        {errors.seats && <p className="text-red-500 text-sm">{errors.seats.message}</p>}
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={event.seats === 0}
                    >
                        Confirm Booking
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}