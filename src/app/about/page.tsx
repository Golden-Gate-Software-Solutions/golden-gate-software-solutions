import Image from 'next/image';
import { MdLightbulb, MdSpeed, MdSecurity } from 'react-icons/md';
import PageHero from '@/components/hero/PageHero';

interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
}

const values: Value[] = [
  {
    title: "Innovation",
    description: "We stay ahead of the curve, embracing cutting-edge technologies to deliver modern solutions that drive business growth.",
    icon: MdLightbulb
  },
  {
    title: "Performance",
    description: "Speed and efficiency are at the core of everything we build, ensuring your applications run smoothly and reliably.",
    icon: MdSpeed
  },
  {
    title: "Security",
    description: "We prioritize the security of your data and applications, implementing industry-leading practices and protocols.",
    icon: MdSecurity
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero heading="About Us" />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto shadow-lg">
              <Image
                src="/owner.jpeg"
                alt="Founder and Lead Engineer, Jackson Galan"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From a Virtual Warehouse to the City by the Bay
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  On November 1st, 2022, Jackson Galan boarded a flight from Chicago's O'Hare to San Francisco International Airport, leaving behind 18 months of software engineering on contract at innovative, international corporations. From developing agricultural contracts management software, to building a sophisticated map of Amazon-scale robot fleets, he had built on a solid foundation as a bootcamp graduate, to call himself a professional software engineer. Now, he decided to become his own boss, and Golden Gate Software Solutions was born.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-50 rounded-xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together to bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </>
  );
}