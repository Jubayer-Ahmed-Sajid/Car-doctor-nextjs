export default function CarServiceBanner() {
    return (
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Background Image Container */}
        <div
          className="relative h-[350px] rounded-lg overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner/2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
          {/* Content */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Affordable Price For Car Servicing
            </h2>
            <p className="mt-3 text-gray-300 max-w-md">
              There are many variations of passages available, but the majority
              have suffered alteration in some form.
            </p>
  
            {/* Buttons */}
            <div className="mt-5 flex space-x-3">
              <button className="px-5 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
                Discover More
              </button>
              <button className="px-5 py-2 border border-gray-300 text-white font-semibold rounded-md hover:bg-gray-700">
                Latest Project
              </button>
            </div>
          </div>
  
          {/* Navigation Buttons */}
          <div className="absolute bottom-5 right-5 flex space-x-2">
            <button className="w-10 h-10 flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-80">
              ←
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-full text-white hover:bg-red-600">
              →
            </button>
          </div>
        </div>
      </div>
    );
  }
  