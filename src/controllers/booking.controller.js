const bookingService = require('../services/booking.service');

const createBooking = async (req, res) => {
    let credentials = {
        tourId: req.body.tourId,
        userId: req.claims.id,
    }
    const response = await bookingService.createBooking(credentials);
    res.status(response.statusCode).json(response);
};

module.exports = {
    createBooking,
};
