module.exports = (sequelize, DataTypes) => {
    const Tour = sequelize.define('location', {
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        dateStart: {
            type: DataTypes.DATE,
            // allowNull: false,
            field: 'date_start',
        },
        totalTime: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'total_time',
        },
        thumbnailImg: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'thumbnail_img',
        },
        zoomValue: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'zoom_value',
        },
        adminId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'admin_id',
        },
        centerPointId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'center_point_id',
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

    return Tour;
};
