'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-[#ff3811]">404</h1>
        <div className="absolute rotate-12 -mt-16">
          <span className="text-2xl font-semibold inline-block py-1 px-3 bg-white text-[#ff3811] rounded-lg">
            Page Not Found
          </span>
        </div>
        <p className="text-gray-600 mt-8 mb-8 text-lg">
          Oops! The page you are looking for does not exist.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-[#ff3811] text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;