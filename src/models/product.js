'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    id_product: DataTypes.STRING,
    type_product: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantily: DataTypes.INTEGER,
    id_size: DataTypes.INTEGER,
    url_img: DataTypes.STRING,
    price: DataTypes.INTEGER,
    percent_sale: DataTypes.INTEGER,
    sale: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
