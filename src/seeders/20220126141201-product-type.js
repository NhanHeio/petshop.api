'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductTypes', [{
      name: 'Chó',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mèo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cá',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Động vật nhỏ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bò sát',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chim',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
