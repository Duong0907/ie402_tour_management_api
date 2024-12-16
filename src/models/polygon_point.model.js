module.exports = (sequelize, DataTypes) => {
    const PolygonPoint = sequelize.define('polygon_point', {
        pointId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'point_id',
        },
        polygonId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'polygon_id',
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
        tableName: 'POLYGON_POINT',
        timestamps: true,
    });

    return PolygonPoint;
};
