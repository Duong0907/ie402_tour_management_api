const tourController = require('../controllers/tour.controller');
const express = require('express');

const router = express.Router();

router.get('/', tourController.getAllTours);
router.get('/tour/:id', tourController.getTourById);
router.get('/search', tourController.searchTour);

module.exports = router;
