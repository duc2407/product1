'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Statuses', [{
        id_status: 1,
        name: 'Chờ xác nhận',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Statuses', null, {});
    }
  };