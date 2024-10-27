'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Bell, Mail, Search, Menu, X, User } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">UTSA</span>
            <span className="text-orange-500 font-bold">Connect</span>
          </Link>
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
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-xl text-orange-500">
            <Home size={24} />
          </Link>
          <Link href="/notifications" className="p-2 hover:bg-gray-100 rounded-xl relative">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
          </Link>
          <Link href="/messages" className="p-2 hover:bg-gray-100 rounded-xl">
            <Mail size={24} />
          </Link>
          <Link href="/profile" className="p-2 hover:bg-gray-100 rounded-xl">
            <User size={24} />
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>
      )}
    </nav>
  );
}