module.exports = (sequelize, DataTypes) => {
    const Polygon = sequelize.define('point', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        longtitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
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

    return Polygon;
};
