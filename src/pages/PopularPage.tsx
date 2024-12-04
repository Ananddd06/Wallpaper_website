import React from 'react';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { wallpapers } from '../data/wallpapers';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const PopularPage: React.FC = () => {
  const { items: popularWallpapers, hasMore, loadMore } = useInfiniteScroll(
    wallpapers.sort((a, b) => b.downloads - a.downloads),
    12
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Popular Wallpapers</h1>
        <p className="text-gray-400">Most downloaded wallpapers from our collection</p>
      </div>
      <WallpaperGrid wallpapers={popularWallpapers} onLoadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};