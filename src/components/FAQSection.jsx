'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What Services Does A Book Publishing Company In The USA Typically Offer?',
      answer:
        'A book publishing company in the USA typically serves authors in the USA with a wide range of services that include book writing, book formatting, self-publishing, as well as book marketing. Some publishing agencies might offer you extensive support like blog writing services, author web design, and more.',
    },
    {
      question: 'How Long Does The Book Publishing Process Usually Take With A Publishing Company In The USA?',
      answer:
        'It takes around 2–4 days to get on with your publishing process and additionally, it will take 2 days for the platform to make your book available for the readers globally.',
    },
    {
      question:
        'Can I Choose The Book Cover Design And Layout For My Book When Working With A Publishing Company In The USA?',
      answer:
        'Yes, many publishing companies in the USA allow authors to have input on the book cover design and layout.',
    },
    {
      question:
        'Do Book Publishing Companies In The USA Provide Marketing And Promotion Services For Authors?',
      answer:
        'Yes, many book publishing companies in the USA offer marketing and promotion services to help authors reach their target audience and increase book sales.',
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* angled white cut at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Heading */}
        <div>
          <p className="uppercase tracking-widest text-gray-400 mb-2">
            Your Questions Answered
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#e5e5e5] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right - Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left text-sm md:text-base font-medium transition-all duration-200 ${
                    activeIndex === index
                      ? 'text-[#58c7f3]'
                      : 'text-white hover:text-[#58c7f3]'
                  }`}                  
              >
                {faq.question}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <hr className="mt-4 border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
