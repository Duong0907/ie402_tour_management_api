const jwt = require('jsonwebtoken');
const { UnauthorizedErrorResponse } = require('../global/response');
const {
    logger,
    infoLevelLogging,
} = require('../middlewares/logging.middleware.js');

const tokenValidateMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        const unauthoriedResponse = new UnauthorizedErrorResponse(
            'Missing access token',
        );
        return res.status(401).json(unauthoriedResponse);
    }

    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) {
        const unauthoriedResponse = new UnauthorizedErrorResponse(
            'Invalid access token',
        );
        return res.status(401).json(unauthoriedResponse);
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, claims) => {
        if (err) {
            const unauthoriedResponse = new UnauthorizedErrorResponse(
                'Invalid access token',
            );
            return res.status(401).json(unauthoriedResponse);
        } else {
            req.claims = claims;
            next();
        }
    });
};

const adminValidateMiddleware = (req, res, next) => {
    if (!req.claims.role || req.claims.role !== 'admin') {
        const unauthoriedResponse = new UnauthorizedErrorResponse(
            'You must be admin to access this resource',
        );
        return res.status(403).json(unauthoriedResponse);
    }
    next();
};

// Admin has all user's rights
const currentUserValidateMiddleware = (req, res, next) => {
    if ((!req.claims.id || ("" + req.claims.id) !== req.params.id) && (!req.claims.role || req.claims.role !== 'admin')) {
        logger.log(
            'info',
            `User ${req.claims.id} is trying to access user ${req.params.id}`,
        );
        const unauthoriedResponse = new UnauthorizedErrorResponse(
            'You must be the same user as request to access this resource',
        );
        return res.status(403).json(unauthoriedResponse);
    }
    next();
};

module.exports = {
    tokenValidateMiddleware,
    adminValidateMiddleware,
    currentUserValidateMiddleware,
};
