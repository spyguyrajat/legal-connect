import React from 'react';
import DashboardLayout from './DashboardLayout';

function UserProfile() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
        <p className="text-gray-600">Manage your account settings and preferences.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-4" src="https://avatar.iran.liara.run/public/21" alt="User Avatar" />
          <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
          <p className="text-sm text-gray-500 mt-2">Member since Dec 2023</p>
          <div className="mt-6 w-full">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Profile Completion</span>
              <span className="text-sm font-bold text-blue-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Edit Profile</button>
          <button className="mt-2 w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">Security Settings</button>
        </div>
        {/* Editable Form */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="john.doe@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="1990-01-15" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="+1 555-123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="123 Main St, Apt 4B, New York, NY 10001" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Communication Method</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Email</option>
                  <option>Phone</option>
                  <option>SMS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Eastern Time (ET)</option>
                  <option>Central Time (CT)</option>
                  <option>Pacific Time (PT)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Practice Areas</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center"><input type="checkbox" className="mr-2" defaultChecked /> Corporate Law</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> Family Law</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> Criminal Defense</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> Real Estate</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> Personal Injury</label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notification Settings</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center"><input type="checkbox" className="mr-2" defaultChecked /> Email Notifications</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" defaultChecked /> Push Notifications</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> Marketing Communications</label>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Save Changes</button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">Cancel</button>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Account Actions</h3>
              <button className="w-full mb-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">Export My Data</button>
              <button className="w-full px-4 py-2 border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition">Deactivate Account</button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserProfile; 