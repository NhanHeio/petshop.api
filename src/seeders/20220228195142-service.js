'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Services',[{
      name: 'Tắm sấy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cắt tỉa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Khám bệnh',
      createdAt: new Date(),
      updatedAt: new Date()
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
