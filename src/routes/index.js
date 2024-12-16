const userRouter = require('./user.router');
const authRouter = require('./auth.router');
const tourRouter = require('./tour.router');

const setupRouter = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/', authRouter);
    app.use('/api/tours', tourRouter);

    // Handling Not found end points
    app.get('*', (req, res, next) => {
        const err = new Error(
            `Can't not find ${req.originalUrl} on the server!`,
        );
        err.statusCode = 404;
        next(err);
    });
};

module.exports = setupRouter;
