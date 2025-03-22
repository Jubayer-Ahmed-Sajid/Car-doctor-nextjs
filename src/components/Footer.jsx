import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <Image
                            src="/logo.svg"
                            alt="Car Doctor"
                            width={150}
                            height={50}
                            className="mb-6"
                        />
                        <p className="mb-4">
                            Your trusted partner in automotive care. Professional service with a personal touch.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-[#ff3811] transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ff3811] transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ff3811] transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ff3811] transition-colors">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>

                    {/* About Links */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">About</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="hover:text-[#ff3811] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-[#ff3811] transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-[#ff3811] transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-[#ff3811] transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="hover:text-[#ff3811] transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-[#ff3811] transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/appointments" className="hover:text-[#ff3811] transition-colors">
                                    Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-[#ff3811] transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>123 Car Street, Auto City</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@cardoctor.com</li>
                            <li>Hours: Mon-Fri: 8am - 6pm</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} Car Doctor. All rights reserved.</p>
                        <div className="mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-[#ff3811] transition-colors mr-6">
                                Privacy Policy
                            </Link>
                            <Link href="/cookies" className="hover:text-[#ff3811] transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;