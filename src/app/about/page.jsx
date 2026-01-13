import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <><><section
            className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/aboutus-banner.jpg')" }}
        >
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative z-10 text-center px-4">
                <p className="text-md md:text-lg font-semibold text-gray-700 tracking-widest uppercase mb-2">
                    What Makes Us Different
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                    Our Identity
                </h1>
            </div>
        </section><section className="bg-[#001f4d]/80 py-16 px-6 text-center text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-snug text-white">
                        Bringing Creativity And Expertise To Every Page
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-200">
                        The Writing Fortress is a trusted book publishing company offering comprehensive services to bring your vision to life.
                        Our expert ghostwriters for books specialize in delivering high-quality book publishing services tailored to meet your unique needs.
                        From publishing a book to self-publishing services, we guide you through every step of the process, ensuring exceptional results.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-200">
                        Our offerings include manuscript structuring, book formatting, and book publishing consultation, catering to a wide range of genres and industries.
                        Whether you’re exploring self-publishing vs. traditional publishing, looking for book publishers for new authors, or aiming to work with the best self-publishing companies,
                        we are here to help you succeed. If you're ready to publish your book or explore book publishing options,
                        our team of professionals is here to provide personalized support, ensuring your journey to getting a book published is seamless and successful.
                    </p>
                </div>
                {/* Section: Worldwide Impact */}
                <section className="bg-transparent text-white py-16 px-6">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-snug">
                                Turning Your Words Into <br /> Worldwide Impact!
                            </h2>
                            <p className="text-lg leading-relaxed mb-4 text-gray-200">
                                At The Writing Fortress, we prioritize client satisfaction by providing expertise in the book publishing industry,
                                creating opportunities for publishing a manuscript, and offering assistance with book marketing strategies to ensure your book stands out.
                                With a focus on quality and reliability, we make it easier for authors to navigate book publishing platforms and achieve their goals.
                            </p>
                            <p className="text-lg leading-relaxed mb-4 text-gray-200">
                                The potential of the eBook market extends far beyond expectations. Businesses leverage it to attract potential customers,
                                while professional authors use it as a platform to bring groundbreaking ideas to life in the online world.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                As a leading provider of book publishing services, we ensure our expert ghostwriters for books deliver exceptional results tailored to your needs.
                                If you're looking for high-quality ghostwriting services, our skilled writers are dedicated to providing reliable and impactful content that stands out.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="w-full">
                            <img
                                src="/images/worldwide-impact.jpg"
                                alt="Authors Collaborating"
                                className="rounded-md w-full h-auto object-cover shadow-lg" />
                        </div>
                    </div>
                </section>

                {/* Section: On-Time Quality Writing */}
                <section className="bg-transparent text-white py-16 px-6">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <div className="w-full">
                            <img
                                src="/images/quality-writing.jpg"
                                alt="Writing Process"
                                className="rounded-md w-full h-auto object-cover shadow-lg" />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                                Delivering On-Time Quality <br /> Writing Without Compromising
                            </h2>
                            <p className="text-lg text-gray-200 mb-4">
                                The Writing Fortress offers comprehensive book writing services,
                                ensuring that your ideas are transformed into a professionally written and published masterpiece.
                                With expert guidance from our seasoned professionals, we help bring your vision to life with precision and care.
                            </p>

                            <ul className="text-gray-300 text-base list-disc list-inside space-y-3 mb-6">
                                <li><strong>Project Overview:</strong> Skilled proofreaders review your text for any grammatical, syntax, or spelling errors.</li>
                                <li><strong>Content Drafting:</strong> Editors conduct in-depth reviews and align your manuscript with industry standards.</li>
                                <li><strong>Book Formatting:</strong> Your book is formatted to meet layout and structural publishing requirements.</li>
                                <li><strong>Timely Delivery:</strong> We prioritize fast turnarounds without compromising quality.</li>
                            </ul>

                            <p className="text-base text-gray-300 font-medium mb-2">
                                Additional offerings include:
                            </p>
                            <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-200">
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Ghostwriting</li>
                                    <li>Memoir Writing</li>
                                    <li>Biography Writing</li>
                                    <li>Ebook Writers</li>
                                </ul>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Business Book Writing</li>
                                    <li>Non-Fiction</li>
                                    <li>Children’s Book Writing</li>
                                    <li>Fiction Writing</li>
                                </ul>
                            </div>

                            <p className="text-base font-semibold mt-6 text-cyan-300">
                                With a focus on excellence and reliability, The American Ghost Writers offers the perfect blend of professionalism and creativity,
                                helping you succeed in the competitive book publishing industry.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            </><ContactSection />
            <Footer />
            </>
      
    );
  }
  