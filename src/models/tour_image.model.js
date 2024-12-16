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
        tourId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tour_id',
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
    }, {
        tableName: 'TOUR_IMAGE',
        timestamps: true,
    });

    return TourImage;
};
