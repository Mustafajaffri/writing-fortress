import { notFound } from 'next/navigation';
import Link from 'next/link';

import FourStepsSection from '@/components/FourStepsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


const serviceContent = {
  'article-writing': {
    heading: 'Professional Article Writing',
    subheading: 'We craft informative, engaging, and SEO-optimized articles that enhance your brand authority and captivate your audience across various industries.',
  },
  'audio-book': {
    heading: 'High-Quality Audio Book Services',
    subheading: 'Transform your stories into immersive audio experiences with our professional narrators and sound engineers, ensuring your message resonates.',
  },
  'author-website': {
    heading: 'Author Websites That Inspire',
    subheading: 'We build stunning, responsive websites that showcase your books, engage your readers, and establish a strong online presence for your author brand.',
  },
  'blog-writing': {
    heading: 'Exceptional Blog Writing',
    subheading: 'Our blog writing services deliver fresh, SEO-optimized, and engaging content that boosts your website traffic and builds customer loyalty.',
  },
  'book-cover': {
    heading: 'Eye-Catching Book Cover Designs',
    subheading: 'We create professionally designed book covers that grab attention, convey your story’s essence, and drive more readers to pick up your book.',
  },
  'children-book': {
    heading: "Children's Book Writing",
    subheading: 'Delight young readers with imaginative, educational, and age-appropriate children’s books that spark creativity and foster a love for reading.',
  },
  'e-book-writing': {
    heading: 'Expert E-book Writing',
    subheading: 'We transform your ideas into professionally written and formatted eBooks that expand your reach and authority in the digital publishing space.',
  },
  'editing': {
    heading: 'Professional Editing Services',
    subheading: 'Our editing team ensures your work is polished, coherent, grammatically flawless, and ready to make a lasting impression on your audience.',
  },
  'formating': {
    heading: 'Book Formatting Services',
    subheading: 'We design clean, professional, and platform-specific layouts, ensuring your book looks stunning across Kindle, print, and other formats.',
  },
  'ghostwriting': {
    heading: 'Ghostwriting Excellence',
    subheading: 'Let us bring your ideas to life with high-quality ghostwriting that captures your voice, engages readers, and elevates your story effortlessly.',
  },
  'proofreading': {
    heading: 'Reliable Proofreading',
    subheading: 'Our meticulous proofreading catches every typo, grammar mistake, and formatting error, ensuring your manuscript is publication-ready.',
  },
  'publishing': {
    heading: 'Hassle-Free Publishing',
    subheading: 'From manuscript preparation to final launch, we manage the entire publishing process, helping you reach global audiences with ease.',
  },
  'video-book-trailer': {
    heading: 'Compelling Video Book Trailers',
    subheading: 'We produce dynamic and engaging book trailers that captivate potential readers and effectively market your story through powerful visuals.',
  },
  'web-design-seo': {
    heading: 'SEO-Focused Web Designs',
    subheading: 'Our web designs combine stunning visuals with SEO strategies that enhance your site’s visibility, boost traffic, and increase conversions.',
  },
  'website-content': {
    heading: 'Website Content That Sells',
    subheading: 'We create powerful website content that connects with your audience, communicates your brand value, and drives meaningful engagement.',
  },
};

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = serviceContent[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-start h-[90vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/service-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#001f4d]/80 z-10" />

        <div className="relative z-20 text-white px-6 md:px-16 animate-fadeInUp max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-left animate-slideUp delay-100">
            {service.heading}
          </h1>
          <p className="text-base md:text-xl font-medium mb-8 leading-relaxed text-left animate-slideUp delay-300">
            {service.subheading}
          </p>
          <Link href="/#contact">
            <button className="bg-cyan-500 hover:bg-cyan-600 hover:-translate-y-1 transform transition duration-300 text-white font-bold py-3 px-8 rounded-lg text-base md:text-lg animate-slideUp delay-500">
              Get A Quote
            </button>
          </Link>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-12 flex-wrap">
          <img src="/logos/amazon.png" alt="Amazon Books" className="h-8 object-contain" />
          <img src="/logos/barnes.png" alt="Barnes and Noble" className="h-8 object-contain" />
          <img src="/logos/alibris.png" alt="Alibris" className="h-8 object-contain" />
          <img src="/logos/googlebooks.png" alt="Google Books" className="h-8 object-contain" />
        </div>
      </section>
      {/* About the Service Section */}
<section className="bg-white py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Text Content */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#001f4d]">
        {serviceContent[slug]?.aboutHeading || "Your Story, Our Words – Professional Services!"}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        {serviceContent[slug]?.aboutText || 
          "At Writing Fortress, we transform your ideas into impactful words. Whether you need an article, eBook, blog, or ghostwriting service, our team ensures high-quality content that boosts your credibility and influence. Let us craft content that speaks to your audience and enhances your online presence."
        }
      </p>
      <Link href="/#contact">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-base md:text-lg transition duration-300">
          Book Now
        </button>
      </Link>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <img src="/images/service-about-image.jpg" alt="Service Image" className="rounded-lg shadow-md w-full max-w-md object-cover" />
    </div>

  </div>
    </section>
    <FourStepsSection />
    <ContactSection />
    <Footer />

    </>
    
  );
}

export async function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({ slug }));
}