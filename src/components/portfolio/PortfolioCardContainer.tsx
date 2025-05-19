'use client';

import React, { useState } from 'react';

const categories = [
  'All',
  'Web Development',
  'Design',
  'E-commerce',
  'Branding',
];

const portfolioItems = [
  { id: 1, title: 'Project Alpha', category: 'Web Development', description: 'A modern web app.' },
  { id: 2, title: 'Brand X', category: 'Branding', description: 'Brand identity project.' },
  { id: 3, title: 'ShopNow', category: 'E-commerce', description: 'E-commerce platform.' },
  { id: 4, title: 'Design Sprint', category: 'Design', description: 'UI/UX design for a startup.' },
  { id: 5, title: 'NextGen Site', category: 'Web Development', description: 'Corporate website.' },
];

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
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((cat) => (
        <label key={cat} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={activeCategories.includes(cat)}
            onChange={() => handleChange(cat)}
            className="accent-blue-600"
          />
          <span className="text-gray-800">{cat}</span>
        </label>
      ))}
    </div>
  );
}

function PortfolioCardList({ activeCategories }: { activeCategories: string[] }) {
  const filtered =
    activeCategories.includes('All')
      ? portfolioItems
      : portfolioItems.filter((item) => activeCategories.includes(item.category));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-blue-600 text-sm mb-1">{item.category}</p>
          <p className="text-gray-600">{item.description}</p>
        </div>
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
