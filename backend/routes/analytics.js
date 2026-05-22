const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

// Get statistics
router.get('/stats', analyticsController.getStats);

// Get correlation analysis
router.get('/correlation', analyticsController.getCorrelation);

// Get distribution
router.get('/distribution', analyticsController.getDistribution);

// Upload and parse CSV
router.post('/upload-csv', upload.single('file'), analyticsController.uploadCSV);

module.exports = router;