module.exports = (sequelize, DataTypes) => {
    const RoutePoint = sequelize.define('polygon_region', {
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
            field: 'created_at' 
        },
        updatedAt: { 
            type: DataTypes.DATE, 
            field: 'updated_at' 
        },
    });

    return RoutePoint;
};
