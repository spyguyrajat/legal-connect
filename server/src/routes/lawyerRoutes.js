const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController');

router.get('/', lawyerController.getAllLawyers);
router.get('/:id', lawyerController.getLawyerById);

module.exports = router; 