import React from 'react';
import { useParams } from 'react-router-dom';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { categories } from '../data/categories';
import { wallpapers } from '../data/wallpapers';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const categoryWallpapers = wallpapers.filter(w => w.category === id);

  if (!category) return <div>Category not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">{category.name}</h1>
        <p className="text-gray-400">Browse our collection of {category.name.toLowerCase()} wallpapers</p>
      </div>
      <WallpaperGrid wallpapers={categoryWallpapers} />
    </div>
  );
};