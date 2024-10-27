import { notifications } from '@/lib/data';
import { Bell } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 rounded-xl cursor-pointer transition-colors ${
                notification.unread ? 'bg-orange-50' : 'bg-gray-50'
              } hover:bg-gray-100`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-100 rounded-xl">
                  <Bell className="text-orange-500" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{notification.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}