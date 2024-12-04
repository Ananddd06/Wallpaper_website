import React from 'react';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { wallpapers } from '../data/wallpapers';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const LatestPage: React.FC = () => {
  const { items: latestWallpapers, hasMore, loadMore } = useInfiniteScroll(
    wallpapers.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()),
    12
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Latest Wallpapers</h1>
        <p className="text-gray-400">Fresh and new wallpapers added to our collection</p>
      </div>
      <WallpaperGrid wallpapers={latestWallpapers} onLoadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};