'use client';

import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Story, Our Words – Professional Wikipedia, eBook, and Ghostwriting Services!
          </h2>
          <p className="text-lg text-gray-800 italic mb-6">
            At Writing Fortress, we transform your ideas into <span className="font-semibold">impactful words</span>. Whether you need a Wikipedia page, an engaging eBook, or expert ghostwriting services, our team ensures high-quality content that boosts your credibility and influence. With a commitment to SEO-optimized writing, compelling storytelling, and professional research, we help you establish authority in your niche. Let us craft content that speaks to your audience and enhances your online presence.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-md text-lg transition">
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[400px]">
        <Image
        src="/images/girl-reading.png"
        alt="Girl Reading"
        fill
        className="object-cover rounded-md"
        />
        </div>

      </div>
    </section>
  );
}
