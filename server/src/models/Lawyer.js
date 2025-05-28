const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  degree: String,
  school: String,
  details: String,
});

const ReviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  text: String,
  date: String,
});

const LawyerSchema = new mongoose.Schema({
  name: String,
  title: String,
  avatar: String,
  rating: Number,
  reviewsCount: Number,
  tags: [String],
  location: String,
  experience: Number,
  fee: Number,
  about: String,
  education: [EducationSchema],
  contact: {
    email: String,
    phone: String,
    address: String,
  },
  hours: [{ day: String, time: String }],
  reviews: [ReviewSchema],
});

module.exports = mongoose.model('Lawyer', LawyerSchema); 