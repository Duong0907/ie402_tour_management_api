module.exports = (sequelize, DataTypes) => {
    const PolygonRegion = sequelize.define('polygon_region', {
        regionId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'region_id',
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
        tableName: 'POLYGON_REGION',
        timestamps: true,
    });

    return PolygonRegion;
};
