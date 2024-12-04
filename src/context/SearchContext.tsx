import React, { createContext, useState, useContext } from 'react';
import { wallpapers } from '../data/wallpapers';
import { Wallpaper } from '../types/wallpaper';

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredWallpapers: Wallpaper[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWallpapers = wallpapers.filter(wallpaper => 
    wallpaper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wallpaper.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredWallpapers }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearch must be used within a SearchProvider');
  return context;
};