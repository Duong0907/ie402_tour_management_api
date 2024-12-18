const express = require('express');
const bookingController = require('../controllers/booking.controller');
const { tokenValidateMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();
router.post('/', tokenValidateMiddleware, bookingController.createBooking);

module.exports = router;
