module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('booking', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        tourId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tour_id',
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending',
        },
        ticketQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ticket_quantity',
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'total_price',
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
        tableName: 'BOOKING',
        timestamps: true,
    });

    return Booking;
};
