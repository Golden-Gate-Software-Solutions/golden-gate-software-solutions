import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  categories: string[];
  description: string;
  thumbnail?: string;
  slug: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, categories, description, thumbnail, slug }) => (
  <Link href={`/portfolio/${slug}`} className="block group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
    <div className="bg-white rounded-lg shadow p-6 flex flex-col transition-transform duration-150 group-hover:scale-[1.03] group-hover:shadow-lg">
      {thumbnail && (
        <div className="relative w-full h-40 rounded mb-4 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title + ' thumbnail'}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
      <p className="text-blue-600 text-sm mb-1">{categories.join(', ')}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

export default PortfolioCard;
