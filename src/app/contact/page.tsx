import React from 'react';
import PageHero from '@/components/hero/PageHero';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import ContactMethod from '@/components/ContactMethod';
import { content } from '@/content';

type ContactMethodType = 'email' | 'phone' | 'location';

const iconMap: Record<ContactMethodType, React.ReactNode> = {
  email: <MdEmail className="w-6 h-6 text-blue-600" />,
  phone: <MdPhone className="w-6 h-6 text-blue-600" />,
  location: <MdLocationOn className="w-6 h-6 text-blue-600" />,
};

export default function ContactPage() {
  
  const { heading, methods } = content.contact;

  return (
    <>
      <PageHero heading="Contact Us" />
      <main className="min-h-screen flex flex-col items-center pt-16">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          {heading}
        </h2>
        {/* Contact Methods List */}
        <div className="flex flex-col gap-6 w-full max-w-md items-start text-left px-8 py-6 bg-white rounded-lg shadow">
          {methods.map((method, idx) => (
            <ContactMethod
              key={idx}
              icon={iconMap[method.type as ContactMethodType]}
              text={method.text}
              contactType={method.type as ContactMethodType}
              // For email, pass a prop to enable truncation
              {...(method.type === 'email' && { className: 'truncate overflow-hidden whitespace-nowrap max-w-[180px]' })}
            />
          ))}
        </div>
      </main>
    </>
  );
}