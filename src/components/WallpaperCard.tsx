import React, { useState } from 'react';
import { Download, Heart } from 'lucide-react';
import { Wallpaper } from '../types/wallpaper';

interface Props {
  wallpaper: Wallpaper;
}

export const WallpaperCard: React.FC<Props> = ({ wallpaper }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(wallpaper.url, '_blank');
  };

  return (
    <div
      className="relative mb-4 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={wallpaper.thumbnail}
        alt={wallpaper.title}
        className="w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-between p-4 transition-opacity duration-200">
          <div className="flex justify-between items-start">
            <div className="text-white">
              <h3 className="font-medium">{wallpaper.title}</h3>
              <p className="text-sm opacity-80">{wallpaper.photographer}</p>
            </div>
            <button className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20">
              <Heart className="h-5 w-5 text-white" />
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-white text-sm">{wallpaper.resolution}</span>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};