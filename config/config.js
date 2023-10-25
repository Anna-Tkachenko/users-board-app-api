const fs = require('fs');
require('dotenv').config();

const DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dpg-ckodfinkc2qc739934qg-a.frankfurt-postgres.render.com/${process.env.DB_NAME}`;

const dbConfig = {
  url: DB_URI,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: { ...dbConfig },
  test: { ...dbConfig },
  production: { ...dbConfig },
};