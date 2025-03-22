import Image from "next/image";
import React from "react";
import "../../../globals.css"
const ServiceBanner = () => {
  return (
    <div>
      <figure className="w-full flex my-4 justify-center relative">
        <Image
          src={"/images/checkout/checkout.png"}
          width={1137}
          height={300}
         
        ></Image>
        <div className="border-2 overlay h-[300px] absolute w-[1137px] top-0 border-red-500">
            <h2 className="text-white font-bold text-2xl ps-16 flex h-full items-center">Service Details</h2>
            <button className="bg-[#ff3811] absolute p-4 rounded-t-xl right-6/13 text-white bottom-0 mx-auto">Service Details</button>
        </div>

      </figure>
    </div>
  );
};

export default ServiceBanner;
