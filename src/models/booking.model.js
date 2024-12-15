module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('booking', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        tourId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tour_id',
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'user_id',
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending',
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

    return Booking;
};
