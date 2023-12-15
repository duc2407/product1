'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_product: {
        type: Sequelize.STRING
      },
      type_product: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.STRING
      },
      quantily: {
        type: Sequelize.INTEGER
      },
      id_size: {
        type: Sequelize.INTEGER
      },
      url_img: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      percent_sale: {
        type: Sequelize.INTEGER
      },
      sale: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};