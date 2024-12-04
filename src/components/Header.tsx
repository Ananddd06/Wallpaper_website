import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Download } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

export const Header: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
          <img src="/wallpapericon.png" alt="WallHub Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">WallHub</span>
          </Link>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search wallpapers..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <Link to="/categories" className="text-white hover:text-gray-300">Categories</Link>
            <Link to="/popular" className="text-white hover:text-gray-300">Popular</Link>
            <Link to="/latest" className="text-white hover:text-gray-300">Latest</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};