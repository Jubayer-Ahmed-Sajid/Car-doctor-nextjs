import ServiceBanner from "@/app/components/[id]/components/ServiceBanner";
import DeleteBookings from "@/app/myBookings/components/DeleteBookings";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

/**
 * @function BookingsTable
 * @description A table component for displaying bookings
 * @param {Object} props Component props
 * @param {Array} props.bookings An array of booking objects
 * @returns {ReactElement} The rendered table
 */
const BookingsTable = ({ bookings }) => {
  return (
    <div className="container mx-auto p-6">
      <ServiceBanner />
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                Image
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                Price
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                Edit
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-6">
                  {/* Service Image */}
                  <img
                    src={booking.serviceImage}
                    alt={booking.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {/* Service Title */}
                  {booking.serviceTitle}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {/* Service Price */}${booking.dueAmount}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {/* Service Date */}
                  {booking.date}
                </td>
                <td className="py-4 px-6">
                  {/* Service Status */}
                  <span className="px-3 py-1 text-sm text-white bg-[#ff3811] rounded-full">
                    {booking.status || "pending"}
                  </span>
                </td>
                <td className="py-4 px-6">
                  {/* Edit button */}
                  <button className="text-blue-500 btn bg-transparent shadow-none border-none hover:text-blue-700 transition-colors duration-200">
                    <Link href={`/myBookings/${booking._id}`} passHref>
                      <FaEdit className="text-xl  transform hover:scale-110 transition-transform duration-200" />
                    </Link>
                  </button>
                </td>
                <td className="py-4 px-6">
                  {/* Delete button */}
                  <button className="text-red-500 btn bg-transparent shadow-none border-none hover:text-red-700 transition-colors duration-200">
                    <DeleteBookings id={booking._id} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsTable;
