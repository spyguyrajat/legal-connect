const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  lawyer: { type: mongoose.Schema.Types.ObjectId, ref: 'Lawyer', required: true },
  user: { type: String }, // or ObjectId if you have user accounts
  date: String,
  time: String,
  type: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  desc: String,
  agree: Boolean,
  remind: Boolean,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema); 