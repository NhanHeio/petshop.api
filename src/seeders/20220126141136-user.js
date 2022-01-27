'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Ho Trung Nhan',
      phone_number: '0774000828',
      birthday: new Date(),
      password: '123',
      role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Le Thi Huynh Giao',
      phone_number: '0796925592',
      birthday: new Date(),
      password: '123',
      role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyen Huu Thien Phu',
      phone_number: '0898007389',
      birthday: new Date(),
      password: '123',
      role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ho Ngoc Dung',
      phone_number: '0706391039',
      birthday: new Date(),
      password: '123',
      role_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyen Thi Thanh Van',
      phone_number: '033619425',
      birthday: new Date(),
      password: '123',
      role_id: 3,
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
