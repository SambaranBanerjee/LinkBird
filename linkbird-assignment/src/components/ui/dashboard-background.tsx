// src/components/ui/dashboard-background.tsx
export function DashboardBackground() {
  return (
    <div className="absolute inset-0 bg-gray-50 p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 h-full">
        
        {/* Left Sidebar - Main Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          {/* App Header */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900">LinkBird</h1>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">K</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Kandid</p>
              <p className="text-sm text-gray-500">Personal</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Overview</h3>
            <div className="space-y-2">
              {['Dashboard', 'Leads', 'Campaign', 'Messages', 'LinkedIn Accounts'].map((item) => (
                <div key={item} className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer">
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 my-4"></div>

          {/* Settings Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Settings</h3>
            <div className="space-y-2">
              <div className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer">
                <span className="text-sm text-gray-700">Setting & Billing</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-4"></div>

          {/* Admin Panel Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Admin Panel</h3>
            <div className="space-y-2">
              {['Activity logs', 'User logs'].map((item) => (
                <div key={item} className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer">
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Content - Campaigns & LinkedIn Accounts */}
        <div className="col-span-2 space-y-6">
          {/* Campaigns Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Campaigns</h3>
            <div className="space-y-1">
              {[
                'Just Herbs',
                'Jukey chemistry',
                'Hyugailfe 2',
                'Honeyveda',
                'HempStreet',
                'HealthyHey 2'
              ].map((campaign) => (
                <div key={campaign} className="flex items-center py-1.5 px-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <span className="text-sm text-gray-600">{campaign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LinkedIn Accounts Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">LinkedIn Accounts</h3>
            <div className="space-y-3">
              {[
                { name: 'Pulkit Garg', email: '1999pakgarg@gmail.com' },
                { name: 'Jiveish Lakhani', email: 'jiveish@gmail.com' },
                { name: 'Infantil Sahani', email: 'infantil.sahani@gmail.com' },
                { name: 'Bhawan', email: 'bhanyan@kandu.blogspot.com' }
              ].map((account, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{account.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{account.name}</p>
                    <p className="text-xs text-gray-500 truncate">{account.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Activity & Status */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Recent Activity</h3>
            <div className="space-y-2">
              <p className="text-xs text-gray-500 mb-2">Lead</p>
              {[
                'Onn Satyarthy Regional Head',
                'Dr. Bhuvaneshwari',
                'Fertility & Women\'s Health + A...',
                'Sundeep Singh Building Product-led SEO Crowt...',
                'Dihoag Singh Manager Marketing & Communication...',
                'Vanshy Jain (yavveda) | primary intention...'
              ].slice(0, 4).map((activity, index) => (
                <div key={index} className="text-xs text-gray-700 truncate py-1">
                  {activity}
                </div>
              ))}
            </div>
          </div>

          {/* Local Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Local</h3>
            <div className="space-y-1">
              {[
                'Onn Satyarthy Regional Head',
                'Dr. Bhuvaneshwari',
                'Fertility & Women\'s Health + A...',
                'Sundeep Singh Building Product-led SEO Crowt...'
              ].map((item, index) => (
                <div key={index} className="text-xs text-gray-700 truncate py-1">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Research Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Research</h3>
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Media Recent</p>
              <p className="text-xs font-semibold text-gray-700">Status</p>
              <div className="space-y-1">
                {[
                  { status: 'Pending Approval', time: 'Sent 7 mins ago' },
                  { status: 'Pending Approval', time: 'Sent 7 mins ago' },
                  { status: 'Pending Approval', time: 'Sent 7 mins ago' },
                  { status: 'Pending Approval', time: 'Pending Approval' },
                  { status: 'Do Not Contact', time: 'Do Not Contact' },
                  { status: 'Followup', time: '10 mins ago' }
                ].slice(0, 3).map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-xs">
                    <span className="text-gray-700">{item.status}</span>
                    <span className="text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}