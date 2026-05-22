const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

// Submit survey response
router.post('/submit', surveyController.submitResponse);

// Get all responses
router.get('/responses', surveyController.getResponses);

// Get response by ID
router.get('/responses/:id', surveyController.getResponseById);

// Get total responses count
router.get('/count', surveyController.getCount);

module.exports = router;