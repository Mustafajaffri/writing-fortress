'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const services = [
    "Article Writing", "Audio Book", "Author Website", "Blog Writing", "Book Cover",
    "Children Book", "E-book Writing", "Editing", "Formating", "Ghostwriting",
    "Proofreading", "Publishing", "Video Book Trailer", "Web Design SEO", "Website Content"
  ];

  return (
    <nav className="bg-[#001f4d] text-white py-4 px-6 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/wf-logo.png" alt="WF Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold tracking-wide items-center">
          <Link href="/" className="hover:text-cyan-400">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="hover:text-cyan-400 flex items-center space-x-1"
            >
              <span>Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>

            {isServicesOpen && (
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute top-full left-0 bg-white text-black w-[600px] p-4 rounded-md shadow-lg grid grid-cols-3 gap-4 z-50"
              >
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                    className="hover:text-cyan-500 flex items-center space-x-2"
                  >
                    <span>•</span>
                    <span>{service}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-cyan-400">About Us</Link>
          <Link href="/#contact" className="hover:text-cyan-400">Contact Us</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/#contact"
          className="hidden md:flex ml-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md font-bold transition"
        >
          Get Free Consultations →
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={!isMobileOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3 text-sm font-semibold">
          <Link href="/" className="block hover:text-cyan-400">Home</Link>
          <details className="group">
            <summary className="cursor-pointer hover:text-cyan-400">Services</summary>
            <div className="pl-4 mt-2 flex flex-col space-y-2">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                  className="text-white hover:text-cyan-400"
                >
                  {service}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/about" className="block hover:text-cyan-400">About Us</Link>
          <Link href="/#contact" className="block hover:text-cyan-400">Contact Us</Link>
          <Link
            href="/#contact"
            className="block mt-4 bg-cyan-500 hover:bg-cyan-600 text-white text-center py-2 rounded-md font-bold"
          >
            Get Free Consultations →
          </Link>
        </div>
      )}
    </nav>
  );
}
