'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [{
        id_product: 'sp02',
        type_product: 1,
        name: 'Quần Superme',
        description: '',
        quantily: 200,
        id_size: 1,
        url_img: 'anhmau.jpg',
        price: 1399999,
        percent_sale: 20,
        sale: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
    }
  };