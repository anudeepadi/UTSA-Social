import { notifications } from '@/lib/data';
import { Bell, Calendar, Users, Book, Filter } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Filter size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-xl font-medium">
              All
            </button>
            {['Events', 'Academic', 'Organizations'].map((filter) => (
              <button 
                key={filter}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-100">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`p-6 transition-colors ${
                notification.unread ? 'bg-orange-50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${
                  notification.unread ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  {getNotificationIcon(notification.title)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-900">
                      {notification.title}
                      {notification.unread && (
                        <span className="ml-2 inline-block w-2 h-2 bg-orange-500 rounded-full"/>
                      )}
                    </h3>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-gray-700">{notification.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="p-6 border-t border-gray-200">
          <button className="w-full py-2.5 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

function getNotificationIcon(title: string) {
  if (title.includes('Event')) {
    return <Calendar className="text-orange-600" size={24} />;
  }
  if (title.includes('Study Group')) {
    return <Users className="text-orange-600" size={24} />;
  }
  if (title.includes('Career')) {
    return <Book className="text-orange-600" size={24} />;
  }
  return <Bell className="text-orange-600" size={24} />;
}