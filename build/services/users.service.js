"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const models_1 = require("../models");
const getAll = () => {
    return models_1.User.findAll();
};
const create = ({ name, carColorId }) => {
    return models_1.User.create({
        name,
        carColorId,
    });
};
const findById = (userId) => {
    return models_1.User.findByPk(userId);
};
exports.UserService = {
    getAll,
    create,
    findById,
};
