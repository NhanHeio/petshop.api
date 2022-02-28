'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Providers',[{
      name: 'Công ty TNHH Trung Nhân',
      address: '123 ấp Trường Hòa A, xã Trường Long A, Châu Thành A, Hậu Giang',
    },
    
  ])
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
