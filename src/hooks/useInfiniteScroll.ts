import { useState, useEffect } from 'react';
import { Wallpaper } from '../types/wallpaper';

export const useInfiniteScroll = (items: Wallpaper[], itemsPerPage: number) => {
  const [page, setPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState<Wallpaper[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const end = page * itemsPerPage;
    setDisplayedItems(items.slice(0, end));
    setHasMore(end < items.length);
  }, [page, items, itemsPerPage]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return {
    items: displayedItems,
    hasMore,
    loadMore,
  };
};