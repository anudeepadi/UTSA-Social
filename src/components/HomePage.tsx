'use client';

import { posts, stories, trendingTopics, upcomingEvents, notifications } from '@/lib/data';
import Link from 'next/link';
import { 
  TrendingUp, MessageCircle, Bookmark, Hash, Users, Calendar, 
  ChevronRight, Image, LinkIcon, Smile, Bell, Plus
} from 'lucide-react';
import { PostCard } from './PostCard';

export default function HomePage() {
  const unreadNotifications = notifications.filter(n => n.unread).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Top Navigation Icons */}
      <div className="lg:hidden flex justify-end mb-4 space-x-2">
        <Link 
          href="/messages" 
          className="p-2 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-orange-500 transition-colors"
        >
          <MessageCircle size={24} />
        </Link>
        <Link 
          href="/notifications" 
          className="p-2 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-orange-500 transition-colors relative"
        >
          <Bell size={24} />
          {unreadNotifications > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
          )}
        </Link>
      </div>

      <div className="flex gap-6">
        {/* Left Sidebar - Categories */}
        <aside className="hidden lg:block w-72">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden sticky top-20">
            {/* User Quick Profile */}
            <Link href="/profile" className="block">
              <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-150 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">John Doe</h3>
                    <p className="text-sm text-gray-600">Computer Science 25</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Navigation Categories */}
            {[
              { name: 'Academics', count: 8, icon: Bookmark, href: '/academics' },
              { name: 'Student Orgs', count: 16, icon: Users, href: '/organizations' },
              { name: 'Events', count: 24, icon: Calendar, href: '/events' },
              { name: 'Trending', count: 32, icon: Hash, href: '/trending' }
            ].map((category) => (
              <Link 
                key={category.name}
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
                {category.name !== 'Trending' && (
                  <div className="h-px bg-gray-100 mx-4" />
                )}
              </Link>
            ))}

            {/* Quick Links */}
            <div className="p-4 bg-gray-50">
              <div className="flex space-x-2">
                <Link 
                  href="/messages"
                  className="flex-1 py-2 text-center text-gray-600 hover:text-orange-500 font-medium text-sm"
                >
                  Messages
                </Link>
                <Link 
                  href="/notifications"
                  className="flex-1 py-2 text-center text-gray-600 hover:text-orange-500 font-medium text-sm"
                >
                  Notifications
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl space-y-6">
          {/* Stories/Highlights */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
            <div className="flex space-x-4 overflow-x-auto pb-2">
              <div className="flex-shrink-0 text-center">
                <button className="group">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Plus className="text-orange-500" size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 mt-1 block">Add Story</span>
                </button>
              </div>
              {stories.map((story) => (
                <div key={story.id} className="flex-shrink-0 text-center">
                  <button className="group">
                    <div className={`w-16 h-16 rounded-xl p-0.5 ${
                      story.seen ? 'bg-gray-200' : 'bg-gradient-to-br from-orange-500 to-orange-600'
                    }`}>
                      <div className="w-full h-full rounded-xl bg-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-600 mt-1 block">{story.user}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Post Creation */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600" />
              <input
                type="text"
                placeholder="Share something with your community..."
                className="flex-1 bg-gray-50 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-700 font-medium"
              />
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <Image size={20} />
                  <span className="text-sm font-medium">Photo</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <LinkIcon size={20} />
                  <span className="text-sm font-medium">Link</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <Smile size={20} />
                  <span className="text-sm font-medium">Feeling</span>
                </button>
              </div>
              <button className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors">
                Post
              </button>
            </div>
          </div>

          {/* Feed Filters */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-xl font-medium">
                All Posts
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-xl font-medium transition-colors">
                Popular
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-xl font-medium transition-colors">
                Recent
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Trending & Events */}
        <aside className="hidden xl:block w-80">
          <div className="space-y-6 sticky top-20">
            {/* Trending Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Trending at UTSA</h2>
                <TrendingUp className="text-orange-500" size={20} />
              </div>
              <div className="space-y-5">
                {trendingTopics.map((topic, index) => (
                  <div 
                    key={topic.id}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-orange-50 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                        #{index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {topic.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          {topic.posts} posts
                        </p>
                      </div>
                    </div>
                    {index < trendingTopics.length - 1 && (
                      <div className="h-px bg-gray-100 mx-3 my-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Events Preview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                        <Calendar className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {event.date} at {event.time} · {event.attendees} attending
                        </p>
                        <p className="text-sm font-medium text-orange-500 mt-1">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <Link 
                  href="/events"
                  className="block w-full py-2 text-center text-orange-500 font-medium hover:bg-orange-50 rounded-xl transition-colors"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}