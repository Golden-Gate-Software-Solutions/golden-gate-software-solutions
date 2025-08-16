'use client';

import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';

const categories = [
  'All',
  'Web Development',
  'Design',
  'E-commerce',
  'IoT',
  'Mobile'
];

type PortfolioItem = {
  slug: string;
  categories: string[];
  title: string;
  description: string;
  thumbnail?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    slug: "launch-club",
    categories: ["E-commerce", "Design"],
    title: "Launch Club Golf Simulator",
    description:
      "Full site build for MN fitness center that includes payments and scheduling integration.",
    thumbnail: '/content/portfolio/launch-club/logo.png',
  },
  {
    slug: "waldo",
    categories: ["Web Development", "IoT"],
    title: "Waldo",
    description:
      "A 2D map for IoT devices designed for massive storage facility control centers.",
    thumbnail: "/content/portfolio/waldo/robaldo.png",
  },
  {
    slug: "ghx",
    categories: ["Web Development", 'Mobile'],
    title: "Golden Harvest Seed Distribution Console",
    description:
      "A mobile-first dashboard that streamlines agricultural contract management.",
    thumbnail: "/content/portfolio/ghx/ghx-logo.png",
  },
];

// get the portfolioItems from the files in /public/content/portfolio

function CategoryFilter({ activeCategories, setActiveCategories }: { activeCategories: string[]; setActiveCategories: (cats: string[]) => void }) {
  const handleChange = (cat: string) => {
    if (cat === 'All') {
      setActiveCategories(['All']);
    } else {
      let newCats = activeCategories.includes(cat)
        ? activeCategories.filter((c) => c !== cat)
        : [...activeCategories.filter((c) => c !== 'All'), cat];
      if (newCats.length === 0) newCats = ['All'];
      setActiveCategories(newCats);
    }
  };
  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      {categories.map((cat) => {
        const checked = activeCategories.includes(cat);
        return (
          <label
            key={cat}
            className={`cursor-pointer inline-flex items-center px-4 py-2 border rounded-full text-sm font-medium transition-colors duration-150
              ${checked ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-gray-300 text-gray-700 bg-white hover:border-blue-400 hover:text-blue-600'}
            `}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => handleChange(cat)}
              className="sr-only"
            />
            <span>{cat}</span>
            {checked && (
              <svg className="ml-2 w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </label>
        );
      })}
    </div>
  );
}

function PortfolioCardList({ activeCategories }: { activeCategories: string[] }) {
  const filtered =
    activeCategories.includes('All')
      ? portfolioItems
      : portfolioItems.filter((item) => item.categories.some((c) => activeCategories.includes(c)));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((item) => (
        <PortfolioCard
          key={item.slug}
          slug={item.slug}
          title={item.title}
          categories={item.categories}
          description={item.description}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
}

export default function PortfolioCardContainer() {
  const [activeCategories, setActiveCategories] = useState<string[]>(['All']);
  return (
    <section className="w-full max-w-6xl mx-auto py-12">
      <CategoryFilter activeCategories={activeCategories} setActiveCategories={setActiveCategories} />
      <PortfolioCardList activeCategories={activeCategories} />
    </section>
  );
}
