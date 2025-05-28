const Lawyer = require('../models/Lawyer');

exports.getAllLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.json(lawyers);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getLawyerById = async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.id);
    if (!lawyer) return res.status(404).json({ message: 'Lawyer not found' });
    res.json(lawyer);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}; 