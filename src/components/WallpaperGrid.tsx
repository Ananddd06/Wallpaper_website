import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { WallpaperCard } from './WallpaperCard';
import { Wallpaper } from '../types/wallpaper';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  wallpapers: Wallpaper[];
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export const WallpaperGrid: React.FC<Props> = ({ wallpapers, onLoadMore, hasMore = false }) => {
  const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  return (
    <InfiniteScroll
      dataLength={wallpapers.length}
      next={onLoadMore || (() => {})}
      hasMore={hasMore}
      loader={<div className="text-white text-center py-4">Loading more wallpapers...</div>}
      endMessage={
        <div className="text-gray-400 text-center py-4">
          No more wallpapers to load.
        </div>
      }
    >
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {wallpapers.map((wallpaper) => (
          <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </Masonry>
    </InfiniteScroll>
  );
};