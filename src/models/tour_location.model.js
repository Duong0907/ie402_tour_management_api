module.exports = (sequelize, DataTypes) => {
    const TourLocation = sequelize.define('tour_location', {
        tourId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'tour_id',
        },
        locationId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'location_id',
        },
        createdAt: {
            type: DataTypes.DATE, 
            field: 'created_at' 
        },
        updatedAt: { 
            type: DataTypes.DATE, 
            field: 'updated_at' 
        },
    });

    return TourLocation;
};
