import { posts, trendingTopics } from '@/lib/data';
import { TrendingUp, MessageCircle, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2 sticky top-20">
            {['Academics', 'Student Orgs', 'Events', 'Trending'].map((item, index) => (
              <div key={item} className="py-4 cursor-pointer hover:bg-gray-50 rounded-xl px-2">
                <div className="flex items-center justify-between">
                  <span className="text-xl text-gray-800 font-normal">{item}</span>
                  <span className="text-xl text-gray-400">{(index + 1) * 8}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          {/* Post Creation */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
            <input
              type="text"
              placeholder="Share something with your community..."
              className="w-full bg-gray-50 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600">
                Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p className="text-sm text-gray-500">
                      Posted by {post.author} · {post.timestamp}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center space-x-4 text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-orange-500">
                    <Heart size={20} />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-orange-500">
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Trending at UTSA</h2>
            <div className="space-y-4">
              {trendingTopics.map((topic) => (
                <div key={topic.id} className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-xl">
                  <TrendingUp className="mt-1 text-orange-500" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{topic.title}</h3>
                    <span className="text-sm text-gray-500">{topic.posts} posts</span>
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