import express from 'express';
import cors from 'cors';
import { UsersController } from './controllers/users.controller';
import { ColorsController } from './controllers/colors.controllers';
import dotenv from 'dotenv';

dotenv.config();

import { connect } from './utils/db-setup';

connect();

const PORT = 5000;
const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_URL;

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.get('/users', UsersController.getAll);

app.post('/users', express.json(), UsersController.create);

app.get('/users/:userId', UsersController.getById);

app.get('/colors', ColorsController.getAll);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
