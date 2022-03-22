const bcrypt = require('bcrypt');
'use strict';
const salt = bcrypt.genSaltSync(10);
const password = bcrypt.hashSync('123', salt);

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Ho Trung Nhan',
      phone_number: '0774000828',
      address: '123 ấp Trường Hòa A, xã Trường Long A, Châu Thành A, Hậu Giang',
      email: 'hotrungnhan2000@gmail.com',
      birthday: new Date(),
      password: password,
      role_id: 1,
      img: 'https://agriviet.org/wp-content/uploads/2020/12/cach-cham-soc-cho-rotteweiler-3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Le Thi Huynh Giao',
      phone_number: '0796925592',
      address: 'ấp Trường Hòa A, xã Trường Long A, Châu Thành A, Hậu Giang',
      email: 'lethihuynhgiao@gmail.com',
      birthday: new Date(),
      password: password,
      role_id: 2,
      img: 'https://agriviet.org/wp-content/uploads/2020/12/cach-cham-soc-cho-rotteweiler-3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyen Huu Thien Phu',
      phone_number: '0898007389',
      address: '132/42B Hưng Lợi, Ninh Kiều, TP.Cần Thơ',
      email: 'nguyenhuuthienphu@gmail.com',
      birthday: new Date(),
      password: password,
      role_id: 2,
      img: 'https://agriviet.org/wp-content/uploads/2020/12/cach-cham-soc-cho-rotteweiler-3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ho Ngoc Dung',
      phone_number: '0706391039',
      address: '123 ấp Trường Hòa A, xã Trường Long A, Châu Thành A, Hậu Giang',
      email: 'hongocdung@gmail.com',
      birthday: new Date(),
      password: password,
      role_id: 3,
      img: 'https://agriviet.org/wp-content/uploads/2020/12/cach-cham-soc-cho-rotteweiler-3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nguyen Thi Thanh Van',
      phone_number: '033619425',
      address: '123 ấp Trường Hòa A, xã Trường Long A, Châu Thành A, Hậu Giang',
      email: 'nguyenthithanhvan@gmail.com',
      birthday: new Date(),
      password: password,
      role_id: 3,
      img: 'https://agriviet.org/wp-content/uploads/2020/12/cach-cham-soc-cho-rotteweiler-3.jpg',
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
