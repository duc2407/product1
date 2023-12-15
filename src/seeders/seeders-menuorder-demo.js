'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Menuorders', [{
        id_order: 1,
        about_client: 'Nguyễn Văn A - 0333333332 - địa chỉ',
        list_id_product: '1',
        total_payment: 1399999,
        id_status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Menuorder', null, {});
    }
  };