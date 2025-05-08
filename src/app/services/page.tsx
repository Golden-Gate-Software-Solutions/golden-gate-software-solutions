import { MdWeb, MdCode, MdSpeed, MdAutorenew, MdSecurity, MdSupport } from 'react-icons/md';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "Custom Web Development",
    description: "Modern, responsive websites built with the latest technologies to deliver exceptional user experiences.",
    icon: MdWeb
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end solutions that seamlessly integrate front-end interfaces with robust back-end systems.",
    icon: MdCode
  },
  {
    title: "Performance Optimization",
    description: "Speed up your existing applications and ensure they run smoothly across all devices.",
    icon: MdSpeed
  },
  {
    title: "Application Maintenance",
    description: "Regular updates and maintenance to keep your applications secure and running efficiently.",
    icon: MdAutorenew
  },
  {
    title: "Security Implementation",
    description: "Implement best-practice security measures to protect your applications and user data.",
    icon: MdSecurity
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and rapid response to keep your business running smoothly.",
    icon: MdSupport
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development and software solutions to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Ready to start your next project?
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
  );
}