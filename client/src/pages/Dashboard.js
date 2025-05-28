import React from 'react';
import DashboardLayout from './DashboardLayout';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your legal consultation overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-4">
            <i className="fa-solid fa-calendar-check text-blue-600 text-xl"></i>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-sm text-gray-500">Total Appointments</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mr-4">
            <i className="fa-solid fa-circle-check text-green-600 text-xl"></i>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">18</div>
            <div className="text-sm text-gray-500">Completed</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-4">
            <i className="fa-solid fa-hourglass-half text-yellow-600 text-xl"></i>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-500">Pending</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mr-4">
            <i className="fa-solid fa-user-tie text-purple-600 text-xl"></i>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-500">Lawyers Consulted</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Recent Appointments, Quick Actions, Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Recent Appointments */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 xl:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
          </div>
          <ul className="divide-y divide-gray-100">
            <li className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img src="https://avatar.iran.liara.run/public/1" alt="Dr. Sarah Johnson" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Dr. Sarah Johnson</div>
                  <div className="text-xs text-gray-500">Corporate Law Specialist</div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Confirmed</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img src="https://avatar.iran.liara.run/public/2" alt="Mr. David Chen" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Mr. David Chen</div>
                  <div className="text-xs text-gray-500">Family Law Consultant</div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Pending</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img src="https://avatar.iran.liara.run/public/3" alt="Ms. Emily Rodriguez" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Ms. Emily Rodriguez</div>
                  <div className="text-xs text-gray-500">Criminal Defense Consultation</div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Completed</span>
            </li>
          </ul>
        </div>
        {/* Quick Actions & Recent Activity */}
        <div className="flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <button className="w-full mb-3 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Find a Lawyer</button>
            <button className="w-full mb-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">Schedule Appointment</button>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">View Messages</button>
          </div>
          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-gray-700"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Appointment confirmed with Dr. Sarah Johnson</li>
              <li className="flex items-center text-gray-700"><i className="fa-solid fa-credit-card text-blue-500 mr-2"></i> Payment processed for consultation</li>
              <li className="flex items-center text-gray-700"><i className="fa-solid fa-envelope text-yellow-500 mr-2"></i> New message from Mr. David Chen</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Appointment Trends</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          {/* Chart.js or ApexCharts can be integrated here */}
          <span>Chart Placeholder</span>
        </div>
      </div>

      {/* More dashboard sections can be added here as needed */}
    </DashboardLayout>
  );
}

export default Dashboard; 