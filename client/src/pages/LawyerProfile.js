import React from 'react';
import DashboardLayout from './DashboardLayout';

const lawyer = {
  name: 'Dr. Sarah Johnson',
  title: 'Corporate Law Specialist',
  avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Sarah',
  rating: 4.9,
  reviews: 127,
  tags: ['Corporate Law', 'M&A', 'Business Law', 'Securities'],
  location: 'New York, NY',
  experience: 15,
  fee: 50,
  available: 'Available Today',
  nextSlot: '2:00 PM',
  about: `Dr. Sarah Johnson is a highly experienced corporate law attorney with over 15 years of practice in mergers and acquisitions, business formation, and securities law. She graduated magna cum laude from Harvard Law School and has been recognized as one of the top corporate lawyers in New York.\n\nHer expertise includes complex corporate transactions, regulatory compliance, and strategic business counsel for Fortune 500 companies and emerging startups. She is known for her meticulous attention to detail and client-focused approach.`,
  education: [
    {
      degree: 'Juris Doctor (J.D.)',
      school: 'Harvard Law School, 2008',
      details: 'Magna Cum Laude, Law Review Editor',
    },
    {
      degree: 'Bachelor of Arts in Economics',
      school: 'Yale University, 2005',
      details: 'Summa Cum Laude, Phi Beta Kappa',
    },
    {
      degree: 'Bar Admission',
      school: 'New York State Bar, 2008',
      details: 'U.S. District Court, Southern District of NY',
    },
  ],
  contact: {
    email: 'sarah.johnson@lawfirm.com',
    phone: '(555) 123-4567',
    address: '123 Corporate Plaza\nNew York, NY 10001',
  },
  hours: [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  reviews: [
    {
      name: 'Michael Thompson',
      rating: 5,
      text: 'Excellent service! Dr. Johnson handled our company merger with exceptional professionalism and attention to detail. Highly recommend her expertise in corporate law.',
      date: '2 weeks ago',
    },
    {
      name: 'Jennifer Lee',
      rating: 5,
      text: 'Very knowledgeable and responsive. She guided us through complex securities regulations with ease. Would definitely work with her again.',
      date: '1 month ago',
    },
  ],
};

function LawyerProfile() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lawyer Profile</h1>
        <p className="text-gray-600">Detailed information about your selected lawyer.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={lawyer.avatar} alt={lawyer.name} className="w-20 h-20 rounded-full mr-6" />
              <div>
                <div className="font-bold text-lg text-gray-900">{lawyer.name}</div>
                <div className="text-blue-600 font-medium text-sm mb-1">{lawyer.title}</div>
                <div className="flex items-center text-yellow-500 text-sm mb-1">
                  <i className="fa-solid fa-star mr-1"></i>
                  {lawyer.rating} <span className="text-gray-500 ml-2">({lawyer.reviews.length} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-1">
                  {lawyer.tags.map(tag => (
                    <span key={tag} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center text-gray-500 text-xs"><i className="fa-solid fa-location-dot mr-1"></i> {lawyer.location}</div>
                <div className="text-xs text-gray-500 mt-1">{lawyer.experience}+ years experience</div>
              </div>
            </div>
          </div>
          {/* About */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-2">About</h2>
            <p className="text-gray-700 whitespace-pre-line">{lawyer.about}</p>
          </div>
          {/* Education & Credentials */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-2">Education & Credentials</h2>
            <ul className="space-y-2">
              {lawyer.education.map((ed, i) => (
                <li key={i}>
                  <div className="font-medium text-gray-800">{ed.degree}</div>
                  <div className="text-sm text-gray-600">{ed.school}</div>
                  <div className="text-xs text-gray-500">{ed.details}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Client Reviews */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-900">Client Reviews</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">Write a Review</button>
            </div>
            <ul className="space-y-4">
              {lawyer.reviews.map((review, i) => (
                <li key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-gray-800 mr-2">{review.name}</span>
                    <span className="flex items-center text-yellow-500 text-xs">
                      {Array.from({ length: review.rating }).map((_, idx) => <i key={idx} className="fa-solid fa-star mr-0.5"></i>)}
                    </span>
                  </div>
                  <div className="text-gray-700 text-sm mb-1">{review.text}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex flex-col gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">{lawyer.fee}</div>
            <div className="text-xs text-gray-500 mb-3">consultation fee</div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition mb-2">Book Consultation</button>
            <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition mb-2">Send Message</button>
            <div className="text-xs text-green-600 font-medium mb-1">{lawyer.available}</div>
            <div className="text-xs text-gray-500">Next slot: {lawyer.nextSlot}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
            <div className="text-sm text-gray-700 mb-1">{lawyer.contact.email}</div>
            <div className="text-sm text-gray-700 mb-1">{lawyer.contact.phone}</div>
            <div className="text-sm text-gray-700 whitespace-pre-line">{lawyer.contact.address}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
            <ul className="text-sm text-gray-700">
              {lawyer.hours.map((h, i) => (
                <li key={i} className="flex justify-between"><span>{h.day}</span><span>{h.time}</span></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}

export default LawyerProfile; 