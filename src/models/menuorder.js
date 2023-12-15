'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menuorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Menuorder.init({
    id_order: DataTypes.INTEGER,
    about_client: DataTypes.STRING,
    list_id_product: DataTypes.STRING,
    total_payment: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menuorder',
  });
  return Menuorder;
};
