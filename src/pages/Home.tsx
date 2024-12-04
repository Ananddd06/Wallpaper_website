import React from 'react';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { CategoryGrid } from '../components/CategoryGrid';
import { useSearch } from '../context/SearchContext';
import { wallpapers } from '../data/wallpapers';

export const Home: React.FC = () => {
  const { searchTerm, filteredWallpapers } = useSearch();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {!searchTerm && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Categories</h2>
          <CategoryGrid />
        </section>
      )}

      <section>
        <h2 className="text-3xl font-bold mb-6 text-white">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Featured Wallpapers'}
        </h2>
        <WallpaperGrid wallpapers={searchTerm ? filteredWallpapers : wallpapers} />
      </section>
    </div>
  );
};