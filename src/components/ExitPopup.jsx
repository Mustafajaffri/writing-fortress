'use client';

import { useEffect, useState } from 'react';

export default function ExitPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 4000); // Show after 4s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-md max-w-4xl w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
          onClick={() => setShow(false)}
        >
          &times;
        </button>

        {/* Content */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Don’t Leave Yet, <span className="text-red-600 italic">Wait!</span>
        </h2>
        <h3 className="text-center text-red-700 text-2xl font-medium mb-6">
          Save Further <span className="bg-yellow-300 px-2 py-1 font-bold">30% off</span> Coupon, Use Anytime
        </h3>
        <p className="text-center text-gray-700 mb-6">
          Enter your details to have our offer saved and sent straight to your inbox
        </p>

      <form
        action="https://formspree.io/f/xyzwlynj"
        method="POST"
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            className="border p-3 rounded w-full text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className="border p-3 rounded w-full text-black"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone No. *"
            required
            className="border p-3 rounded w-full text-black"
          />
        </div>

        <select
          name="service"
          required
          className="border p-3 rounded w-full text-gray-700"
          defaultValue=""
        >
          <option value="" disabled>Select a service *</option>
          <option>Article Writing</option>
          <option>Audio Book</option>
          <option>Author Website</option>
          <option>Blog Writing</option>
          <option>Book Cover</option>
          <option>Children Book</option>
          <option>E-book Writing</option>
          <option>Editing</option>
          <option>Formating</option>
          <option>Ghostwriting</option>
          <option>Proofreading</option>
          <option>Publishing</option>
          <option>Video Book Trailer</option>
          <option>Web Design SEO</option>
          <option>Website Content</option>
        </select>

        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white py-3 px-6 font-bold rounded shadow-md border-b-4 border-yellow-400"
        >
          Submit Your Request
        </button>
      </form>

      </div>
    </div>
  );
}
