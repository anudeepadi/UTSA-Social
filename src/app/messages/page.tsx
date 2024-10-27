import { messages } from '@/lib/data';

export default function MessagesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`p-4 rounded-xl cursor-pointer transition-colors ${
                message.unread ? 'bg-orange-50' : 'bg-gray-50'
              } hover:bg-gray-100`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{message.from}</h3>
                  <p className="text-gray-600 mt-1">{message.content}</p>
                </div>
                <span className="text-sm text-gray-500">{message.time}</span>
              </div>
              {message.unread && (
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}