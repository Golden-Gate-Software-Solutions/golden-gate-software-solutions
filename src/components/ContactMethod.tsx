import React from 'react';

interface ContactMethodProps {
  icon: React.ReactNode;
  text: string;
  contactType: 'email' | 'phone' | 'location';
  className?: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, text, contactType, className }) => {
  let href = '';
  let target = undefined;
  let rel = undefined;

  if (contactType === 'email') {
    href = `mailto:${text}`;
  } else if (contactType === 'phone') {
    href = `tel:${text.replace(/[^\d+]/g, '')}`;
  } else if (contactType === 'location') {
    href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`;
    target = '_blank';
    rel = 'noopener noreferrer';
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="flex items-center mx-auto gap-2 hover:text-blue-700 transition-colors group"
    >
      {icon}
      <span className={className ? `${className} text-gray-600 group-hover:underline` : 'text-gray-600 group-hover:underline'}>{text}</span>
    </a>
  );
};

export default ContactMethod;
