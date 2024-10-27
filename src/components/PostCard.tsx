'use client';

import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostCardProps {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
    timestamp: string;
    likes: number;
    comments: number;
    image?: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:border-orange-200 transition-colors">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold text-gray-900">{post.author}</span>
                <span className="mx-2">·</span>
                <span className="text-gray-500">{post.timestamp}</span>
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <MoreHorizontal className="text-gray-400" size={20} />
            </button>
          </div>
          
          <p className="text-gray-800 text-lg my-4 leading-relaxed">{post.content}</p>
          
          {post.image && (
            <div className="mt-4 mb-6 rounded-xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors group">
                <Heart size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">{post.comments} comments</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors group">
                <Share2 size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Share</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors group">
              <Bookmark size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}