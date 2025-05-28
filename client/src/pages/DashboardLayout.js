import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'Dashboard', to: '/dashboard', icon: 'fa-solid fa-chart-pie' },
  { name: 'Search', to: '/search', icon: 'fa-solid fa-magnifying-glass' },
  { name: 'Lawyer Profile', to: '/lawyer-profile', icon: 'fa-solid fa-user-tie' },
  { name: 'Booking', to: '/booking', icon: 'fa-solid fa-calendar-check' },
  { name: 'Appointments', to: '/appointments', icon: 'fa-solid fa-calendar-days' },
  { name: 'Messages', to: '/messages', icon: 'fa-solid fa-comments' },
  { name: 'User Profile', to: '/user-profile', icon: 'fa-solid fa-user' },
  { name: 'Notifications', to: '/notifications', icon: 'fa-solid fa-bell' },
];

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-scale-balanced text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">LegalFind</span>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                <i className={`${link.icon} w-5 h-5 mr-3`}></i>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        {/* User Info */}
        <div className="px-4 py-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-3"
              src={`https://avatar.iran.liara.run/public/${user?.name?.charCodeAt(0) || 42}`}
              alt="User Avatar"
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{user?.name || 'User'}</div>
              <div className="text-xs text-gray-500">{user?.email || ''}</div>
            </div>
            <button
              onClick={() => { logout(); navigate('/login'); }}
              className="ml-2 px-2 py-1 text-xs text-red-600 border border-red-200 rounded hover:bg-red-50"
            >
              Sign out
            </button>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout; 