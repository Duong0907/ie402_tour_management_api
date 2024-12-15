const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    port: dbConfig.port,
    logging: false,
    dialectOptions: {
        ssl: {
            require: dbConfig.SSL_MODE,
            rejectUnauthorized: false,
        },
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connect Db successfully');
    })
    .catch((err) => {
        console.log('Error when connecting to db: ', +err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user.model.js')(sequelize, DataTypes);
db.regions = require('./region.model.js')(sequelize, DataTypes);
db.polygons = require('./polygon.model.js')(sequelize, DataTypes);
db.locations = require('./location.model.js')(sequelize, DataTypes);
db.points = require('./point.model.js')(sequelize, DataTypes);
db.polygon_regions = require('./polygon_region.model.js')(sequelize, DataTypes);
db.polygon_points = require('./polygon_point.model.js')(sequelize, DataTypes);
db.tours = require('./tour.model.js')(sequelize, DataTypes);
db.routes = require('./route.model.js')(sequelize, DataTypes);
db.tour_locations = require('./tour_location.model.js')(sequelize, DataTypes);
db.route_points = require('./route_point.model.js')(sequelize, DataTypes);
db.tour_images = require('./tour_image.model.js')(sequelize, DataTypes);
db.comments = require('./comment.model.js')(sequelize, DataTypes);
db.bookings = require('./booking.model.js')(sequelize, DataTypes);

///////////////// Init associations /////////////////
// location and tour: many to many
db.tours.belongsToMany(db.locations, {
    through: db.tour_locations,
    foreignKey: 'tourId',
    otherKey: 'locationId',
});
db.locations.belongsToMany(db.tours, {
    through: db.tour_locations,
    foreignKey: 'locationId',
    otherKey: 'tourId',
});

// location and point: one to one
db.locations.hasOne(db.points, {
    foreignKey: 'pointId',
    foreignKeyConstraint: true,
});
db.points.belongsTo(db.locations);

// location and polygon: one to one
db.locations.hasOne(db.polygons, {
    foreignKey: 'polygonId',
    foreignKeyConstraint: true,
});
db.polygons.belongsTo(db.locations);

// region and location: one to many
db.regions.hasMany(db.locations, {
    foreignKey: 'regionId',
    foreignKeyConstraint: true,
});
db.locations.belongsTo(db.regions);

// region and polygon: many to many
db.regions.belongsToMany(db.polygons, {
    through: db.polygon_regions,
    foreignKey: 'regionId', // Use 'foreignKey' instead of 'key'
    otherKey: 'polygonId',       // Specify the foreign key for the other model
});
db.polygons.belongsToMany(db.regions, {
    through: db.polygon_regions,
    foreignKey: 'polygonId',
    otherKey: 'regionId',
});

// polygon and point: many to many
db.polygons.belongsToMany(db.points, {
    through: db.polygon_points,
    foreignKey: 'polygonId',
    otherKey: 'pointId',
});
db.points.belongsToMany(db.polygons, {
    through: db.polygon_points,
    foreignKey: 'pointId',
    otherKey: 'polygonId',
});

// tour and route: one to many
db.tours.hasMany(db.routes, {
    foreignKey: 'tourId',
    foreignKeyConstraint: true,
});
db.routes.belongsTo(db.tours);

// tour and image: one to many
db.tours.hasMany(db.tour_images, {
    foreignKey: 'tourId',
    foreignKeyConstraint: true,
});
db.tour_images.belongsTo(db.tours);

// user and tour (is admin of): one to many
db.users.hasMany(db.tours, {
    foreignKey: 'adminId',
    foreignKeyConstraint: true,
});
db.tours.belongsTo(db.users);

// route and point: many to many
db.routes.belongsToMany(db.points, {
    through: db.route_points,
    foreignKey: 'routeId',
    otherKey: 'pointId',
});
db.points.belongsToMany(db.routes, {
    through: db.route_points,
    foreignKey: 'pointId',
    otherKey: 'routeId',
});

// point and tour (is center point of): one to many
db.points.hasMany(db.tours, {
    foreignKey: 'centerPointId',
    foreignKeyConstraint: true,
});
db.tours.belongsTo(db.points);


// ---------------------------
// user and comment: one to many
db.users.hasMany(db.comments, {
    foreignKey: 'userId',
    foreignKeyConstraint: true,
});
db.comments.belongsTo(db.users);

// tour and comment: one to many
db.tours.hasMany(db.comments, {
    foreignKey: 'tourId',
    foreignKeyConstraint: true,
});
db.comments.belongsTo(db.tours);

// user and booking: one to many
db.users.hasMany(db.bookings, {
    foreignKey: 'userId',
    foreignKeyConstraint: true,
});
db.bookings.belongsTo(db.users);

// tour and booking: one to many
db.tours.hasMany(db.bookings, {
    foreignKey: 'tourId',
    foreignKeyConstraint: true,
});
db.bookings.belongsTo(db.tours);


///////////// Sync database //////////////
// If 'force' is set = true, data will be deleted when starting server
db.sequelize.sync({ force: false }).then(() => {
    console.log('Sequelize sync done');
});

module.exports = db;
