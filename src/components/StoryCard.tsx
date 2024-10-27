'use client';

import { Plus } from 'lucide-react';

interface StoryCardProps {
  user?: string;
  isCreate?: boolean;
  seen?: boolean;
}

export function StoryCard({ user, isCreate = false, seen = false }: StoryCardProps) {
  return (
    <div className="flex-shrink-0 text-center">
      <button className="group">
        <div className={`w-16 h-16 rounded-xl p-0.5 ${
          isCreate ? 'bg-gray-100' :
          seen ? 'bg-gray-200' : 'bg-gradient-to-br from-orange-500 to-orange-600'
        }`}>
          <div className={`w-full h-full rounded-xl flex items-center justify-center 
            ${isCreate ? 'bg-white group-hover:bg-gray-50' : 'bg-white'}`}>
            {isCreate ? (
              <Plus className="text-orange-500" size={24} />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg" />
            )}
          </div>
        </div>
        <span className="text-sm font-medium text-gray-700 mt-1 block">
          {isCreate ? 'Add Story' : user}
        </span>
      </button>
    </div>
  );
}