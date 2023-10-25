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
exports.resetDb = exports.fillDbWithData = exports.reset = exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dpg-ckodfinkc2qc739934qg-a.frankfurt-postgres.render.com/${process.env.DB_NAME}`;
const sequelize = new sequelize_typescript_1.Sequelize(DB_URI, {
    models: [models_1.Color, models_1.User],
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
exports.connect = connect;
function reset() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sequelize.sync({ force: true });
    });
}
exports.reset = reset;
function fillDbWithData() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = [
            { name: 'Joe Biden', carColorId: 5 },
            { name: 'Elon Musk', carColorId: 4 },
            { name: 'Pan Roman', carColorId: 2 },
        ];
        const colors = [
            { name: 'Black' },
            { name: 'DeepPink' },
            { name: 'Red' },
            { name: 'Aquamarine' },
            { name: 'Gold' },
            { name: 'YellowGreen' },
            { name: 'Yellow' },
        ];
        yield models_1.Color.bulkCreate(colors);
        yield models_1.User.bulkCreate(users);
    });
}
exports.fillDbWithData = fillDbWithData;
function resetDb() {
    connect()
        .then(reset)
        .then(fillDbWithData);
}
exports.resetDb = resetDb;
