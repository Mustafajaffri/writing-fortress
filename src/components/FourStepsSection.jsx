'use client';

export default function FourStepsSection() {
  const steps = [
    {
      icon: '/icons/headset.svg',
      title: 'Connect With Us',
      description:
        'Start by reaching out to our team for a personalized consultation. We’ll understand your goals, assess your needs, and guide you toward the right creative or technical solution.',
    },
    {
      icon: '/icons/submit.svg',
      title: 'Share Your Requirements',
      description:
        'Provide us with the necessary content or project details. Our experts will review your input to ensure it aligns with your vision and service expectations.',
    },
    {
      icon: '/icons/book.svg',
      title: 'Let Us Bring It to Life',
      description:
        'Our team will get to work transforming your ideas into high-quality, polished results — whether it’s writing, design, development, or publishing support.',
    },
    {
      icon: '/icons/share.svg',
      title: 'Publish & Promote',
      description:
        'Once finalized, we’ll help you launch your project or service confidently. From delivery to promotion, we provide the tools and guidance to help you reach your audience.',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1440] mb-16">
        From Idea to Execution – Four Easy Steps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#f3f3f3] p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-[#0a1440] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6">
              <img src={step.icon} alt={step.title} className="h-10 w-10 invert" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a1440] mb-3">
              {step.title}
            </h3>
            <p className="text-base text-gray-800 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
