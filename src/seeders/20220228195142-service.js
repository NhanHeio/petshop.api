'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Services',[{
      name: 'Tắm sấy',
    },
    {
      name: 'Cắt tỉa',
    },
    {
      name: 'Khám bệnh',
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
