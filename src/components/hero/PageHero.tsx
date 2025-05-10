import Image from 'next/image';
import React from 'react';

interface PageHeroProps {
  heading: string;
  imageSrc?: string;
  imageAlt?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ heading, imageSrc, imageAlt }) => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt || heading}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black" />
      )}
      <div className="relative z-10 w-full flex justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg px-4">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default PageHero;
