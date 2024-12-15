module.exports = (sequelize, DataTypes) => {
    const TourImage = sequelize.define('tour_image', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: { 
            type: DataTypes.DATE, 
            field: 'created_at',
            primaryKey: true 
        },
        updatedAt: { 
            type: DataTypes.DATE, 
            field: 'updated_at' 
        },
    });

    return TourImage;
};
