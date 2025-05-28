import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const lawyers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Corporate Law',
    fee: 50,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Sarah',
  },
  {
    id: 2,
    name: 'Mr. David Chen',
    title: 'Family Law',
    fee: 20,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=David',
  },
  {
    id: 3,
    name: 'Ms. Emily Rodriguez',
    title: 'Criminal Defense',
    fee: 200,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Emily',
  },
];

const times = [
  { time: '2:00 PM', status: 'Available' },
  { time: '3:00 PM', status: 'Available' },
  { time: '4:00 PM', status: 'Available' },
  { time: '5:00 PM', status: 'Booked' },
];

const consultationTypes = [
  { value: 'in-person', label: 'In-Person', desc: 'Meet at office' },
  { value: 'video', label: 'Video Call', desc: 'Online meeting' },
  { value: 'phone', label: 'Phone Call', desc: 'Voice only' },
];

function Booking() {
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('in-person');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [agree, setAgree] = useState(false);
  const [remind, setRemind] = useState(false);

  const total = selectedLawyer ? `$${selectedLawyer.fee}` : '$0';

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking</h1>
        <p className="text-gray-600">Schedule your consultation with ease.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Booking Form */}
        <form className="flex-1 bg-white rounded-lg border border-gray-200 p-8 space-y-6 max-w-xl mx-auto lg:mx-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Book Your Consultation</h2>
          {/* Select Lawyer */}
          <div>
            <div className="font-medium text-gray-700 mb-2">Select Lawyer</div>
            <div className="space-y-2">
              {lawyers.map(lawyer => (
                <label key={lawyer.id} className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${selectedLawyer?.id === lawyer.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>
                  <input type="radio" name="lawyer" className="mr-3" checked={selectedLawyer?.id === lawyer.id} onChange={() => setSelectedLawyer(lawyer)} />
                  <img src={lawyer.avatar} alt={lawyer.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">{lawyer.name}</div>
                    <div className="text-xs text-gray-500">{lawyer.title} - ${lawyer.fee}/consultation</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          {/* Date & Time */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2" value={time} onChange={e => setTime(e.target.value)}>
                <option value="">Select time</option>
                {times.map(t => (
                  <option key={t.time} value={t.time} disabled={t.status === 'Booked'}>{t.time} {t.status === 'Booked' ? '(Booked)' : ''}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Consultation Type */}
          <div>
            <div className="font-medium text-gray-700 mb-2">Consultation Type</div>
            <div className="flex gap-4">
              {consultationTypes.map(opt => (
                <label key={opt.value} className={`flex-1 border rounded-lg p-3 cursor-pointer transition flex flex-col items-start ${type === opt.value ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>
                  <input type="radio" name="type" className="mr-2 mb-2" checked={type === opt.value} onChange={() => setType(opt.value)} />
                  <span className="font-medium text-gray-900">{opt.label}</span>
                  <span className="text-xs text-gray-500">{opt.desc}</span>
                </label>
              ))}
            </div>
          </div>
          {/* User Info */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Enter your first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Enter your phone number" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Case Description</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2" rows={3} placeholder="Briefly describe your legal matter and what you need help with..." value={desc} onChange={e => setDesc(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center"><input type="checkbox" className="mr-2" checked={agree} onChange={e => setAgree(e.target.checked)} /> I agree to the terms and conditions</label>
            <label className="flex items-center"><input type="checkbox" className="mr-2" checked={remind} onChange={e => setRemind(e.target.checked)} /> Send me email reminders about my appointment</label>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Book Consultation</button>
        </form>
        {/* Sidebar */}
        <div className="w-full lg:w-96 flex flex-col gap-6">
          {/* Booking Summary */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
            <div className="flex justify-between text-sm mb-2"><span>Lawyer:</span><span>{selectedLawyer ? selectedLawyer.name : 'Not selected'}</span></div>
            <div className="flex justify-between text-sm mb-2"><span>Date:</span><span>{date || 'Not selected'}</span></div>
            <div className="flex justify-between text-sm mb-2"><span>Time:</span><span>{time || 'Not selected'}</span></div>
            <div className="flex justify-between text-sm mb-2"><span>Type:</span><span>{consultationTypes.find(t => t.value === type)?.label || 'Not selected'}</span></div>
            <div className="flex justify-between text-base font-bold mt-4"><span>Total:</span><span>{total}</span></div>
          </div>
          {/* Available Today */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Available Today</h3>
            <div className="flex flex-col gap-2">
              {times.map(t => (
                <div key={t.time} className={`flex items-center justify-between px-3 py-2 rounded-lg border ${t.status === 'Available' ? 'border-green-200 bg-green-50 text-green-700' : 'border-gray-200 bg-gray-50 text-gray-400 line-through'}`}>{t.time} <span className={`text-xs font-medium ${t.status === 'Available' ? 'text-green-600' : 'text-gray-400'}`}>{t.status}</span></div>
              ))}
            </div>
          </div>
          {/* Need Help */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
            <ul className="space-y-2 text-blue-600 text-sm">
              <li><a href="#" className="hover:underline flex items-center"><i className="fa-solid fa-circle-question mr-2"></i> Booking FAQ</a></li>
              <li><a href="#" className="hover:underline flex items-center"><i className="fa-solid fa-headset mr-2"></i> Contact Support</a></li>
              <li><a href="tel:5551234567" className="hover:underline flex items-center"><i className="fa-solid fa-phone mr-2"></i> Call (555) 123-4567</a></li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Booking; 