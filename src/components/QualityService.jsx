'use client';

import { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const cards = [
  {
    title: 'Quality Content',
    description:
      'Enable a luxury network of writers who have proven themselves in a wide array of businesses and fields.',
    icon: '/icons/quality.png',
  },
  {
    title: 'Preserve Trust',
    description:
      "EBooks assist you in maintaining your audience's trust. We know how to put together books that are both easy to track and intriguing to recite.",
    icon: '/icons/trust.png',
  },
  {
    title: 'Competent Writers',
    description:
      'Pragmatic eBooks are both well-written and insightful. We make it simple to find talented authors who are experts in your industry.',
    icon: '/icons/writing.png',
  },
  {
    title: 'On-Time Delivery',
    description:
      'We make certain that our clients receive high-quality results on time. This enables us to provide unlimited revisions within the timeframe specified.',
    icon: '/icons/stopwatch.png',
  },
  {
    title: 'Preparation Strategy',
    description:
      'Your eBook deserves a valuable beginning. Let your readers know what they will learn most from your services.',
    icon: '/icons/strategy.png',
  },
  {
    title: 'Refined Publishing',
    description:
      'We provide assistance with eBook publication for increased reach, exposure, and engagement.',
    icon: '/icons/publishing.png',
  },
  {
    title: 'Captivating Content',
    description:
      'From introduction to ending, our ghostwriters ensure your story remains engaging.',
    icon: '/icons/content.png',
  },
];

export default function CardCarouselSection() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 16 },
    mode: 'free-snap',
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.25, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section
      className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/quality.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
            Ghostwriting Services to
            <br />
            <span className="text-white">Meet All Your Book Writing Needs</span>
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <Image
              src="/icons/arrow-forward-simple.svg"
              alt="left"
              width={24}
              height={24}
              className="rotate-180"
            />
          </button>

          <div ref={sliderRef} className="keen-slider">
            {cards.map((card, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-xl p-6 shadow-md w-[280px] h-[360px] flex flex-col items-center justify-center text-center"
              >
                <div className="mb-5">
                  <Image src={card.icon} alt={card.title} width={60} height={60} />
                </div>
                <h4 className="font-semibold text-xl mb-3 text-[#19243b]">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <Image
              src="/icons/arrow-forward-simple.svg"
              alt="right"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
