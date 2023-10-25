"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_controller_1 = require("./controllers/users.controller");
const colors_controllers_1 = require("./controllers/colors.controllers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_setup_1 = require("./utils/db-setup");
(0, db_setup_1.connect)();
const PORT = 5000;
const app = (0, express_1.default)();
const CLIENT_ORIGIN = process.env.CLIENT_URL;
app.use((0, cors_1.default)({
    origin: CLIENT_ORIGIN,
}));
app.get('/users', users_controller_1.UsersController.getAll);
app.post('/users', express_1.default.json(), users_controller_1.UsersController.create);
app.get('/users/:userId', users_controller_1.UsersController.getById);
app.get('/colors', colors_controllers_1.ColorsController.getAll);
app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
