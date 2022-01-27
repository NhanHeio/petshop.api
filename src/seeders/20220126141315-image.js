'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [{
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/hat-equilibrio-cho-cho-truong-thanh-1.jpg`,
      imageable_id: 1,
      imageable_type: 'thumb',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/hat-equilibrio-cho-cho-truong-thanh-2.jpg`,
      imageable_id: 1,
      imageable_type: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/hat-equilibrio-cho-cho-truong-thanh-3.jpg`,
      imageable_id: 1,
      imageable_type: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/dog-mania-cho-cho-truong-thanh-3-kg-1-250x300.jpg`,
      imageable_id: 2,
      imageable_type: 'thumb',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/dog-mania-cho-cho-truong-thanh-3-kg-1-510x510.jpg`,
      imageable_id: 2,
      imageable_type: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/dog-mania-cho-cho-truong-thanh-3-kg-3-510x510.jpg`,
      imageable_id: 2,
      imageable_type: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/nature-kitchen-xuong-khop-cho-cho-2-kg-4-510x510.jpg`,
      imageable_id: 3,
      imageable_type: 'thumb',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/nature-kitchen-xuong-khop-cho-cho-2-kg-1-510x510.jpg`,
      imageable_id: 3,
      imageable_type: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/nature-kitchen-xuong-khop-cho-cho-2-kg-3-510x510.jpg`,
      imageable_id: 3,
      imageable_type: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2020/02/day_dat_yem_police_25mm-510x510.jpg`,
      imageable_id: 4,
      imageable_type: 'thumb',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/msg-684918299-905-510x510.jpg`,
      imageable_id: 5,
      imageable_type: 'thumb',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/msg-684918299-904-510x510.jpg`,
      imageable_id: 5,
      imageable_type: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Product',
      url: `https://dogily.vn/wp-content/uploads/2021/12/msg-684918299-906-510x510.jpg`,
      imageable_id: 5,
      imageable_type: 'image',
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
