const {
    CreatedResponse,
    NotFoundErrorResponse,
    OKResponse,
    BadRequestErrorResponse,
} = require('../global/response');
const db = require('../models/index');
const passwordUtil = require('../utils/password');
const { isValidEmail, isValidPassword } = require('../utils/validator');
const UserModel = db.users;

const createUser = async (user) => {
    const { username, email, password } = user;

    // Validate email
    if (!isValidEmail(email)) {
        return new BadRequestErrorResponse('Invalid email');
    }

    // Validate password
    if (!isValidPassword(password)) {
        return new BadRequestErrorResponse(
            'Password must have min 8 letter, with at least a symbol, upper and lower case letters and a number',
        );
    }

    const existedUser = await UserModel.findOne({
        where: {
            email: user.email,
        },
    });
    if (existedUser) {
        return new BadRequestErrorResponse('Existed email');
    }


    // Hash password
    let hashedPassword = await passwordUtil.hashPassword(password);

    const createdUser = await UserModel.create({
        username,
        email,
        password: hashedPassword,
    });

    // Hide password
    createdUser.password = '***';

    return new CreatedResponse('Create user successfully', {
        user_id: createdUser.id,
    });
};

const getAllUsers = async () => {
    const users = await UserModel.findAll({
        attributes: {
            exclude: ['password'],
        },
    });

    return new OKResponse('Get all users successfully', {
        users: users,
    });
};

const getUserByID = async (id) => {
    const user = await UserModel.findOne({
        where: {
            id: id,
        },
        attributes: {
            exclude: ['password'],
        },
    });

    if (!user) {
        return new NotFoundErrorResponse('User not found');
    }

    return new OKResponse('Get user by ID successfully', {
        user: user,
    });
};

const updateUser = async (useid, user) => {
    const foundUser = await UserModel.findOne(user, {
        where: {
            id: useid,
        },
    });

    if (!foundUser) {
        return new NotFoundErrorResponse('User not found');
    }

    if (user.email) {
        if (!isValidEmail(user.email)) {
            return new BadRequestErrorResponse('Invalid email');
        }

        foundUser.email = user.email;
    }

    if (user.username) {
        foundUser.username = user.username;
    }

    if (user.password) {
        if (!isValidPassword(user.password)) {
            return new BadRequestErrorResponse(
                'Password must have min 8 letter, with at least a symbol, upper and lower case letters and a number',
            );
        }
        
        foundUser.password = await passwordUtil.hashPassword(user.password);
    }

    const savedUser = await foundUser.save();

    return new OKResponse('Update user successfully', {
        user_id: savedUser,
    });
};

const deleteUser = async (userid) => {
    await UserModel.destroy({
        where: {
            id: userid,
        },
    });

    return new OKResponse('Delete user successfully', null);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByID,
    updateUser,
    deleteUser,
};
