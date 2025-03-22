"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";

const DeleteBookings = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      toast.loading("Deleting booking...");
      const res = await fetch(`https://car-dotcor-nextjs.vercel.app/api/services/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Failed to delete booking: ${res.status}`);
      }

      const data = await res.json();

      if (data) {
        toast.dismiss()
        toast.success("Booking deleted successfully");
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      toast.dismiss();
      toast.error("Failed to delete booking. Please try again.");
    }
  };
  return (
    <FaTrashAlt
      onClick={() => handleDelete(id)}
      className="text-xl transform hover:scale-110 transition-transform duration-200"
    />
  );
};

export default DeleteBookings;
