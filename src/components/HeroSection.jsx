'use client';

import Link from "next/link";

export default function HeroSection() {
    return (
      <>
        <section className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-op.mp4" type="video/mp4" />
          </video>
  
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#001f4d]/80 z-10" />
  
          {/* Content */}
          <div className="relative z-20 flex flex-col items-start justify-center text-white h-full px-6 md:px-20 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get Professional Book Publishing Services
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
            A one-stop reliable writing solution company; known for its exemplary ghostwriting services and fulfills customer requirements with various methodologies. We have a team of professional ghostwriters who can enable you to take your concepts to fruition and state your case in eloquent words.
            </p>
            <Link href="/#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-md text-lg transition">
            Get a Quote
            </Link>
          </div>
        </section>
  
        {/* Partner Logos (OUTSIDE section) */}
        <div className="bg-white py-16 px-6 flex flex-wrap justify-center gap-10 md:gap-20">
          <img src="/logos/amazon.png" alt="Amazon Books" className="h-6 md:h-8" />
          <img src="/logos/barnes.png" alt="Barnes & Noble" className="h-6 md:h-8" />
          <img src="/logos/alibris.png" alt="Alibris" className="h-6 md:h-8" />
          <img src="/logos/googlebooks.png" alt="Google Books" className="h-6 md:h-8" />
        </div>
      </>
    );
  }
  