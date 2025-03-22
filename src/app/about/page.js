import Image from 'next/image';
import { FaTools, FaUserClock, FaAward, FaCarAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <Image
          src="/images/banner/4.jpg"
          alt="About Us Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Car Doctor</h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/about_us/person.jpg"
              width={600}
              height={400}
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
            <Image
              src="/images/about_us/parts.jpg"
              width={300}
              height={200}
              alt="Car Parts"
              className="absolute -bottom-10 -right-10 rounded-lg shadow-xl border-8 border-white"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">We are Qualified & Expert in This Field</h2>
            <p className="text-gray-600 mb-6">
              With over 20 years of experience in automotive services, we have built our reputation on 
              quality workmanship, exceptional customer service, and honest pricing.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <FaTools className="text-[#ff3811] text-xl" />
                <span>Expert Mechanics</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserClock className="text-[#ff3811] text-xl" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward className="text-[#ff3811] text-xl" />
                <span>Best Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCarAlt className="text-[#ff3811] text-xl" />
                <span>100+ Cars Served</span>
              </div>
            </div>
            <button className="bg-[#ff3811] text-white px-8 py-3 rounded-lg hover:bg-[#dd3010] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#ff3811] mb-2">20+</h3>
              <p>Years Experience</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#ff3811] mb-2">1000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#ff3811] mb-2">500+</h3>
              <p>Services Done</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#ff3811] mb-2">50+</h3>
              <p>Expert Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-xl overflow-hidden group">
                <div className="relative h-80">
                  <Image
                    src={'/images/banner/1.jpg'}
                    fill
                    alt={"Team Member"}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-gray-600">Expert Mechanic</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Quality Service</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every service is performed with precision and care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We go above and beyond to meet your needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay up-to-date with the latest automotive technologies and techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;