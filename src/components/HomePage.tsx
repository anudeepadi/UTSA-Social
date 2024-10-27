'use client';

import React, { useState } from 'react';
import { 
  Home, Bell, Mail, Search, Menu, X, Filter,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">UTSA</span>
              <span className="text-orange-500 font-bold">Connect</span>
            </div>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search UTSA Connect..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-xl text-orange-500">
              <Home size={24} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl relative">
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl">
              <Mail size={24} />
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-orange-500" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-24 px-4 flex gap-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2">
            {['Academics', 'Student Orgs', 'Events', 'Trending'].map((item, index) => (
              <div key={item} className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl text-gray-800 font-normal">{item}</span>
                  <span className="text-xl text-gray-400">{(index + 1) * 8}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button className="px-4 py-2 rounded-xl bg-orange-500 text-white">
                  All Posts
                </button>
                <button className="px-4 py-2 rounded-xl hover:bg-gray-100">
                  Trending
                </button>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 rounded-xl hover:bg-gray-100"
              >
                <Filter size={20} />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold">Demo Content</h2>
            <p className="text-gray-600 mt-2">This is a simplified version of the UTSA Connect interface.</p>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Trending at UTSA</h2>
            <div className="space-y-4">
              {['RowdyHacks 2024', 'Finals Week', 'Student Organizations'].map((topic, index) => (
                <div key={topic} className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-xl">
                  <TrendingUp className="mt-1 text-orange-500" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{topic}</h3>
                    <span className="text-sm text-gray-500">{1000 - index * 300} posts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}