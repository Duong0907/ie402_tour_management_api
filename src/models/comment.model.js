module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'user_id',
        },
        tourId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tour_id',
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: { 
            type: DataTypes.DATE, 
            field: 'created_at',
            primaryKey: true 
        },
        updatedAt: { 
            type: DataTypes.DATE, 
            field: 'updated_at' 
        },
    });

    return Comment;
};
