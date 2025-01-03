const db = require('../models/index');
const passwordUtil = require('../utils/password');
const jwtUtil = require('../utils/jwt');
const { BadRequestErrorResponse, OKResponse } = require('../global/response');
const { isValidEmail } = require('../utils/validator');
const userModel = db.users;

const login = async (credentials) => {
    const { email, password } = credentials;
    if (!email || !password) {
        return new BadRequestErrorResponse("Email and password are required");
    }


    const user = await userModel.findOne({
        where: {
            email: credentials.email,
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    // Check username
    if (!user) {
        return new BadRequestErrorResponse('Wrong username or password');
    }

    // Check password
    const isCorrect = await passwordUtil.comparePassword(
        credentials.password,
        user.password,
    );
    if (!isCorrect) {
        return new BadRequestErrorResponse('Wrong username or password');
    }

    // Generate access token
    const claims = {
        id: user.id,
        role: user.role,
    };
    const accessToken = jwtUtil.generateAccessToken(claims);
    // Remove password from user object before returning
    delete user.dataValues.password;

    return new OKResponse('Login successfully', {
        user: user,
        access_token: accessToken,
    });
};

module.exports = {
    login,
};
