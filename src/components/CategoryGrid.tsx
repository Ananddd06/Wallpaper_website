import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="relative group overflow-hidden rounded-lg aspect-square"
        >
          <img
            src={category.coverImage}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <span className="text-4xl mb-2">{category.icon}</span>
            <h3 className="text-2xl font-bold text-center">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};