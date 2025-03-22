import ServiceBanner from "@/app/components/[id]/components/ServiceBanner";
import UpdateBookingForm from "@/components/form/UpdateBookingForm";
import { headers } from "next/headers";
import React from "react";
export const getBookingDetails = async (id) => {
  const res = await fetch(
    `https://car-dotcor-nextjs.vercel.app/api/myBookings/${id}`,
    {
        headers: new Headers(await headers())
    }
  );
  const data = await res.json();
  return data;
};
const UpdateBooking = async ({ params }) => {
  const { id } = await params;
  const booking = await getBookingDetails(id);
  return (
    <div>
      <ServiceBanner />
      <UpdateBookingForm booking={booking}></UpdateBookingForm>
    </div>
  );
};

export default UpdateBooking;
