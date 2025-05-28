import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const tabs = [
  { label: 'All Appointments', value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' },
];

const appointments = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    type: 'Corporate Law Consultation',
    date: 'Tue, Dec 15, 2023',
    time: '2:00 PM - 3:00 PM',
    method: 'Video Call',
    status: 'Confirmed',
    avatar: 'https://avatar.iran.liara.run/public/1',
    actions: ['Reschedule', 'Join Meeting', 'Cancel'],
  },
  {
    id: 2,
    name: 'Mr. David Chen',
    type: 'Family Law Consultation',
    date: 'Tomorrow, Dec 16, 2023',
    time: '9:00 AM - 11:00 AM',
    method: 'In Person',
    status: 'Pending',
    avatar: 'https://avatar.iran.liara.run/public/2',
    actions: ['Reschedule', 'Cancel'],
  },
  {
    id: 3,
    name: 'Ms. Emily Rodriguez',
    type: 'Criminal Defense Consultation',
    date: 'Dec 19, 2023',
    time: '4:30 PM - 5:00 PM',
    method: 'Phone Call',
    status: 'Completed',
    avatar: 'https://avatar.iran.liara.run/public/3',
    actions: ['Write Review', 'Book Again'],
  },
  {
    id: 4,
    name: 'Dr. Michael Thompson',
    type: 'Real Estate Law Consultation',
    date: 'Dec 8, 2023',
    time: '1:00 PM - 2:00 PM',
    method: 'In Person',
    status: 'Completed',
    avatar: 'https://avatar.iran.liara.run/public/4',
    actions: ['Book Again'],
  },
];

function Appointments() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointments</h1>
        <p className="text-gray-600">Manage your appointments and meetings.</p>
      </div>
      {/* Tabs */}
      <div className="mb-6 flex space-x-4 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 focus:outline-none ${activeTab === tab.value ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Appointment Cards */}
      <div className="space-y-6">
        {appointments.map(app => (
          <div key={app.id} className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={app.avatar} alt={app.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-semibold text-gray-900">{app.name}</div>
                <div className="text-xs text-gray-500">{app.type}</div>
                <div className="text-xs text-gray-400 mt-1">{app.date} • {app.time} • {app.method}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {app.actions.map(action => (
                <button
                  key={action}
                  className={`px-4 py-2 rounded-lg text-xs font-medium border transition ${
                    action === 'Join Meeting'
                      ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                      : action === 'Cancel'
                      ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                      : action === 'Write Review'
                      ? 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Appointments; 