const db = require('../models/index');
const { BadRequestErrorResponse, OKResponse, InternalServerErrorResponse } = require('../global/response');
const userModel = db.users;
const bookingModel = db.bookings;

const createBooking = async (credentials) => {
    const { tourId, userId } = credentials;
    if (!tourId) {
        return new BadRequestErrorResponse('Tour ID is required');
    }
    try {
        const checkUser = await userModel.findByPk(userId);
        if (!checkUser) {
            return new BadRequestErrorResponse('User not found');
        }
        const checkTour = await db.tours.findByPk(tourId);
        if (!checkTour) {
            return new BadRequestErrorResponse('Tour not found');
        }
        const booking = await bookingModel.create({
            tourId,
            userId,
            status: 'success',
        });
        return new OKResponse('Booking successfully', { id: booking.id });
    } catch (error) {
        return new InternalServerErrorResponse(error.message);
    }
};

module.exports = {
    createBooking,
};
