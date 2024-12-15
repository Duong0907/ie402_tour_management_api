module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('location', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'point',
        },
        polygonId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'polygon_id',
        },
        regionId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'region_id',
        },
        pointId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'point_id',
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: false,
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

    return Location;
};
