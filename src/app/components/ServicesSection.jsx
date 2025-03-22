import dbConnect, { collectionName } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const ServicesSection =async () => {
    const serviceCollection = dbConnect(collectionName.SERVICES)
    const services = await serviceCollection.find({}).toArray()
  
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Service Area</h2>
        <p className="text-center text-gray-600 mb-12">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br /> Words Which Don't Look Even Slightly Believable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={service.img}
                alt={service.title}
                height={220}
                width={314}
                className='mx-auto'
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-red-500 font-bold">Price: ${service.price}</span>
                  <Link href={`/components/${service?._id}`} className="text-red-500 hover:text-red-700 transition-colors">
                    →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;