'use strict';

const colors = [
  { name: 'Black' },
  { name: 'DeepPink' },
  { name: 'Red' },
  { name: 'Aquamarine' },
  { name: 'Gold' },
  { name: 'YellowGreen' },
  { name: 'Yellow' },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('colors', colors);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colors', {
      name: colors.map(({ name }) => name),
    });
  }
};
