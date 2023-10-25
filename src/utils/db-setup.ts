import { Sequelize } from 'sequelize-typescript';
import { Color, User } from '../models';

const DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dpg-ckodfinkc2qc739934qg-a.frankfurt-postgres.render.com/${process.env.DB_NAME}`;

const sequelize = new Sequelize(DB_URI, {
  models: [Color, User],
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export async function reset() {
  await sequelize.sync({ force: true });
}

export async function fillDbWithData() {
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

  await Color.bulkCreate(colors);
  await User.bulkCreate(users);
}

export function resetDb() {
  connect()
    .then(reset)
    .then(fillDbWithData);
}