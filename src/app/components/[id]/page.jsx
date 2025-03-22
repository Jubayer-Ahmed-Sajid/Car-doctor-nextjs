import React from "react";
import ServiceBanner from "./components/ServiceBanner";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = async ({ params }) => {
  const {id} = await params;
  const res = await fetch(`https://car-dotcor-nextjs.vercel.app/api/services/${id}`)
  const service = await res.json()

  return (
    <div>
      {/* Banner Section */}
      <ServiceBanner img={service?.img} />

      {/* Service Details Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Image */}
          <div>
            <Image
              height={300}
              width={500}
              src={service?.img || "/placeholder.jpg"}
              alt={service?.title || "Service Image"}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Right Side - Details */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {service?.title || "Service Title"}
            </h2>
            <p className="text-gray-600 mb-4">
              {service?.description ||
                "No description available for this service. Please check back later."}
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-6">
              Price:{" "}
              <span className="text-[#ff3811]">${service?.price || "N/A"}</span>
            </p>
            <Link href={`/checkOut/${service._id}`} className="bg-[#ff3811] text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold mb-4">Why Choose This Service?</h3>
        <p className="text-gray-600 mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>High-quality service with experienced professionals.</li>
          <li>Affordable pricing tailored to your needs.</li>
          <li>Quick and reliable service delivery.</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
