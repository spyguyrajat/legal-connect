const mongoose = require('mongoose');
const Lawyer = require('./models/Lawyer');

const sampleLawyers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Corporate Law Specialist',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Sarah',
    rating: 4.9,
    reviewsCount: 127,
    tags: ['Corporate Law', 'M&A', 'Business Law', 'Securities'],
    location: 'New York, NY',
    experience: 15,
    fee: 50,
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
  },
  // Add more sample lawyers here (e.g., David Chen, Emily Rodriguez, etc.)
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/legalconnect');
  await Lawyer.deleteMany({});
  await Lawyer.insertMany(sampleLawyers);
  console.log('Sample lawyers seeded!');
  mongoose.disconnect();
}

seed();