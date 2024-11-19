// src/components/HomePage.tsx
'use client';

import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { 
  TrendingUp, MessageCircle, Bell, Hash, Users, Calendar, 
  ChevronRight, Plus, Search, LogIn, LogOut
} from 'lucide-react';
import PostCard from './PostCard';
import PostForm from './PostForm';
import { Post } from '@/lib/types';
import { notifications } from '@/lib/data';

interface HomePageProps {
  initialPosts: Post[];
  initialTrendingTopics: any[];
  initialStories: any[];
  initialEvents: any[];
}

export default function HomePage({ 
  initialPosts,
  initialTrendingTopics,
  initialStories,
  initialEvents 
}: HomePageProps) {
  const { user, isLoading: isUserLoading } = useUser();
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const unreadNotifications = notifications.filter(n => n.unread).length;

  const handleNewPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
    setIsCreatingPost(false);
  };

  const handleUpdatePost = (updatedPost: Post) => {
    setPosts(posts.map(post => 
      post._id === updatedPost._id ? updatedPost : post
    ));
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  const categories = [
    { id: 'academics', name: 'Academics', count: 8, icon: Hash, href: '/academics' },
    { id: 'orgs', name: 'Student Orgs', count: 16, icon: Users, href: '/organizations' },
    { id: 'events', name: 'Events', count: 24, icon: Calendar, href: '/events' },
    { id: 'trending', name: 'Trending', count: 32, icon: TrendingUp, href: '/trending' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Mobile Navigation Icons */}
      <div className="lg:hidden flex justify-end mb-4 space-x-2">
        {user ? (
          <>
            <Link href="/messages" className="p-2 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-orange-500 transition-colors">
              <MessageCircle size={24} />
            </Link>
            <Link href="/notifications" className="p-2 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-orange-500 transition-colors relative">
              <Bell size={24} />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
              )}
            </Link>
          </>
        ) : (
          <Link 
            href="/api/auth/login"
            className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
          >
            <LogIn size={20} />
            <span>Sign In</span>
          </Link>
        )}
      </div>

      <div className="flex gap-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-72">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden sticky top-20">
            {user ? (
              <Link href="/profile" className="block">
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-150 transition-colors">
                  <div className="flex items-center space-x-3">
                    {user.picture ? (
                      <img 
                        src={user.picture} 
                        alt={user.name || 'Profile'} 
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600" />
                    )}
                    <div>
                      <h3 className="font-bold text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-4 border-b border-gray-100">
                <Link 
                  href="/api/auth/login"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
                >
                  <LogIn size={20} />
                  <span>Sign In</span>
                </Link>
              </div>
            )}

            {categories.map((category) => (
              <Link 
                key={category.id}
                href={category.href}
                className="block group cursor-pointer transition-all hover:bg-orange-50"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <category.icon className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <span className="text-base font-bold text-gray-900">{category.name}</span>
                        <span className="text-sm text-gray-500 ml-1">({category.count})</span>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-orange-500 transition-colors" size={20} />
                  </div>
                </div>
              </Link>
            ))}

            {user && (
              <Link 
                href="/api/auth/logout"
                className="block p-4 border-t border-gray-100"
              >
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors w-full">
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </Link>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl space-y-8">
          {/* Post Creation */}
          {user ? (
            isCreatingPost ? (
              <PostForm 
                onSubmit={handleNewPost}
                onCancel={() => setIsCreatingPost(false)}
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <button
                  onClick={() => setIsCreatingPost(true)}
                  className="flex items-center space-x-3 w-full bg-gray-50 rounded-xl py-3 px-4 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  {user.picture ? (
                    <img 
                      src={user.picture} 
                      alt={user.name || 'Profile'} 
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600" />
                  )}
                  <span className="text-gray-500">Share something with your community...</span>
                </button>
              </div>
            )
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Join the Conversation</h3>
              <p className="text-gray-600 mb-4">Sign in to share your thoughts and connect with others.</p>
              <Link 
                href="/api/auth/login"
                className="inline-flex items-center space-x-2 px-6 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                <LogIn size={20} />
                <span>Sign In</span>
              </Link>
            </div>
          )}

          {/* Posts List */}
          {posts.map((post) => (
            <PostCard 
              key={post._id} 
              post={post}
              onDelete={handleDeletePost}
              onUpdate={handleUpdatePost}
            />
          ))}

          {posts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No posts yet. Be the first to share something!
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80">
          <div className="space-y-6 sticky top-20">
            {/* ... Rest of the right sidebar content ... */}
          </div>
        </aside>
      </div>
    </div>
  );
}