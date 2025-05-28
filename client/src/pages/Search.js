import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const practiceAreas = [
  'All Practice Areas',
  'Corporate Law',
  'Family Law',
  'Criminal Defense',
  'Real Estate',
  'Personal Injury',
];
const experiences = ['Any Experience', '1+ years', '5+ years', '10+ years'];
const sortOptions = ['Relevance', 'Rating', 'Fee', 'Experience'];

const allLawyers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Corporate Law Specialist',
    rating: 4.9,
    reviews: 127,
    experience: 15,
    description: '15+ years experience in corporate mergers, acquisitions, and business law. Harvard Law graduate.',
    tags: ['Corporate Law', 'M&A', 'Business Law'],
    location: 'New York, NY',
    fee: 50,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Sarah',
    area: 'Corporate Law',
    available: ['today', 'week'],
  },
  {
    id: 2,
    name: 'Mr. David Chen',
    title: 'Family Law Attorney',
    rating: 4.7,
    reviews: 89,
    experience: 12,
    description: 'Specializing in divorce, child custody, and adoption cases. Compassionate approach with 12 years experience.',
    tags: ['Family Law', 'Divorce', 'Child Custody'],
    location: 'Los Angeles, CA',
    fee: 20,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=David',
    area: 'Family Law',
    available: ['week', 'next'],
  },
  {
    id: 3,
    name: 'Ms. Emily Rodriguez',
    title: 'Criminal Defense Attorney',
    rating: 4.8,
    reviews: 102,
    experience: 10,
    description: 'Defending clients in criminal cases with a proven track record.',
    tags: ['Criminal Defense'],
    location: 'Chicago, IL',
    fee: 0,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Emily',
    area: 'Criminal Defense',
    available: ['today'],
  },
  {
    id: 4,
    name: 'Dr. Michael Thompson',
    title: 'Real Estate Law Consultant',
    rating: 4.6,
    reviews: 77,
    experience: 8,
    description: 'Expert in real estate transactions and property law.',
    tags: ['Real Estate'],
    location: 'Miami, FL',
    fee: 200,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Michael',
    area: 'Real Estate',
    available: ['next'],
  },
  {
    id: 5,
    name: 'Ms. Priya Patel',
    title: 'Personal Injury Lawyer',
    rating: 4.5,
    reviews: 65,
    experience: 6,
    description: 'Helping clients get compensation for injuries.',
    tags: ['Personal Injury'],
    location: 'Houston, TX',
    fee: 0,
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Priya',
    area: 'Personal Injury',
    available: ['week'],
  },
];

const ratingOptions = [5, 4, 3];
const feeOptions = ['free', 'under100', '100-200', '200+'];
const availabilityOptions = [
  { label: 'Available today', value: 'today' },
  { label: 'This week', value: 'week' },
  { label: 'Next week', value: 'next' },
];

