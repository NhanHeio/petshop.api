'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      name: 'Quản lý',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nhân viên',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Khách hàng',
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
