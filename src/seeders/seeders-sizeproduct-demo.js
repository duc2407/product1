'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Sizeproducts', [{
        id_size: 1,
        name: 'size áo',
        size: 'S,M,L,XL,XLL',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Sizeproducts', null, {});
    }
  };