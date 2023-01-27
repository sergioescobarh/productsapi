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
      Products.belongsTo(models.Brands, {
        foreignKey:'id',
        target_key:'brand_id'
      })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    productImage: DataTypes.STRING,
    discount: DataTypes.STRING,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};