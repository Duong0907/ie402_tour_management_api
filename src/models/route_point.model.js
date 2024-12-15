module.exports = (sequelize, DataTypes) => {
    const RoutePoint = sequelize.define('route_point', {
        routeId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'route_id',
        },
        pointId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'point_id',
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
    });

    return RoutePoint;
};
