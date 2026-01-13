'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#001f4d] text-white pt-12 pb-0 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-6">

        {/* Left Column - Logo & Contact */}
        <div className="space-y-4">
          <Image src="/images/wf-logo.png" alt="WF Logo" width={100} height={100} />
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p>📍 123/B, Route 66, Downtown,<br />Washington, DC 20004, US</p>
          <p>📞 +1 234 567 890</p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Image src="/icons/dmca.png" alt="DMCA" width={60} height={30} />
            <Image src="/icons/stripe.svg" alt="Stripe" width={60} height={30} />
            <Image src="/icons/mastercard.svg" alt="Mastercard" width={60} height={30} />
            <Image src="/icons/visa.svg" alt="Visa" width={60} height={30} />
            <Image src="/icons/amex.png" alt="Amex" width={60} height={30} />
          </div>
        </div>

        {/* Middle Column - Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              "Article Writing", "Audio Book", "Author Website", "Blog Writing", "Book Cover",
              "Children Book", "E-book Writing", "Editing", "Formating", "Ghostwriting",
              "Proofreading", "Publishing", "Video Book Trailer", "Web Design SEO", "Website Content"
            ].map((service, idx) => (
              <Link
                key={idx}
                href="#"
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column - Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Testimonials", "Contact Us", "Terms & Condition", "Privacy Policy"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-black text-center text-xs text-gray-400 py-4">
        Copyright © The Writing Fortress – All Rights Reserved 2025
      </div>
    </footer>
  );
}