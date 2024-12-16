const db = require('../models/index');
const { BadRequestErrorResponse, InternalServerErrorResponse, OKResponse } = require('../global/response');

const tourModel = db.tours;
const locationModel = db.locations;
const tourLocationModel = db.tour_locations;
const pointModel = db.points;
const routeModel = db.routes;
const routePointModel = db.route_points;
const tourImageModel = db.tour_images;

const getAllTours = async () => {
    try {
        const tours = await tourModel.findAll({
            attributes: {
                exclude: ['zoomVal', "adminId", "centerPointId", "createdAt", "updatedAt"]
            }
        });
        return new OKResponse('Tours fetched successfully', tours);
    } catch (error) {
        return new InternalServerErrorResponse(error.message);
    }
}

const getTourById = async (id) => {
    try {
        const tour = await tourModel.findByPk(id);
        if (!tour) {
            return new BadRequestErrorResponse('Tour not found');
        }
        // take all location of tour 
        const tourDetail = await tourModel.findByPk(id, {
            include: [
                {
                    model: locationModel,
                    as: 'locations',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'pointId']
                    },
                    through: {
                        model: tourLocationModel,
                        as: 'tourLocations',
                        attributes: {
                            exclude: ['tourId', 'locationId', 'createdAt', 'updatedAt']
                        }
                    },
                    include: {
                        model: pointModel,
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    }
                },
                {
                    model: pointModel,
                    as: 'centerPoint',
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                    }
                },
                {
                    model: routeModel,
                    as: 'routes',
                    attributes: {
                        exclude: ['tourId', 'createdAt', 'updatedAt']
                    },
                    include: [
                        {
                            model: pointModel,
                            as: 'points',
                            attributes: {
                                exclude: ['id', 'createdAt', 'updatedAt']
                            },
                            through: {
                                model: routePointModel,
                                as: 'routePoints',
                                attributes: {
                                    exclude: ['routeId', 'pointId', 'createdAt', 'updatedAt']
                                }
                            }
                        }
                    ]
                },
                {
                    model: tourImageModel,
                    as: 'images',
                    attributes: {
                        exclude: ['id', 'tourId', 'createdAt', 'updatedAt']
                    }
                }
            ],
            attributes: {
                exclude: ['centerPointId', 'createdAt', 'updatedAt']
            }
        });
        // const locations = [];
        // for (const tourLocation of tourLocations) {
        //     locations.push(tourLocation.location);
        // }
        return new OKResponse('Get tour by id successfully', {
            tourDetail: tourDetail
        });
    } catch (error) {
        console.log(error);
        return new InternalServerErrorResponse(error.message);
    }
}

const searchTour = async (keyword) => {
    try {
        console.log(keyword);
        const tours = await tourModel.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: `%${keyword}%`
                }
            },
            attributes: {
                exclude: ['zoomVal', "adminId", "centerPointId", "createdAt", "updatedAt"]
            }
        });
        return new OKResponse('Search tours successfully', tours);
    } catch (error) {
        return new InternalServerErrorResponse(error.message);
    }
}

module.exports = {
    getAllTours,
    getTourById,
    searchTour
}