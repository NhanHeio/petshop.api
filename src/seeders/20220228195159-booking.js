'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bookings', [{
      service: 'Cạo lông',
      user_id: 34,
      username: 'Nguyen Huu Thien Phu',
      date: 'Sat Mar 12 2022',
      time: '8:00 - 9:00',
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
