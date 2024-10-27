export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Header - Updated with stronger colors and better contrast */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-orange-500 to-orange-600" />
        <div className="px-6 pb-6">
          <div className="flex items-start -mt-16 mb-4">
            <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
              <img
                src="/placeholder-profile.jpg"
                alt="Profile"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="ml-6 mt-16">
              <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
              <p className="text-lg font-medium text-gray-700">Computer Science Major · Class of 2025</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors">
              Edit Profile
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors">
              Share Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Passionate about technology and innovation. Always looking to learn and collaborate on new projects.
            </p>
          </div>

          {/* Organizations Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Organizations</h2>
            <div className="space-y-4">
              {['ACM UTSA', 'Cyber Security Club'].map((org) => (
                <div key={org} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                    {org.charAt(0)}
                  </div>
                  <span className="text-gray-900 font-medium">{org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Activity Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Activity</h2>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">Posted in RowdyHacks 2024</h3>
                  <span className="text-sm font-medium text-gray-600">2 days ago</span>
                </div>
                <p className="text-gray-700 text-lg">Looking for team members for the hackathon!</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">Joined Study Group</h3>
                  <span className="text-sm font-medium text-gray-600">5 days ago</span>
                </div>
                <p className="text-gray-700 text-lg">CS 3443 - Application Programming</p>
              </div>
            </div>
          </div>

          {/* Academic Schedule */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Academic Schedule</h2>
            <div className="space-y-4">
              {[
                {
                  course: 'CS 3443 - Application Programming',
                  time: 'MWF 10:00 AM - 11:15 AM'
                },
                {
                  course: 'CS 3844 - Computer Organization',
                  time: 'TTH 1:00 PM - 2:15 PM'
                }
              ].map((class_, index) => (
                <div key={index} className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-gray-900">{class_.course}</h3>
                  <p className="text-gray-700 mt-1 font-medium">{class_.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}