function Search() {
  const [practiceArea, setPracticeArea] = useState(practiceAreas[0]);
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState(experiences[0]);
  const [sort, setSort] = useState(sortOptions[0]);
  const [search, setSearch] = useState('');
  const [ratingFilter, setRatingFilter] = useState([]);
  const [feeFilter, setFeeFilter] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [modalLawyer, setModalLawyer] = useState(null);

  // Filtering logic
  let filtered = allLawyers.filter(lawyer => {
    // Practice area
    if (practiceArea !== 'All Practice Areas' && lawyer.area !== practiceArea) return false;
    // Location
    if (location && !lawyer.location.toLowerCase().includes(location.toLowerCase())) return false;
    // Experience
    if (experience !== 'Any Experience') {
      const min = parseInt(experience);
      if (lawyer.experience < min) return false;
    }
    // Search
    if (search && !(
      lawyer.name.toLowerCase().includes(search.toLowerCase()) ||
      lawyer.title.toLowerCase().includes(search.toLowerCase()) ||
      lawyer.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    )) return false;
    // Rating
    if (ratingFilter.length > 0) {
      if (!ratingFilter.some(r => lawyer.rating >= r)) return false;
    }
    // Fee
    if (feeFilter.length > 0) {
      let match = false;
      for (let fee of feeFilter) {
        if (fee === 'free' && lawyer.fee === 0) match = true;
        if (fee === 'under100' && lawyer.fee > 0 && lawyer.fee < 100) match = true;
        if (fee === '100-200' && lawyer.fee >= 100 && lawyer.fee <= 200) match = true;
        if (fee === '200+' && lawyer.fee > 200) match = true;
      }
      if (!match) return false;
    }
    // Availability
    if (availabilityFilter.length > 0) {
      if (!availabilityFilter.some(a => lawyer.available.includes(a))) return false;
    }
    return true;
  });

  // Sorting
  if (sort === 'Rating') filtered = filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'Fee') filtered = filtered.sort((a, b) => a.fee - b.fee);
  else if (sort === 'Experience') filtered = filtered.sort((a, b) => b.experience - a.experience);

  // Pagination
  const perPage = 2;
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  // Handlers
  const handleRating = r => setRatingFilter(f => f.includes(r) ? f.filter(x => x !== r) : [...f, r]);
  const handleFee = f => setFeeFilter(ff => ff.includes(f) ? ff.filter(x => x !== f) : [...ff, f]);
  const handleAvail = v => setAvailabilityFilter(av => av.includes(v) ? av.filter(x => x !== v) : [...av, v]);
  const clearFilters = () => {
    setRatingFilter([]); setFeeFilter([]); setAvailabilityFilter([]);
    setPracticeArea(practiceAreas[0]); setLocation(''); setExperience(experiences[0]);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search</h1>
        <p className="text-gray-600">Find the perfect lawyer for your legal needs.</p>
      </div>
      {/* Filter Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Practice Area</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2" value={practiceArea} onChange={e => setPracticeArea(e.target.value)}>
                {practiceAreas.map(area => <option key={area}>{area}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Enter city or zip code" value={location} onChange={e => setLocation(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2" value={experience} onChange={e => setExperience(e.target.value)}>
                {experiences.map(exp => <option key={exp}>{exp}</option>)}
              </select>
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <input className="flex-1 border border-gray-300 rounded-lg px-3 py-2" placeholder="Search by lawyer name or keyword..." value={search} onChange={e => setSearch(e.target.value)} />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2"><i className="fa-solid fa-magnifying-glass"></i> Search Lawyers</button>
          </div>
          <div className="flex items-end">
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort by:</label>
            <select className="ml-2 border border-gray-300 rounded-lg px-3 py-2" value={sort} onChange={e => setSort(e.target.value)}>
              {sortOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 bg-white rounded-lg border border-gray-200 p-6 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
          <div className="mb-4">
            <div className="font-medium text-gray-700 mb-2">Rating</div>
            <div className="space-y-2">
              {ratingOptions.map(r => (
                <label key={r} className="flex items-center"><input type="checkbox" className="mr-2" checked={ratingFilter.includes(r)} onChange={() => handleRating(r)} /> {r}+ stars</label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="font-medium text-gray-700 mb-2">Consultation Fee</div>
            <div className="space-y-2">
              <label className="flex items-center"><input type="checkbox" className="mr-2" checked={feeFilter.includes('free')} onChange={() => handleFee('free')} /> Free consultation</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" checked={feeFilter.includes('under100')} onChange={() => handleFee('under100')} /> Under $100</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" checked={feeFilter.includes('100-200')} onChange={() => handleFee('100-200')} /> $100 - $200</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" checked={feeFilter.includes('200+')} onChange={() => handleFee('200+')} /> $200+</label>
            </div>
          </div>
          <div className="mb-6">
            <div className="font-medium text-gray-700 mb-2">Availability</div>
            <div className="space-y-2">
              {availabilityOptions.map(opt => (
                <label key={opt.value} className="flex items-center"><input type="checkbox" className="mr-2" checked={availabilityFilter.includes(opt.value)} onChange={() => handleAvail(opt.value)} /> {opt.label}</label>
              ))}
            </div>
          </div>
          <button className="w-full border border-blue-600 text-blue-600 rounded-lg py-2 font-medium hover:bg-blue-50 transition" onClick={clearFilters}>Clear All Filters</button>
        </aside>
        {/* Results */}
        <section className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-gray-700">Showing {filtered.length} lawyers in your area</div>
            <div></div>
          </div>
          <div className="space-y-6">
            {paginated.map(lawyer => (
              <div key={lawyer.id} className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <img src={lawyer.avatar} alt={lawyer.name} className="w-20 h-20 rounded-full mr-6" />
                  <div>
                    <div className="font-bold text-lg text-gray-900">{lawyer.name}</div>
                    <div className="text-blue-600 font-medium text-sm mb-1">{lawyer.title}</div>
                    <div className="flex items-center text-yellow-500 text-sm mb-1">
                      <i className="fa-solid fa-star mr-1"></i>
                      {lawyer.rating} <span className="text-gray-500 ml-2">({lawyer.reviews} reviews)</span>
                    </div>
                    <div className="text-gray-700 text-sm mb-1">{lawyer.description}</div>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {lawyer.tags.map(tag => (
                        <span key={tag} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center text-gray-500 text-xs"><i className="fa-solid fa-location-dot mr-1"></i> {lawyer.location}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end min-w-[120px]">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{lawyer.fee === 0 ? 'Free' : `$${lawyer.fee}`}</div>
                  <div className="text-xs text-gray-500 mb-3">consultation</div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition" onClick={() => setModalLawyer(lawyer)}>Book Consultation</button>
                </div>
              </div>
            ))}
            {paginated.length === 0 && <div className="text-center text-gray-400 py-12">No lawyers found matching your criteria.</div>}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50" disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>&lt;</button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i+1} className={`px-3 py-1 border border-gray-300 ${page === i+1 ? 'bg-blue-600 text-white font-semibold' : 'bg-white text-gray-700 hover:bg-gray-50'}`} onClick={() => setPage(i+1)}>{i+1}</button>
              ))}
              <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50" disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>&gt;</button>
            </nav>
          </div>
        </section>
      </div>
      {/* Book Consultation Modal */}
      {modalLawyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setModalLawyer(null)}><i className="fa-solid fa-xmark text-2xl"></i></button>
            <div className="flex items-center mb-4">
              <img src={modalLawyer.avatar} alt={modalLawyer.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <div className="font-bold text-lg text-gray-900">{modalLawyer.name}</div>
                <div className="text-blue-600 font-medium text-sm mb-1">{modalLawyer.title}</div>
              </div>
            </div>
            <div className="mb-4 text-gray-700">To book a consultation with <span className="font-semibold">{modalLawyer.name}</span>, please proceed to the next step (demo only).</div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition" onClick={() => setModalLawyer(null)}>Close</button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Search; 