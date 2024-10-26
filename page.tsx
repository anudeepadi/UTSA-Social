'use client';

import { useState } from 'react';
import { 
  Home, Bell, Mail, Users, MessageCircle, Heart, Share2,
  Image, Calendar, MapPin, TrendingUp, Book, Search,
  Menu, X, Filter, Bookmark, Hash
} from 'lucide-react';

// Extended interfaces with all required props
interface NavButtonProps {
  icon: React.ReactNode;
  text?: string;
  active?: boolean;
  hasNotification?: boolean;
  onClick?: () => void;
}

interface CategoryLinkProps {
  icon: React.ReactNode;
  text: string;
  count: string;
}

interface PostButtonProps {
  icon: React.ReactNode;
}

interface Post {
  id: number;
  author: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  tags: string[];
  isBookmarked?: boolean;
  department?: string;
}

interface PostCardProps {
  post: Post;
}

interface TrendingItemProps {
  icon: React.ReactNode;
  title: string;
  posts: string;
}

// Component Definitions
function NavButton({ icon, text, active = false, hasNotification = false, onClick }: NavButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`relative p-2 rounded-xl transition-colors ${
        active ? 'text-[#E95420]' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {icon}
      {text && <span className="ml-2">{text}</span>}
      {hasNotification && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-[#E95420] rounded-full" />
      )}
    </button>
  );
}

function CategoryLink({ icon, text, count }: CategoryLinkProps) {
  return (
    <button className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3 text-gray-700">
        {icon}
        <span>{text}</span>
      </div>
      <span className="text-sm text-gray-400">{count}</span>
    </button>
  );
}

function PostButton({ icon }: PostButtonProps) {
  return (
    <button className="p-2 rounded-lg text-gray-400 hover:text-[#E95420] hover:bg-[#E95420]/5 transition-colors">
      {icon}
    </button>
  );
}

function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:border-gray-200 transition-colors">
      <div className="flex space-x-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#020B34] to-[#E95420]" />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900">{post.author}</span>
            <span className="text-gray-500">{post.handle}</span>
            <span className="text-gray-400">· {post.timestamp}</span>
          </div>
          {post.department && (
            <span className="text-sm text-[#020B34]">{post.department}</span>
          )}
          <p className="mt-2 text-gray-800 whitespace-pre-wrap">{post.content}</p>
          {post.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center space-x-6 mt-4 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-[#E95420]">
              <MessageCircle className="w-5 h-5" />
              <span>{post.replies}</span>
            </button>
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 ${isLiked ? 'text-pink-500' : 'hover:text-pink-500'}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likesCount}</span>
            </button>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-2 ${isBookmarked ? 'text-[#E95420]' : 'hover:text-[#E95420]'}`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button className="flex items-center space-x-2 hover:text-[#E95420]">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendingItem({ icon, title, posts }: TrendingItemProps) {
  return (
    <div className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors">
      <div className="mt-1 text-[#E95420]">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500">{posts}</span>
      </div>
    </div>
  );
}

// Sample data with enhanced fields
const initialPosts: Post[] = [
  {
    id: 1,
    author: 'UTSA CS Department',
    handle: '@UTSA_CS',
    content: '🚀 Join us for RowdyHacks 2024! Build amazing projects and win prizes. Register now at rowdyhacks.org #UTSAHacks #CodingLife',
    timestamp: '2h',
    likes: 45,
    replies: 8,
    tags: ['Event', 'Hackathon'],
    department: 'Computer Science',
    isBookmarked: false
  },
  {
    id: 2,
    author: 'UTSA Student Life',
    handle: '@UTSA_Life',
    content: '📚 Finals week study spaces are now open 24/7!\n\n- JPL Library\n- Student Union\n- BSE Building\n\nGood luck, Roadrunners! 💪 #UTSALife',
    timestamp: '4h',
    likes: 128,
    replies: 12,
    tags: ['Academic', 'Campus'],
    department: 'Student Affairs',
    isBookmarked: true
  },
  {
    id: 3,
    author: 'UTSA Athletics',
    handle: '@UTSA_Athletics',
    content: '🏈 Cheer on the Roadrunners at the Alamodome this Saturday! 🎉 Free tickets for students at the Student Union. #BirdsUp #UTSAFootball',
    timestamp: '6h',
    likes: 73,
    replies: 5,
    tags: ['Event', 'Sports'],
    department: 'Athletics',
    isBookmarked: false
  },
  {
    id: 4,
    author: 'UTSA Alumni Association',
    handle: '@UTSA_Alumni',
    content: '🎓 Congratulations to the Class of 2024! 🎉 Welcome to the Alumni Association. Stay connected with fellow Roadrunners and join us at upcoming events. #UTSAAlumni',
    timestamp: '8h',
    likes: 92,
    replies: 10,
    tags: ['Event', 'Alumni'],
    department: 'Alumni Relations',
    isBookmarked: false
  },
  {
    id: 5,
    author: 'UTSA Career Center',
    handle: '@UTSA_Career',
    content: '🌟 Career Fair 2024 is next week! Meet with top employers and explore job opportunities. Register now at hirearoadrunner.com #UTSACareerFairs',
    timestamp: '10h',
    likes: 36,
    replies: 3,
    tags: ['Event', 'Career'],
    department: 'Career Services',
    isBookmarked: false
  },
];

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter posts based on search query
  const filteredPosts = posts.filter(post => {
    const searchContent = `${post.author} ${post.handle} ${post.content} ${post.tags.join(' ')}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post: Post = {
      id: posts.length + 1,
      author: 'Test User',
      handle: '@test_user',
      content: newPost,
      timestamp: 'now',
      likes: 0,
      replies: 0,
      tags: ['General'],
      isBookmarked: false,
      department: 'Student'
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#020B34]">UTSA</span>
              <span className="text-[#E95420] font-bold">Connect</span>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search posts, topics, or departments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E95420]/20"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <NavButton icon={<Home />} active />
            <NavButton icon={<Bell />} hasNotification />
            <NavButton icon={<Mail />} />
            <NavButton icon={<Bookmark />} />
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#020B34] to-[#E95420] cursor-pointer" />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E95420]/20"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="absolute left-0 top-0 h-full w-64 bg-white p-4 space-y-4">
            <CategoryLink icon={<Book />} text="Academics" count="12" />
            <CategoryLink icon={<Users />} text="Student Orgs" count="28" />
            <CategoryLink icon={<Calendar />} text="Events" count="15" />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto pt-24 px-4 flex gap-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64 sticky top-24 h-[calc(100vh-6rem)]">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="space-y-1">
              <CategoryLink icon={<Book />} text="Academics" count="12" />
              <CategoryLink icon={<Users />} text="Student Orgs" count="28" />
              <CategoryLink icon={<Calendar />} text="Events" count="15" />
              <CategoryLink icon={<Hash />} text="Trending" count="8" />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <button 
                onClick={handlePost}
                className="w-full bg-[#E95420] text-white rounded-xl py-3 font-medium hover:bg-[#D64A1A] transition-colors"
              >
                Create Post
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-2xl">
          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    activeFilter === 'all' ? 'bg-[#E95420] text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  All Posts
                </button>
                <button
                  onClick={() => setActiveFilter('trending')}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    activeFilter === 'trending' ? 'bg-[#E95420] text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  Trending
                </button>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Filter size={20} />
              </button>
            </div>
            
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  Department
                </button>
                <button className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  Date
                </button>
                <button className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  Tags
                </button>
                <button className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  More
                </button>
              </div>
            )}
          </div>

          {/* Create Post Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#020B34] to-[#E95420]" />
              <div className="flex-1">
                <textarea 
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="w-full bg-gray-50 rounded-xl p-4 text-gray-800 placeholder-gray-400 border-none resize-none focus:ring-2 focus:ring-[#E95420]/20"
                  placeholder="Share something with the UTSA community..."
                  rows={3}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-2">
                    <PostButton icon={<Image />} />
                    <PostButton icon={<Calendar />} />
                    <PostButton icon={<MapPin />} />
                  </div>
                  <button
                    onClick={handlePost}
                    disabled={!newPost.trim()} 
                    className="bg-[#020B34] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#162456] transition-colors disabled:opacity-50"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        {/* Enhanced Right Sidebar */}
        <aside className="hidden xl:block w-80 sticky top-24 h-[calc(100vh-6rem)] space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Trending at UTSA</h2>
            <div className="space-y-4">
              <TrendingItem 
                icon={<TrendingUp />}
                title="RowdyHacks 2024"
                posts="2.5K posts"
              />
              <TrendingItem 
                icon={<Book />}
                title="Finals Week"
                posts="892 posts"
              />
              <TrendingItem 
                icon={<Users />}
                title="Student Organizations"
                posts="645 posts"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Bookmarks</h2>
            <div className="space-y-4">
              {posts.filter(post => post.isBookmarked).map(post => (
                <div key={post.id} className="text-sm">
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-gray-500 line-clamp-2">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}