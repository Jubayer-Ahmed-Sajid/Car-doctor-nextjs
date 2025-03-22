"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

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
              priority
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

           
            <LoginForm></LoginForm>
          <SocialLogin></SocialLogin>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                New to the site?{" "}
                <Link href="/register" className="text-red-500 hover:underline">
                 Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
