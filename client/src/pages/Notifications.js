import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Unread', value: 'unread' },
  { label: 'Appointments', value: 'appointments' },
  { label: 'Messages', value: 'messages' },
];

const notifications = [
  { id: 1, type: 'Appointment Confirmed', desc: 'Your consultation with Dr. Sarah Johnson has been confirmed for today at 2:00 PM.', time: '5 min ago', icon: 'fa-calendar-check', color: 'text-blue-500', bg: 'bg-blue-100' },
  { id: 2, type: 'New Message', desc: 'Mr. David Chen sent you a message regarding your family law consultation.', time: '15 min ago', icon: 'fa-envelope', color: 'text-yellow-500', bg: 'bg-yellow-100' },
  { id: 3, type: 'Payment Processed', desc: 'Your payment of $50 for the consultation with Dr. Sarah Johnson has been processed successfully.', time: '1 hour ago', icon: 'fa-credit-card', color: 'text-green-500', bg: 'bg-green-100' },
  { id: 4, type: 'Appointment Reminder', desc: 'Don\'t forget your meeting with Ms. Emily Rodriguez tomorrow at 3:30 PM.', time: '2 hours ago', icon: 'fa-bell', color: 'text-purple-500', bg: 'bg-purple-100' },
  { id: 5, type: 'Document Request', desc: 'Dr. Michael Thompson has requested additional documents for your real estate case.', time: '3 hours ago', icon: 'fa-file-alt', color: 'text-gray-500', bg: 'bg-gray-100' },
  { id: 6, type: 'System Update', desc: 'We have updated our platform with new features and security improvements.', time: '1 day ago', icon: 'fa-info-circle', color: 'text-blue-400', bg: 'bg-blue-50' },
];

function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
        <p className="text-gray-600">Stay updated with your legal consultations and appointments.</p>
      </div>
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 focus:outline-none ${activeTab === tab.value ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'}`}
          >
            {tab.label}
          </button>
        ))}
        <div className="flex-1"></div>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">Settings</button>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition">Mark All Read</button>
      </div>
      {/* Notification Cards */}
      <div className="space-y-4">
        {notifications.map(note => (
          <div key={note.id} className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${note.bg}`}>
              <i className={`fa-solid ${note.icon} ${note.color} text-xl`}></i>
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">{note.type}</div>
              <div className="text-sm text-gray-600 mb-1">{note.desc}</div>
              <div className="text-xs text-gray-400">{note.time}</div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Notifications; 