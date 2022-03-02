'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bookings', [{
      service_id: 1,
      user_id: 3,
      date: new Date(),
      time: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
