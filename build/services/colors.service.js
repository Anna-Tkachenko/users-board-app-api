"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorService = void 0;
const models_1 = require("../models");
const getAll = () => {
    return models_1.Color.findAll();
};
exports.ColorService = {
    getAll,
};
