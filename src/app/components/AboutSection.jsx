import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Images */}
        <div className="flex-1 relative">
          <Image
            src={'/images/about_us/person.jpg'}
            width={460}
            height={473}
            alt="Person"
            className="rounded-lg shadow-md"
          />
          <Image
            src={'/images/about_us/parts.jpg'}
            height={337}
            width={300}
            alt="Parts"
            className="rounded-lg shadow-md absolute top-6/8 left-3/4 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1">
          <h3 className="text-red-500 font-bold text-lg mb-2">About Us</h3>
          <h2 className="text-4xl font-bold mb-4">
            We are qualified <br /> & of experience in this field
          </h2>
          <p className="text-gray-600 mb-4">
            There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have
            Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't
            Look Even Slightly Believable.
          </p>
          <p className="text-gray-600 mb-6">
            The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
            Words Which Don't Look Even Slightly Believable.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;