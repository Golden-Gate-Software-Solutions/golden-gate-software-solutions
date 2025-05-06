import Image from 'next/image';
import CTAButton from './CTAButton';

interface HeroProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  backgroundImage: string;
}

export default function Hero({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA,
  backgroundImage 
}: HeroProps) {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href={primaryCTA.href}>
                {primaryCTA.text}
              </CTAButton>
              <CTAButton href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.text}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 