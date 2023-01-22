'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    productImage: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    collection: DataTypes.STRING,
    collectionDescription: DataTypes.STRING,
    categories: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    quantity: DataTypes.STRING,
    featured: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
    timestamps: false,
  });
  return Products;
};