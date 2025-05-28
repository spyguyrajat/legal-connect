import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const conversations = [
  { id: 1, name: 'Dr. Sarah Johnson', avatar: 'https://avatar.iran.liara.run/public/1', lastMessage: 'I have reviewed your document.', unread: 2 },
  { id: 2, name: 'Mr. David Chen', avatar: 'https://avatar.iran.liara.run/public/2', lastMessage: 'Thank you for your help!', unread: 0 },
  { id: 3, name: 'Ms. Emily Rodriguez', avatar: 'https://avatar.iran.liara.run/public/3', lastMessage: 'Can we reschedule?', unread: 1 },
  { id: 4, name: 'Dr. Michael Thompson', avatar: 'https://avatar.iran.liara.run/public/4', lastMessage: 'I will send the contract.', unread: 0 },
];

const messages = [
  { from: 'them', text: 'Hi! I have reviewed your document.' },
  { from: 'me', text: 'Thank you for getting back to me.' },
  { from: 'them', text: 'Let me know if you have any questions.' },
  { from: 'me', text: 'Will do, thanks!' },
];

function Messages() {
  const [selected, setSelected] = useState(conversations[0]);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Communicate with your lawyers securely.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
        {/* Conversations List */}
        <div className="bg-white rounded-lg border border-gray-200 h-full flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <input type="text" placeholder="Search conversations..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map(conv => (
              <button
                key={conv.id}
                onClick={() => setSelected(conv)}
                className={`w-full flex items-center px-4 py-3 border-b border-gray-100 text-left transition ${selected.id === conv.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                <img src={conv.avatar} alt={conv.name} className="w-8 h-8 rounded-full mr-3" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{conv.name}</div>
                  <div className="text-xs text-gray-500 truncate">{conv.lastMessage}</div>
                </div>
                {conv.unread > 0 && <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">{conv.unread}</span>}
              </button>
            ))}
          </div>
        </div>
        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 flex items-center">
            <img src={selected.avatar} alt={selected.name} className="w-8 h-8 rounded-full mr-3" />
            <div>
              <div className="font-medium text-gray-900">{selected.name}</div>
              <div className="text-xs text-gray-500">Online</div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.from === 'me' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>{msg.text}</div>
              </div>
            ))}
          </div>
          <form className="p-4 border-t border-gray-200 flex gap-2">
            <input type="text" placeholder="Type your message..." className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Send</button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Messages; 