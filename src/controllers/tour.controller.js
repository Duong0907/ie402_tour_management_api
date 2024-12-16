const tourService = require('../services/tour.service');

const getAllTours = async (req, res) => {
    const response = await tourService.getAllTours();
    res.status(response.statusCode).json(response);
}

const getTourById = async (req, res) => {
    const id = req.params.id;
    const response = await tourService.getTourById(id);
    res.status(response.statusCode).json(response);
}

const searchTour = async (req, res) => {
    const keyword = req.query.keyword.trim();
    const response = await tourService.searchTour(keyword);
    res.status(response.statusCode).json(response);
}

module.exports = {
    getAllTours,
    getTourById,
    searchTour
}