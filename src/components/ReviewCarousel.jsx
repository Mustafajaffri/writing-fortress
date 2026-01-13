'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function ReviewCarousel() {
  const timerRef = useRef(null);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [instanceRef]);

  const reviews = [
    {
      stars: 5,
      name: 'Laura Miller',
      image: '/avatars/avatar.jpg',
      text: 'We partnered with Writing Fortress after Joseph reached out to us, proposing article writing for better SEO. To scale up our content production and boost our SEO with 100+ articles over six months. Their writing team quickly understood our band voice and followed our briefs with precision. On the rare occasion revisions were needed, it was usually because we hadn’t provided enough direction upfront. Communication was smooth, and their customer support has been outstanding throughout.',
    },
    {
      stars: 5,
      name: 'Tim Barber',
      image: '/avatars/avatar.jpg',
      text: 'Writing Fortress has been a solid partner in growing our online presence. Whether it’s writing engaging blogs, handling social content, or picking visuals that match our brand, they just get it. The team is responsive, flexible, and easy to collaborate with and the content always hits the mark. I like how i was reached through a cold call and was very hesitant to talk but very satisfied and happy to have come across them.',
    },
    {
      stars: 5,
      name: 'Peter White',
      image: '/avatars/avatar.jpg',
      text: 'I am glad I hired the team for my website content writing. After working with them for one of site, I hired them for all my writing needs. The team was very professional, comfortable to work with and always available whatever I needed advise or immediate delivery for something. I surely recommend their services while I am still working with them.',
    },
    {
      stars: 5,
      name: 'Veganz',
      image: '/avatars/avatar.jpg',
      text: 'Our company has been striving to establish a presence on Wikipedia for quite some time, and I was entrusted with making it happen. The team not only successfully got us published but also assisted in revising the draft and provided exceptional support throughout the process. A special thanks to Steve for his efficient project management and dedication to ensuring everything went smoothly.',
    },
    {
      stars: 5,
      name: 'Nihal Kularatna',
      image: '/avatars/avatar.jpg',
      text: 'Almost 18 months back, I was suddenly approached by Henry Scott indicating me that I have exceeded the requirements for a Wikipedia page for myself and my contributions. With a few phone calls and on-line meetings Henry created a very nice starting version on Wikipedia and it is now published. Unless he did the homework on me and my work, I would have never thought of a Wikipedia page on my career. Therefore I recommend him and Writing Fortress as an excellent editor and a moderator.',
    },
    {
      stars: 5,
      name: 'Benjamin Moore',
      image: '/avatars/avatar.jpg',
      text: 'As a PR manager, I was tasked with getting one of our high profile clients published on Wikipedia. This team not only helped us achieve that goal but also went above and beyond by assisting in securing independent articles to strengthen the client’s online credibility. They provided invaluable support in drafting and revising the content to align with Wikipedia’s guidelines. Their professionalism and commitment to delivering results were impressive. I couldn’t recommend their services more highly.',
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/testimonial-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <a
        href="https://www.trustpilot.com/review/writingfortress.com"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Image
        src="/trustpilot.jpg"
        alt="Trustpilot"
        width={200}
        height={60}
        className="mx-auto mb-4 hover:opacity-80 transition"
        />
        </a>

        <p className="text-xl md:text-2xl mb-10">
          Our clients trust us with their dreams and we turn them into a solid reality. Hear it from our clients!
        </p>

        {/* Navigation + Slider */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white text-[#0a1440] p-3 rounded-md shadow-md"
            >
            <img
            src="/icons/arrow-forward-simple.svg"
            alt="Previous"
            className="h-5 w-5 rotate-180"
            />
            </button>


          {/* Slider */}
          <div ref={sliderRef} className="keen-slider flex-1">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white text-black p-6 rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                <p className="italic text-base mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-medium text-[#0a1440]">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white text-[#0a1440] p-3 rounded-md shadow-md"
            >
        <img
        src="/icons/arrow-forward-simple.svg"
        alt="Next"
        className="h-5 w-5"
        />
        </button>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="bg-white text-[#0a1440] font-bold px-6 py-3 rounded-md shadow-md text-lg">
            Write a Review and get 15% OFF on all Services
          </button>
        </div>
      </div>
    </section>
  );
}
