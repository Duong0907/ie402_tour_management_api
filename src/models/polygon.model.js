module.exports = (sequelize, DataTypes) => {
    const Polygon = sequelize.define('polygon', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
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
        tableName: 'POLYGON',
        timestamps: true,
    });

    return Polygon;
};
