"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_service_1 = require("../services/users.service");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_service_1.UserService.getAll();
    res.send(users);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, carColorId } = req.body;
    if (typeof name !== 'string'
        || typeof carColorId !== 'number') {
        res.sendStatus(422);
        return;
    }
    const newUser = yield users_service_1.UserService.create({
        name,
        carColorId,
    });
    res.status(201);
    res.send(newUser);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const user = yield users_service_1.UserService.findById(+userId);
    if (!user) {
        res.sendStatus(404);
        return;
    }
    res.send(user);
});
exports.UsersController = {
    getAll,
    create,
    getById,
};
