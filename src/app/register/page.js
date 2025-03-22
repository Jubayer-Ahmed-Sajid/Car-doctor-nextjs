"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import RegisterForm from "./components/RegisterForm";

export default function SignUpPage() {
 

  return (
    <div className="min-h-screen bg-white">
       

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Side Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/login/login.svg"
              alt="Security illustration"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

           
            <RegisterForm></RegisterForm>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or Sign Up with</p>
              <div className="flex justify-center space-x-4 mt-3">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#1976D2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-red-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
