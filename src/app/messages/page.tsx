'use client';

import { messages } from '@/lib/data';
import { Search, Users, Settings } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-h-[600px]">
        <div className="grid grid-cols-12">
          {/* Left Sidebar - Conversations */}
          <div className="col-span-4 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-gray-900">Messages</h1>
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Settings size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full bg-gray-50 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`p-4 cursor-pointer transition-colors ${
                    message.unread ? 'bg-orange-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
                      <Users size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900 truncate">{message.from}</h3>
                        <span className="text-sm text-gray-500 flex-shrink-0">{message.time}</span>
                      </div>
                      <p className={`text-gray-600 truncate ${message.unread ? 'font-medium' : ''}`}>
                        {message.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Message Content */}
          <div className="col-span-8 p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your Messages</h2>
              <p className="text-gray-600">Select a conversation to start messaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}