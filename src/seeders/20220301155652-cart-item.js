'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('CartItems',[{
      cart_id: 1,
      product_id: 1,
      product_name: 'Equilibrio',
      img: `https://dogily.vn/wp-content/uploads/2021/12/hat-equilibrio-cho-cho-truong-thanh-1.jpg`,
      price: 298000,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id: 1,
      product_id: 2,
      product_name: 'Dog Mania',
      img: `https://dogily.vn/wp-content/uploads/2021/12/dog-mania-cho-cho-truong-thanh-3-kg-1-250x300.jpg`,
      price: 280000,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
