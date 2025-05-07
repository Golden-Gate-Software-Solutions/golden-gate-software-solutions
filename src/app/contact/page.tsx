import ContactForm from '@/components/ContactForm';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8">
          <ContactForm />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MdEmail className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-medium text-gray-900 ml-2">Email</h3>
            </div>
            <a 
              href="mailto:jxn@goldengatesoftwaresolutions.com"
              className="mt-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              jxn@goldengatesoftwaresolutions.com
            </a>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MdPhone className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-medium text-gray-900 ml-2">Phone</h3>
            </div>
            <a 
              href="tel:+14157613680"
              className="mt-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              (415) 761-3680
            </a>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MdLocationOn className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-medium text-gray-900 ml-2">Location</h3>
            </div>
            <p className="mt-2 text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </main>
  );
} 